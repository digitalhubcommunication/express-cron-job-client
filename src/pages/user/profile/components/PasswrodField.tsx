import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "./ProfileForm";
import { useState } from "react";
import { EyeCloseIcon, EyeOpenIcon } from "./Icons";

type InputFieldProps = {
  label: string;
  placeholder: string;
  className?: string;
  errors: FieldErrors<FormData>;
  name: keyof FormData;
      register:UseFormRegister<FormData>
};

const PasswordField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  className,
  errors,
  name,
  register
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <label className="block mb-2 font-medium" htmlFor={name}>
        {label}
      </label>
    <div className="w-full relative">
          <input
        id={name}
        placeholder={placeholder}
        type={show ? "text" : "password"}
        className="border duration-200 outline-none border-slate-300 hover:border-slate-400 py-1.5 lg:text-[18px] md:py-2 px-4 rounded-[5px] lg:rounded-[7px] w-full"
     {...register(name,
      {
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }
     )}
      />

      {/* toggler icon */}
      <button onClick={()=>setShow(prev=>!prev)} className="w-5 h-5 absolute top-[50%] right-4 -translate-y-[50%]">{show ? <EyeOpenIcon />:<EyeCloseIcon />}</button>
    </div>
      {errors[name] && errors[name].message ? (
        <p className="text-red-500 mt-1">{errors[name]?.message}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PasswordField;
