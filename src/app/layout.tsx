import ScrollToTop from "@/utils/ScrollToTop";
import "./globals.css";

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
      </body>
    </html>
  );
}
