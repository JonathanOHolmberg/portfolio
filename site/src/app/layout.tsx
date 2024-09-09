import { type Metadata } from "next";
import { Inter } from "next/font/google"
import { Raleway } from "next/font/google"

import Container from "@/components/Container";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Jonathan Holmbergs porfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({ subsets: ['latin']})
const raleway = Raleway({ subsets: ['latin']})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-nav="true" className={`${inter.className} ${raleway.className}`}>
      <Container>
        {children}
      </Container>
    </html>
  );
}