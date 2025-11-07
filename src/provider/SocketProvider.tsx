// "use client";
// import { useSelector } from "react-redux";
// import { useEffect, useRef } from "react";
// import io, { Socket } from "socket.io-client";
// import { createContext, useContext } from "react";
// import { toast } from "react-toastify";
// interface SocketContextType {
//   socket: Socket | null;
// }

// export const SocketContext = createContext<SocketContextType | undefined>(undefined);

// export const useSocket = () => {
//   const context = useContext(SocketContext);
//   if (!context) {
//     throw new Error("useSocket must be used within a SocketProvider");
//   }
//   return context;
// };

// export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { authAccessToken } = useSelector((state: RootState) => state.authInfo);
//   const socketRef = useRef<Socket | null>(null);

//   useEffect(() => {
//     if (!authAccessToken) {
//       if (socketRef.current) {
//         socketRef.current.disconnect();
//         socketRef.current = null;
//       }
//       return;
//     }

//     // Initialize Socket.IO
//     const dev = process.env.NODE_ENV === "development";
//     const url = dev ? process.env.NEXT_PUBLIC_SOCKET_URL_DEV! : process.env.NEXT_PUBLIC_SOCKET_URL!;
//     // socketRef.current = io(url, {
//     socketRef.current = io("https://accompanied.devsaround.com", {
//       transports: ["websocket"],
//       withCredentials: true,
//       auth: { authAccessToken },
//     });

//     const socket = socketRef.current;

//     socket.on("connect", () => {
//       console.log("Socket connected:", socket.id);
//     });

  
//     socket.on("error", ({ message }: { message: string }) => {
//       console.error("Socket.IO error:", message);
//       toast.error(message);
//     });

//     // Cleanup
//     return () => {

//       socket.off("error");
//       socket.disconnect();
//     };
//   }, [authAccessToken]);

//   return (
//     <SocketContext.Provider
//       value={{
//         socket: socketRef.current,
//       }}
//     >
//       {children}
//     </SocketContext.Provider>
//   );
// };


export default function SocketProvider() {
  return (
    <div>SocketProvider</div>
  )
}
