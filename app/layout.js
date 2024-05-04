/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChES-SVNIT",
  description:
    "Connect with SVNIT Surat's Chemical Engineering Society. This ChES landing page outlines upcoming events, research projects, and valuable insights.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script src="https://cdn.skypack.dev/three@0.129.0/build/three.module.js"></script> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>

        {/* <script src="https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js"></script>

        <script src="https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js"></script> */}
      </head>

      <body className="font-body bg-gradient-to-br from-indigo-300/50  to-emerald-300/50 ">
        <Navbar />
        <main className="relative overflow-hidden ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
