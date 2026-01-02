import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { useDeleteSingleUserCronHistoryMutation } from "@/redux/features/adminActions/adminActions";
import { ICronLog } from "@/types/types";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

type Props = {
    setLogs: Dispatch<SetStateAction<ICronLog[]>>;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    userId: string;
}

export default function DeleteSingleUserCronHistory({ setCurrentPage, setLogs, userId }: Props) {
    const [clearLog, { isLoading }] = useDeleteSingleUserCronHistoryMutation()
    const handleClear = async () => {
        try {
            const res = await clearLog({ userId }).unwrap();
            if (res?.deletedCount) {
                setCurrentPage(1);
                setLogs([]);
                toast.success("Log deleted")
            } else {
                toast.error("Error deleting logs")
            }
        } catch (error: any) {
            console.log(error?.data?.message)
            toast.error(error?.data?.message || "Error deleting logs")
        }
    };

    if (isLoading)
        return (
            <div className="w-full min-h-[150px] flex items-center justify-start pl-10">
                <LoadingSpinner
                    className="min-h-[39.81px]"
                    containerClass="w-6 md:w-8 h-6 2xl:h-8"
                    squareClasses={["bg-black", "bg-black", "bg-black "]}
                />
            </div>
        );

    return (
        <button
            onClick={handleClear}
            className="btn whitespace-nowrap btn-danger py-1!"
        >
            Clear all history
        </button>
    );
}
