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
export const validateRegisterForm = (formData: {
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

export const validateLogInForm = (formData: {
  identifire: string,
  password: string
}) => {
  let isValid = true
  const errors = { identifire: "", password: "" }

  if (!isValidEmail(formData.identifire) && !isValidUserName(formData.identifire)) {
    errors.identifire = "مقادیر وارد شده نادرست است"
    isValid = false
  }

  if (!isValidPassword(formData.password)) {
    errors.password = "رمزعبور باید بین 8-16 کاراکتر, شامل یک حرف بزرگ, یک حرف کوچک و یک عدد باشد.";
    isValid = false
  }

  return { isValid, errors }
}

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

type ValidationResult = { valid: boolean; errors?: string[] };

export function validateProductInput(data: any): ValidationResult {
  const errors: string[] = [];

  // Validate required string fields
  const stringFields = ["image", "name", "genre", "about"];
  stringFields.forEach((field) => {
    if (!data[field] || typeof data[field] !== "string") {
      errors.push(`Invalid or missing '${field}'.`);
    }
  });

  // Validate required numeric fields
  const numberFields = ["price", "averagePlayTime", "score", "metaScore"];
  numberFields.forEach((field) => {
    if (typeof data[field] !== "number" || data[field] < 0) {
      errors.push(`Invalid or missing '${field}'. Must be a non-negative number.`);
    }
  });

  // Additional validation for numeric ranges
  if (data.score < 0 || data.score > 10) errors.push("Score must be between 0 and 10.");
  if (data.metaScore < 0 || data.metaScore > 100) errors.push("MetaScore must be between 0 and 100.");

  // Validate array fields
  const arrayFields = ["store", "platform", "screenshots", "tags"];
  arrayFields.forEach((field) => {
    if (!Array.isArray(data[field]) || data[field].some((item) => typeof item !== "string")) {
      errors.push(`Invalid or missing '${field}'. Must be an array of strings.`);
    }
  });

  // Validate requirements object
  if (
    !data.requirements ||
    typeof data.requirements !== "object" ||
    !data.requirements.minimum ||
    !data.requirements.recommended
  ) {
    errors.push("Invalid or missing 'requirements'. Must contain 'minimum' and 'recommended' fields.");
  }

  // Check for errors
  return errors.length > 0 ? { valid: false, errors } : { valid: true };
}

type CommentValidationResult = { valid: boolean; errors?: string[] };

export function validateCommentInput(data: any): CommentValidationResult {
  const errors: string[] = [];

  // Validate required string fields
  if (!data.name || typeof data.name !== "string" || data.name.trim() === "") {
    errors.push("Invalid or missing 'name'. Must be a non-empty string.");
  }

  if (!data.body || typeof data.body !== "string" || data.body.trim() === "") {
    errors.push("Invalid or missing 'body'. Must be a non-empty string.");
  }

  // Validate productID (should be a valid MongoDB ObjectId)
  if (!data.productID || typeof data.productID !== "string" || !/^[0-9a-fA-F]{24}$/.test(data.productID)) {
    errors.push("Invalid or missing 'productID'. Must be a valid MongoDB ObjectId.");
  }

  // Return validation result
  return errors.length > 0 ? { valid: false, errors } : { valid: true };
}

