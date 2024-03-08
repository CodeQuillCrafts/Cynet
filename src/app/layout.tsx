import type { Metadata } from "next";
import { Inter, Cinzel, Fauna_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

const cinzel = Cinzel({
  weight: ['900', '800', '700', '600', '500'],
  variable: "--font-cinzel",
  subsets: ["latin"],
})


const faunaOne = Fauna_One({
  weight: ["400"],
  variable: "--font-faunaOne",
  subsets: ["latin-ext"],
})

export const metadata: Metadata = {
  title: "CYNET | IT fest of Jims",
  description: "CYNET is an annual IT Festival organised by the IT Department and society of JIMS Jagannath International Management School, Vasant Kunj, New Delhi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='luxury'>

      <body className={`${inter.className} ${cinzel.variable} ${faunaOne.variable} bg-accent`}>

        <Provider>
          <EdgeStoreProvider>
            <Toaster />
            {/* <Cursor1 /> */}
            <Header />
            {children}
            {/* <Footer /> */}
          </EdgeStoreProvider>
        </Provider>
      </body>
    </html>
  );
}
