import "./globals.css";
import Header from "./components/Header"; // adjust path if needed
import Founders from "./components/Founders";
import { Providers } from "./providers";
import FeedbackModal from "./components/FeedbackModal";

export const metadata = {
  title: "Sanskrit Shop",
  description: "Explore the eternal wisdom of Sanskrit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-white dark:bg-gray-900">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Founders />
          <FeedbackModal />
        </Providers>
      </body>
    </html>
  );
}
