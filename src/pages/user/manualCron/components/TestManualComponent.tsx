import { splitUrlIntoSpans } from "@/utils/utils";
import React from "react";

export default function TestManualComponent() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(600px,1fr))] gap-5 mt-5">
      <div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative">
        <p className="flex items-center gap-2">
          <span className="font-semibold">Title: </span>
          <span>Other_Fusion_1</span>
        </p>
        <p className="flex flex-col md:flex-row md:items-center md:gap-2">
          <span className="font-semibold">URL: </span>
          <span className="flex flex-wrap">{
            splitUrlIntoSpans("https://kingunlocker.com/includes/cron.php?action=fusion1_updateprice&amp;Other_Fusion_1=true").map(ch=><span>{ch}</span>)
            }  
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Execution Time: </span>
          <span>30 Minutes</span>
        </p>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Status: </span>
            <button
              className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            "
              aria-checked="true"
              role="switch"
            >
              <span
                title="Active"
                className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                "
                aria-hidden="true"
              ></span>
            </button>
          </div>
          <button>
            <svg
              className="w-5 h-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                fill="currentcolor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative">
        <p className="flex items-center gap-2">
          <span className="font-semibold">Title: </span>
          <span>Other_Script_101</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">URL: </span>
          <span className="text-wrap wrap-break-word">
            https://kingunlocker.com/includes/cron.php?action=fusion101_updateprice&amp;Other_Script_101=true
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Execution Time: </span>
          <span>30 Minutes</span>
        </p>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Status: </span>
            <button
              className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            "
              aria-checked="true"
              role="switch"
            >
              <span
                title="Active"
                className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                "
                aria-hidden="true"
              ></span>
            </button>
          </div>
          <button>
            <svg
              className="w-5 h-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                fill="currentcolor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative">
        <p className="flex items-center gap-2">
          <span className="font-semibold">Title: </span>
          <span>Chimera_Tool</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">URL: </span>
          <span className="text-wrap wrap-break-word">
            https://kingunlocker.com/includes/cron.php?action=chimeratool_updateprice&amp;Chimera_Tool=true
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Execution Time: </span>
          <span>30 Minutes</span>
        </p>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Status: </span>
            <button
              className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            "
              aria-checked="true"
              role="switch"
            >
              <span
                title="Active"
                className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                "
                aria-hidden="true"
              ></span>
            </button>
          </div>
          <button>
            <svg
              className="w-5 h-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                fill="currentcolor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative">
        <p className="flex items-center gap-2">
          <span className="font-semibold">Title: </span>
          <span>Other_Fusion_2</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">URL: </span>
          <span className="text-wrap wrap-break-word">
            https://kingunlocker.com/includes/cron.php?action=fusion2_updateprice&amp;Other_Fusion_2=true
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Execution Time: </span>
          <span>30 Minutes</span>
        </p>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Status: </span>
            <button
              className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            "
              aria-checked="true"
              role="switch"
            >
              <span
                title="Active"
                className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                "
                aria-hidden="true"
              ></span>
            </button>
          </div>
          <button>
            <svg
              className="w-5 h-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                fill="currentcolor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative">
        <p className="flex items-center gap-2">
          <span className="font-semibold">Title: </span>
          <span>Other_Fusion_10</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">URL: </span>
          <span className="text-wrap wrap-break-word">
            https://kingunlocker.com/includes/cron.php?action=fusion10_updateprice&amp;Other_Fusion_10_=true
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Execution Time: </span>
          <span>30 Minutes</span>
        </p>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Status: </span>
            <button
              className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            "
              aria-checked="true"
              role="switch"
            >
              <span
                title="Active"
                className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                "
                aria-hidden="true"
              ></span>
            </button>
          </div>
          <button>
            <svg
              className="w-5 h-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                fill="currentcolor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative">
        <p className="flex items-center gap-2">
          <span className="font-semibold">Title: </span>
          <span>Other_Fusion_11</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">URL: </span>
          <span className="text-wrap wrap-break-word">
            https://kingunlocker.com/includes/cron.php?action=fusion11_updateprice&amp;Other_Fusion_11=true
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Execution Time: </span>
          <span>30 Minutes</span>
        </p>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Status: </span>
            <button
              className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            "
              aria-checked="true"
              role="switch"
            >
              <span
                title="Active"
                className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                "
                aria-hidden="true"
              ></span>
            </button>
          </div>
          <button>
            <svg
              className="w-5 h-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                fill="currentcolor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative">
        <p className="flex items-center gap-2">
          <span className="font-semibold">Title: </span>
          <span>Other_Script_102</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">URL: </span>
          <span className="text-wrap wrap-break-word">
            https://kingunlocker.com/includes/cron.php?action=fusion102_updateprice&amp;Other_Script_102=true
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Execution Time: </span>
          <span>30 Minutes</span>
        </p>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Status: </span>
            <button
              className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            "
              aria-checked="true"
              role="switch"
            >
              <span
                title="Active"
                className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                "
                aria-hidden="true"
              ></span>
            </button>
          </div>
          <button>
            <svg
              className="w-5 h-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                fill="currentcolor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative">
        <p className="flex items-center gap-2">
          <span className="font-semibold">Title: </span>
          <span>Other_Script_103</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">URL: </span>
          <span className="text-wrap wrap-break-word">
            https://kingunlocker.com/includes/cron.php?action=fusion103_updateprice&amp;Other_Script_103=true
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Execution Time: </span>
          <span>30 Minutes</span>
        </p>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Status: </span>
            <button
              className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            "
              aria-checked="true"
              role="switch"
            >
              <span
                title="Active"
                className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                "
                aria-hidden="true"
              ></span>
            </button>
          </div>
          <button>
            <svg
              className="w-5 h-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                fill="currentcolor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative">
        <p className="flex items-center gap-2">
          <span className="font-semibold">Title: </span>
          <span>Other_Script_104</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">URL: </span>
          <span className="text-wrap wrap-break-word">
            https://kingunlocker.com/includes/cron.php?action=fusion104_updateprice&amp;Other_Script_104=true
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Execution Time: </span>
          <span>30 Minutes</span>
        </p>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Status: </span>
            <button
              className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            "
              aria-checked="true"
              role="switch"
            >
              <span
                title="Active"
                className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                "
                aria-hidden="true"
              ></span>
            </button>
          </div>
          <button>
            <svg
              className="w-5 h-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                fill="currentcolor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
