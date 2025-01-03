import { toast } from "react-toastify";

//validate username in front
export const isValidUserName = (username: string): boolean => {
  return username.length >= 3 && username.length <= 10;
};

//validate email in front
export const isValidEmail = (email: string): boolean => {
  const emailRegex =
    /^[a-zA-Z][a-zA-Z0-9._%+-]*@(gmail|yahoo|outlook|hotmail|icloud|aol|protonmail|zoho|gmx|yandex)\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

//validate password in front
export const isValidPassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  return passwordRegex.test(password);
};

//validate register form
export const validateForm = (formData: {
  username: string;
  email: string;
  password: string;
}) => {
  let isValid = true;
  const errors = { username: "", email: "", password: "" };

  if (!isValidUserName(formData.username)) {
    errors.username = "نام‌کاربری باید بین 3-10 کاراکتر باشد.";
    isValid = false;
  }

  if (!isValidEmail(formData.email)) {
    errors.email = "ایمیل وارد شده اشتباه است.";
    isValid = false;
  }

  if (!isValidPassword(formData.password)) {
    errors.password =
      "رمزعبور باید بین 8-16 کاراکتر, شامل یک حرف بزرگ, یک حرف کوچک و یک عدد باشد.";
    isValid = false;
  }

  return { isValid, errors };
};

//create toast custom function
export const toasMessage = (msg: string, status: string) => {
  const customToast = () => {
    if (status.toLocaleLowerCase() === "success") {
      toast.success(msg);
    } else if (status.toLocaleLowerCase() === "error") {
      toast.error(msg);
    }
  };
  return customToast;
};
