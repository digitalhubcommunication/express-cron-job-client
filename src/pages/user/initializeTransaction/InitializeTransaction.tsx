import PageLoading from "@/components/loading/PageLoading";
import ErrorMessage from "@/components/shared/ErrorMessage";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import {
  useInitializeTransactionMutation,
  useSubscribePackageMutation,
} from "@/redux/features/userAction/userActionApi";
import { IInitializeTransactionResponse } from "@/types/types";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "react-toastify";
import walletImage from "@/assets/images/wallet_address.png";
import WalletCopyBtn from "./components/WalletCopyBtn";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

export default function InitializeTransaction() {
  // hooks
  const navigate = useNavigate()
  const [initiate, { isLoading }] = useInitializeTransactionMutation();
  const [subscribePackage, { isLoading: loading }] =
    useSubscribePackageMutation();
  const [searchParams] = useSearchParams();
  const packageId = searchParams.get("packageId");
  const [transactionHash, setTransactionHash] = useState("");

  //  package info
  const [initializeTransactionResponse, setInitializeTransactionResponse] =
    useState<IInitializeTransactionResponse | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await initiate({ packageId }).unwrap();
        console.log(res, " res");
        if (res.success && res.data) {
          setInitializeTransactionResponse(res.data);
        } else {
          throw new Error(res.message);
        }
      } catch (error: any) {
        console.log(error);
        toast.error(error?.data?.message || "Payment initialization error");
      }
    };

    // init
    init();
  }, []);

  // Handlers
  const handleSubmit = async () => {
    if (!transactionHash || !initializeTransactionResponse?.package?.price)
      return;

    const paymentData = {
      amount: initializeTransactionResponse?.package.price,
      packageId: initializeTransactionResponse?.package._id,
      transactionHash,
    };

    try {
      const result = await subscribePackage(paymentData).unwrap();
      console.log(result, " result");
      if (result?.success) {
        toast.success(`Payment success. ${initializeTransactionResponse.package.name} activated.`);
        navigate(`/settings/dashboard}`)
      } else {
        throw new Error(result?.data?.message);
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
      // console.error("Login error:", error?.data?.message);
    }
  };

  if (isLoading) return <PageLoading />;
  if (!initializeTransactionResponse)
    return (
      <div className="w-full min-h-[600px] flex items-center justify-center text-center text-red-500">
        <ErrorMessage msg="Error initializing payment." />
      </div>
    );

  return (
    <DashboardContainer className="min-h-[80%] lg:min-h-[90%] w-full flex items-center justify-center">
      <div className="w-full max-w-[600px] bg-gray-50 shadow-sm px-4 md:px-5 py-3 md:py-4 lg:py-5 rounded-md">
        <h4 className="text-center">Payment information</h4>
        <div className="w-full items-start flex-col flex gap-1 mt-3">
          <img
            src={walletImage}
            width={380}
            height={380}
            className="w-full block mx-auto h-auto max-w-[320px] lg:max-w-[380px]"
            alt="Wallet address"
          />
          <p className="text-center mb-3 w-full">
            Scan the above QR code for payment
          </p>
          {!!initializeTransactionResponse?.package?.name && (
            <p>
              Package Name : {initializeTransactionResponse?.package?.name}{" "}
            </p>
          )}
          {!!initializeTransactionResponse?.package?.validity && (
            <p>
              Validity : {initializeTransactionResponse?.package?.validity} days{" "}
            </p>
          )}
           {!!initializeTransactionResponse?.package?.price && (
            <p>
              Amount : ${initializeTransactionResponse?.package?.price}
            </p>
          )}
          {!!initializeTransactionResponse?.package?.manualCronLimit && (
            <p>
              Manual cron limit :{" "}
              {initializeTransactionResponse?.package?.manualCronLimit}{" "}
            </p>
          )}
          <p className="max-w-full">
            <span>Wallet</span> :{" "}
            <span className="max-w-full wrap-normal w-full overflow-x-auto ">
              {initializeTransactionResponse?.wallet_address}
            </span>
          </p>
          {!!initializeTransactionResponse?.wallet_address && (
            <WalletCopyBtn
              wallet={initializeTransactionResponse?.wallet_address}
            />
          )}
          <input
            onChange={(e) => setTransactionHash(e.target.value)}
            value={transactionHash}
            placeholder="Enter transaction hash to verify"
            className="w-full py-1.5 rounded-md px-3 border border-gray-300 mt-5 outline-0 focus:border-gray-400"
          />
          {loading ? (
           <div className="w-full flex items-center justify-center mt-3">
             <LoadingSpinner
              totalVisuals={3}
              containerClass="w-6 md:w-8 h-6 2xl:h-8"
            />
           </div>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!transactionHash}
              className={`btn  w-full mt-1 ${
                !transactionHash
                  ? "pointer-events-none btn-disabled cursor-none"
                  : "btn-success"
              }`}
            >
              Subscribe
            </button>
          )}
        </div>
      </div>
    </DashboardContainer>
  );
}
