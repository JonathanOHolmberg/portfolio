"use client";

const Container = ({ children }: { children: React.ReactNode }) => {
    console.log("Pssst! I see dev people. 👀")
    return (
      <body>
          {children}
      </body>
    );
}

export default Container;