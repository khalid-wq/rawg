import { Inter } from "next/font/google";
import "./globals.css";
import MiniBare from "@/components/MiniBare";
import Sidebare from "@/components/Sidebare";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shope Games",
  description: "Beta shoping game by steam and cheapshark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen">
          <MiniBare />
          <div className="flex p-5 ">
            <Sidebare />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
