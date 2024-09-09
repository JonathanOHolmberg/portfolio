"use client";

import Header from "./Header";
import Settings from "./Settings";
import Footer from "./Footer";

const Container = ({ children }: { children: React.ReactNode }) => {
    console.log("Pssst! I see dev people. 👀")
    return (
      <body>
            <Header />
            <Settings />
            {children}
            <Footer />
      </body>
    );
}

export default Container;