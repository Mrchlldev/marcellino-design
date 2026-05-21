import "./globals.css";

import { Archivo_Black, Space_Grotesk } from "next/font/google";

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Marcellino Desain",
  description: "Blog desain Neo Brutalism",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${space.variable} bg-[#FFF7E8] text-black font-body`}
      >
        {children}
      </body>
    </html>
  );
}