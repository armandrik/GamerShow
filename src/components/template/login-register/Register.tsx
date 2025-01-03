import { registerUser } from "@/services/signupService";
import { toasMessage, validateForm } from "@/utils/helper";
import { redirect } from "next/navigation";
import React, { useState } from "react";

type registerPropType = {
  goToLogIn: () => void;
};

type formDataType = {
  username: string;
  email: string;
  password: string;
};

function Register({ goToLogIn }: registerPropType) {
  const [formData, setFormData] = useState<formDataType>({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMesssage] = useState<formDataType>({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChangeInputsValues = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const signup = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Validate form
    const { isValid, errors } = validateForm(formData);
    if (!isValid) {
      setErrorMesssage(errors);
      return;
    }

    try {
      const response = await registerUser(formData);

      if (response.status === 201) {
        setFormData({
          username: "",
          email: "",
          password: "",
        });
        toasMessage("با موفقیت وارد شدید", "success")();
        setTimeout(() => {
          window.location.href = "/";
        }, 400);
      } else if (response.status === 422) {
        toasMessage("قبلا ثبت‌نام کرده‌اید", "error")();
      } else if (response.status === 400) {
        toasMessage("مقادیر وارد شده نادرست است", "error")();
      } else {
        toasMessage("خطایی رخ داد, دوباره تلاش کنید", "error")();
        const data = await response.json();
        console.error(data.message || "Failed to sign up.");
      }
    } catch (error) {
      toasMessage("خطایی رخ داد, دوباره تلاش کنید", "warn");
      console.error("Failed to sign up. Try again.", error);
    }
  };

  return (
    <div className="w-[520px] mx-auto px-4 mobile:w-full">
      <h1 className="text-white/90 font-bold text-3xl text-center mb-10 mobile:text-2xl">
        ثبت‌نام
      </h1>
      <form
        onSubmit={signup}
        className="flex flex-col justify-start items-start gap-3 text-white/80 [&>*]:w-full"
      >
        <div className="relative">
          <input
            type="text"
            required={true}
            placeholder="نام‌کاربری"
            name="username"
            value={formData.username}
            onChange={handleChangeInputsValues}
            className="w-full h-12 outline-none rounded-md px-5 bg-white/10 mobile:text-sm"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mobile:size-5 absolute top-3 left-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <p className={`text-xs text-rose-500 pr-1 mobile:font-light`}>
          {errorMessage.username}
        </p>
        <div className="relative">
          <input
            type="email"
            required={true}
            placeholder="آدرس ایمیل"
            name="email"
            value={formData.email}
            onChange={handleChangeInputsValues}
            className="w-full h-12 outline-none rounded-md px-5 bg-white/10 mobile:text-sm"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mobile:size-5 absolute top-3 left-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
            />
          </svg>
        </div>
        <p className="text-xs text-rose-500 pr-1 mobile:font-light">
          {errorMessage.email}
        </p>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required={true}
            placeholder="رمز عبور"
            name="password"
            value={formData.password}
            onChange={handleChangeInputsValues}
            className="w-full h-12 outline-none rounded-md px-5 bg-white/10 mobile:text-sm"
          />
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setShowPassword(!showPassword)}
              className="size-6 absolute top-3 left-3 cursor-pointer mobile:size-5 mobile:top-[14px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setShowPassword(!showPassword)}
              className="size-6 absolute top-3 left-3 cursor-pointer mobile:size-5 mobile:top-[14px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          )}
        </div>
        <p className="text-xs text-rose-500 pr-1 mobile:font-light">
          {errorMessage.password}
        </p>
        <button
          type="submit"
          className="flex items-center justify-center gap-1 bg-primary mb-8 h-12 rounded-md text-xl font-medium hover:bg-primary/80 transition-all mobile:text-lg"
        >
          ثبت‌نام
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>
        </button>
      </form>
      <div className="w-full flex items-center justify-between">
        <p className="text-white/90 text-sm">
          قبلا ثبت نام کرده اید؟{" "}
          <span
            onClick={goToLogIn}
            className="cursor-pointer text-font hover:text-font/80 transition-all"
          >
            وارد شوید
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
