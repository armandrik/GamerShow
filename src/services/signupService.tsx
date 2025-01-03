export const registerUser = async (formData: {
    username: string;
    email: string;
    password: string;
}) => {
  const response  = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return response
};
