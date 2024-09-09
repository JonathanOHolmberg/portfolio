import { type Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Jonathan Holmbergs porfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
