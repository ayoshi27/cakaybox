import "./reset.css";
import "./globals.scss";
import { Inter } from "next/font/google";
import GlobalHeader from "./components/GlobalHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cakaybox",
  description: "Cakaybox is 'kakei-bo app for managing your money expend.'",
  robots: {
    index: false,
    follow: false,
  },
  appleWebApp: {
    title: "Cakaybox",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <GlobalHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
