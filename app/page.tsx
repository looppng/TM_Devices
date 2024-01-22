import Head from "@/app/components/Head/Head";
import Devices from "@/app/components/Devices/Devices";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head />
      <Devices />
      <Footer />
    </div>
  );
}
