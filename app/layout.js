import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Mahmoud Atef - FullStack Software Developer",
  description:
    "This is the portfolio of Mahmoud Atef. I'm a passionate and results-driven Full Stack Developer who specializes in API design and backend development using ASP.NET, C#, and SQL Server. I enjoy building clean, efficient, and scalable systems that help businesses and individuals achieve their goals. Alongside backend work, I also use modern frontend frameworks like React and Angular to deliver complete, end-to-end solutions. — Whether you're a growing business looking to enhance your digital platform or an individual with a new idea to bring online, I'd be excited to collaborate. Let's build something powerful, stable, and meaningful together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
