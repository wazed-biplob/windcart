"use client";
// import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "./api/store";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});
// export const metadata: Metadata = {
//   title: "WindCode",
//   description: "LLM Platform",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
