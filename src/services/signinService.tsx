export const loginUser = async (formData: {
  identifire: string;
  password: string;
}) => {
  try {
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return response;
  } catch (error) {
    console.log("login user fetch", error);
  }
};
