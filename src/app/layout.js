import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import AuthProvider from "@/services/AuthProvider";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Rentify Hub",
  description: "Rentify Hub: A versatile service platform where you can access a wide range of rental solutions to suit your every need.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="rentifyHubTheme">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <AuthProvider>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
