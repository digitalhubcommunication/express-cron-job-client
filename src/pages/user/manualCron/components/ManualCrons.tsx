export default function ManualCrons() {
  return (
    <div>
         {/* <table className="table-shadow rounded-[10px] overflow-hidden text-[16px] md:text-[15px] 2xl:text-[16px] min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="md:w-14 px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Domain
                      </th>
                      <th
                        scope="col"
                        className="md:w-20 lg:w-[10%] 2xl:w-[11%] px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="md:w-20 lg:w-[10%] 2xl:w-[11%]  px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                      <th
                        scope="col"
                        className="md:w-20 lg:w-[10%] 2xl:w-[11%] text-center px-4 py-2 font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg"
                      >
                        Response
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cronJobs.length === 0 ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-4 py-4 whitespace-nowrap text-gray-500 text-center"
                        >
                          No cron jobs found for this user.
                        </td>
                      </tr>
                    ) : (
                      cronJobs.map((domain, index) => (
                        <tr
                          key={domain._id}
                          className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          <td className="md:w-14 px-4 py-3.5 whitespace-nowrap font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="overflow-x-auto 2xl:max-w-[20%] px-4 py-3.5 whitespace-nowrap text-blue-600 hover:underline">
                            <a
                              href={`https://${domain.url}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {domain.url}
                            </a>
                          </td>
                          <td className="md:w-20 lg:w-[10%] 2xl:w-[11%] text-center px-4 py-3.5 whitespace-nowrap text-gray-500">
                            {domain.cronType}
                          </td>
                          <td className="md:w-20 lg:w-[10%] 2xl:w-[11%] text-center px-4 py-3.5 whitespace-nowrap text-gray-500">
                            {formatDate(new Date(), "dd MMM yyyy")}
                          </td>
                          <td className="md:w-20 lg:w-[10%] 2xl:w-[11%] text-center px-4 py-3.5 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex leading-5 font-semibold rounded-full ${
                                domain.status === "enabled"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-800"
                              }`}
                            >
                              {domain.status.charAt(0).toUpperCase() +
                                domain.status.slice(1)}
                            </span>
                          </td>
                          <td className="md:w-20 lg:w-[10%] 2xl:w-[11%]  text-center px-4 py-3.5 whitespace-nowrap font-medium">
                            <button
                              onClick={() => handleToggleStatus(domain._id)}
                              className={`px-3 py-1 rounded-md text-white font-semibold transition-colors duration-200 ${
                                domain.status === "enabled"
                                  ? "bg-yellow-500 hover:bg-yellow-600"
                                  : "bg-green-500 hover:bg-green-600"
                              }`}
                            >
                              {domain.status === "enabled" ? "Disable" : "Enable"}
                            </button>
                          </td>
                          <td className="md:w-20 lg:w-[10%] 2xl:w-[11%] text-center px-4 py-3.5 whitespace-nowrap font-medium">
                            <button
                              onClick={() => handleCheckResponse(domain._id)}
                              className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors duration-200"
                            >
                              Check Cron
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table> */}
    </div>
  )
}
