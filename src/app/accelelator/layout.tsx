import React from "react";
import Navbar from "../(home)/_components/navbar";
import Footer from "../(home)/_components/footer";

export default function AccelelatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
