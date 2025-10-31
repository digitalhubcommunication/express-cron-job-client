import { useForm } from "react-hook-form";
import InputField from "./InputField";
import PasswordField from "./PasswrodField";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useUpdateProfileMutation } from "@/redux/features/userAction/userActionApi";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

export type FormData = {
  name: string;
  phone: string;
  newPassword: string;
  confirmPassword: string;
};

export default function ProfileForm() {
  const { authUser } = useSelector((state: RootState) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const {
    register,
    setError,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  //   handlers
  const onSubmit = handleSubmit(async (data) => {
    if (!data.name && !data.phone && !data.confirmPassword && !data.newPassword) return;

    const dataToUpdate: any = {};

    if (data.name) {
      dataToUpdate.name = data.name;
    }

    if (data.newPassword || data.confirmPassword) {
      if (data.newPassword !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Confirm password didn't match",
        });
        return;
      } else {
        dataToUpdate.password = data.newPassword;
      }
    }

    if (data.phone) {
      dataToUpdate.mobile = data.phone;
    }

    try {
      const result = await updateProfile(dataToUpdate).unwrap();
      console.log(result, " result");
    } catch (error:any) {
      console.log(error, "  eror ");
      toast.error(error.data?.message ||"Error updating profile");
    }

    console.log("Form submitted:", data);
    // reset();
  });
  return (
    <div className="w-full flex flex-wrap gap-10 lg:gap-0">
      <form
        onSubmit={onSubmit}
        className={`flex flex-col gap-7 w-full mx-auto ${
          isLoading && "pointer-events-none"
        }`}
      >
        <InputField
          label="Name"
          placeholder="Enter your name"
          className="w-full"
          type="text"
          register={register}
          errors={errors}
          name="name"
        />

        <InputField
          label="Phone"
          placeholder="Enter your phone"
          className="w-full"
          type="number"
          register={register}
          errors={errors}
          name="phone"
        />

        <div className="w-full flex flex-col xl:flex-row gap-7">
          <PasswordField
            label="New Password"
            placeholder="Enter new password"
            register={register}
            name="newPassword"
            className="w-full"
            errors={errors}
          />
          <PasswordField
            label="Confirm Password"
            placeholder="Confirm new password"
            className="w-full"
            register={register}
            name="confirmPassword"
            errors={errors}
          />
        </div>

        <div className="w-full flex items-center justify-end">
          {isLoading ? (
            <LoadingSpinner
              className="min-h-6 ml-10"
              containerClass="w-3 h-3"
              squareClasses={["bg-black", "bg-black", "bg-black "]}
            />
          ) : (
            <button type="submit" className="btn btn-success">
              Update Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
