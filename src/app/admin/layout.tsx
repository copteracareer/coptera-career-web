import { Toaster } from "@/components/ui/toaster";
import AdminSidebar from "./_components/adminSidebar";
import AdminHeader from "./_components/adminHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex relative">
      <AdminSidebar />

      <div className="flex flex-col grow">
        <AdminHeader />
        <section className="grow bg-[#F7F9FC]">{children}</section>
      </div>
      <Toaster />
    </main>
  );
}
