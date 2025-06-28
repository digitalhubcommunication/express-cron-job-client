import AuthNavbar from "../authNavbar/AuthNavbar";
import NavlinkSidebar from "../sidebar/NavlinkSidebar";

export default function SettingsLayout() {
  return (
    <div className="w-full grow flex overflow-hidden ">
      <NavlinkSidebar />
      <div className="grow overflow-y-auto flex flex-col relative ">
        <AuthNavbar />
        <div className="w-full grow bg-white pt-[80px]">
          {/* Content goes here */}
          <h4 className="text-center text-2xl font-bold">Settings Page</h4>
          <div className="w-full flex flex-col gap-5">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, explicabo. Harum vitae error, sequi sint tempore tenetur, corrupti unde perferendis fugit recusandae dolorem distinctio incidunt similique, repellat esse assumenda sapiente saepe voluptatem! Quasi, et nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, explicabo. Harum vitae error, sequi sint tempore tenetur, corrupti unde perferendis fugit recusandae dolorem distinctio incidunt similique, repellat esse assumenda sapiente saepe voluptatem! Quasi, et nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, explicabo. Harum vitae error, sequi sint tempore tenetur, corrupti unde perferendis fugit recusandae dolorem distinctio incidunt similique, repellat esse assumenda sapiente saepe voluptatem! Quasi, et nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, explicabo. Harum vitae error, sequi sint tempore tenetur, corrupti unde perferendis fugit recusandae dolorem distinctio incidunt similique, repellat esse assumenda sapiente saepe voluptatem! Quasi, et nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, explicabo. Harum vitae error, sequi sint tempore tenetur, corrupti unde perferendis fugit recusandae dolorem distinctio incidunt similique, repellat esse assumenda sapiente saepe voluptatem! Quasi, et nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, explicabo. Harum vitae error, sequi sint tempore tenetur, corrupti unde perferendis fugit recusandae dolorem distinctio incidunt similique, repellat esse assumenda sapiente saepe voluptatem! Quasi, et nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, explicabo. Harum vitae error, sequi sint tempore tenetur, corrupti unde perferendis fugit recusandae dolorem distinctio incidunt similique, repellat esse assumenda sapiente saepe voluptatem! Quasi, et nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, explicabo. Harum vitae error, sequi sint tempore tenetur, corrupti unde perferendis fugit recusandae dolorem distinctio incidunt similique, repellat esse assumenda sapiente saepe voluptatem! Quasi, et nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, explicabo. Harum vitae error, sequi sint tempore tenetur, corrupti unde perferendis fugit recusandae dolorem distinctio incidunt similique, repellat esse assumenda sapiente saepe voluptatem! Quasi, et nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, explicabo. Harum vitae error, sequi sint tempore tenetur, corrupti unde perferendis fugit recusandae dolorem distinctio incidunt similique, repellat esse assumenda sapiente saepe voluptatem! Quasi, et nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, explicabo. Harum vitae error, sequi sint tempore tenetur, corrupti unde perferendis fugit recusandae dolorem distinctio incidunt similique, repellat esse assumenda sapiente saepe voluptatem! Quasi, et nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, explicabo. Harum vitae error, sequi sint tempore tenetur, corrupti unde perferendis fugit recusandae dolorem distinctio incidunt similique, repellat esse assumenda sapiente saepe voluptatem! Quasi, et nisi.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
