import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "./ProfileForm";

type InputFieldProps = {
    label: string;
    placeholder: string;
    className?: string;
    type?: string;
    errors:FieldErrors<FormData>
    name:keyof FormData;
    register:UseFormRegister<FormData>
};

const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    className,
    type = "text",
    errors,
    register,
    name
}) => (
    <div className={className}>
        <label className="block mb-2 font-medium" htmlFor={name}>
            {label}
        </label>
        <input
            id={name}
            placeholder={placeholder}
            type={type}
            className="border duration-200 outline-none border-slate-300 hover:border-slate-400 py-1.5 lg:text-[18px] md:py-2 px-4 rounded-[5px] lg:rounded-[7px] w-full"
            {...register(name)}
        />
        {
            errors[name] && errors[name].message ? <p className="text-red-500 mt-1">{errors[name]?.message}</p>:<></>
        }
    </div>
);

export default InputField;