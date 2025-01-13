import { toasMessage } from "@/utils/helper";
import { ObjectId, Types } from "mongoose";
export const addToWishlistService = async (
  id: string | Types.ObjectId | undefined
) => {
  try {
    const response = await fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (response.status === 201) {
      toasMessage("لیست علاقه‌مندی آپدیت شد", "success")();
    } else if (response.status === 200) {
      toasMessage("این بازی قبلا اضافه شده", "success")();
    } else if (response.status === 401) {
      toasMessage("ابتدا وارد اکانت شوید", "error")();
      setTimeout(() => {
        window.location.href = "/login-register";
      }, 600);
    } else {
      toasMessage("خطایی پیش آمد", "error")();
    }

    return response; // Return the response object
  } catch (error) {
    console.error("Error sending comment:", error);
    throw error; // Propagate the error to handle it later
  }
};
