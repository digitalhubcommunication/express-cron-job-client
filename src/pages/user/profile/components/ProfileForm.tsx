import { useForm } from "react-hook-form";
import InputField from "./InputField";
import PasswordField from "./PasswrodField";
import { toast } from "react-toastify";

export type FormData = {
  name: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function ProfileForm() {
  const {
    register,
    setError,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  //   handlers
const onSubmit = handleSubmit((data) => {

     if(!data)return;

    // if (data.newPassword || data.confirmPassword) {
    //     if (data.newPassword !== data.confirmPassword) {
    //         setError("confirmPassword", {
    //             type: "manual",
    //             message: "Confirm password didn't match",
    //         });  
    //         return;  
    //     }
        
    //     if (!data.oldPassword) {
    //         setError("oldPassword", {
    //             type: "manual",
    //             message: "Please provide Old password if you want to update password.",
    //         });
    //         return;
    //     }
    // }
    // Proceed with form submission logic here
    console.log("Form submitted:", data);

    toast.warn("API integration in progress")
    reset();
});

  return (
    <div className="w-full flex flex-wrap gap-10 lg:gap-0">
      <form onSubmit={onSubmit} className="flex flex-col gap-7 w-full mx-auto">
        <InputField
          label="Name"
          placeholder="Enter your name"
          className="w-full"
          type="text"
          {...register("name")}
          errors={errors}
        />
        <PasswordField
          label="Old Password"
          placeholder="Enter old password"
          className="w-full"
          {...register("oldPassword", {
            required:true,
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          errors={errors}
        />

        <div className="w-full flex gap-7">
          <PasswordField
            label="New Password"
            placeholder="Enter new password"
            {...register("newPassword",{
                required:true,
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
            className="w-full"
            errors={errors}
          />
          <PasswordField
            label="Confirm Password"
            placeholder="Confirm new password"
            className="w-full"
            {...register("confirmPassword",{
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
            errors={errors}
          />
        </div>

        <div className="w-full flex items-center justify-end">
          <button type="submit" className="btn btn-success">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}
