import ScrollToTop from "@/utils/ScrollToTop";
import "./globals.css";
import { Slide, ToastContainer } from "react-toastify";

export const metadata = {
  title: "صفحه‌اصلی گیمرشو | Gamer Show",
  describtion: "خرید مستقیم بازی‌ها با کم‌ترین قیمت از استیم",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-main">
        {children}
        <ScrollToTop />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="dark"
          transition={Slide}
          className="text-xs"
        />
      </body>
    </html>
  );
}
