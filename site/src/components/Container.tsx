"use client";

import { ThemeProvider } from "@/context/ThemeContext";

import Header from "./Header";
import Settings from "./Settings";
import Footer from "./Footer";

const Container = ({ children }: { children: React.ReactNode }) => {
    console.log("Pssst! I see dev people. 👀")
    return (
      <body>
            <ThemeProvider>
                <Header />
                <Settings />
                {children}
                <Footer />
            </ThemeProvider>
      </body>
    );
}

export default Container;