import { useLazyGetAdminCronHistoryQuery } from "@/redux/features/adminActions/adminActions";
import CronLogs from "../../cronHistory/CronLogs";
import { useEffect, useState } from "react";
import { ICronLog } from "@/types/types";
import { toast } from "react-toastify";
import DeleteCronHistory from "../../cronHistory/DeleteCronHistory";

export type TCronType = "" | "manual" | "default";
export type TFilterBy = "title" | "status";
export type TStatusCode = "200" | "400" | "";

export default function SingleUserCronHistory({ userId }: { userId: string }) {
  const [getCronLog, {}] = useLazyGetAdminCronHistoryQuery();

  const [isLoading, setIsLoading] = useState(true);
  const [logs, setLogs] = useState<ICronLog[]>([]);
  const [cronType, setCronType] = useState<TCronType>("");

  const [filterBy, setFilterBy] = useState<TFilterBy>("status");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusCode, setStatusCode] = useState<TStatusCode>("");
  const [domainTitle, setDomainTitle] = useState("");
  const [refetch, setRefetch] = useState(false);
  const limit = 50;

  useEffect(() => {
    const loadLog = async () => {
      !isLoading && setIsLoading(true);
      let params: URLSearchParams = new URLSearchParams({
        page: currentPage.toString(),
        limit: `${limit}`,
        userId,
        filterBy,
      });

      if (cronType) {
        params.append("domainType", cronType);
      }

      if (cronType === "manual") {
        if (filterBy === "status" && statusCode) {
          params.append("status", statusCode);
        } else if (filterBy === "title" && domainTitle) {
          params.append("domainTitle", domainTitle);
        }
      } else {
        if (statusCode) {
          params.append("status", statusCode);
        }
      }

      try {
        const query = params.toString();
        const res = await getCronLog(query).unwrap();
        if (res.logs && res.logs?.length > 0) {
          setLogs(res.logs);
          setTotalPages(res.pages);
        } else {
          setLogs([]);
          setTotalPages(1);
        }
      } catch (error) {
        toast.error("Internal server error");
        console.log(error);
        setTotalPages(1);
      } finally {
        setIsLoading(false);
        setRefetch(false);
      }
    };

    loadLog();
  }, [
    filterBy,
    currentPage,
    cronType,
    statusCode,
    domainTitle,
    refetch === true,
    userId,
  ]);

  return (
    <section className="mt-5 md:mt-10 xl:mt-20">
      <CronLogs
        cronType={cronType}
        setRefetch={setRefetch}
        setLogs={setLogs}
        logs={logs}
        domainTitle={domainTitle}
        setDomainTitle={setDomainTitle}
        statusCode={statusCode}
        setStatusCode={setStatusCode}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        setCurrentPage={setCurrentPage}
        limit={limit}
        totalPages={totalPages}
        currentPage={currentPage}
        isLoading={isLoading}
        setCronType={setCronType}
        key="ALL_USERS_CRON"
      >
        {!!logs.length && cronType === "" ? (
          <DeleteCronHistory
            key="ADMIN_CRON_LOG_FILTER"
            setLogs={setLogs}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <></>
        )}
      </CronLogs>
    </section>
  );
}
