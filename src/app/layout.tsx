
import "./globals.css";
import Navigation from "../components/Navigation";
import { Dosis } from "next/font/google";
import { TanstackProvider } from "../providers/tanstack-provider";

const dosis = Dosis({ subsets: ['latin'] })

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.className} bg-gray-300 min-h-screen `}>
        <TanstackProvider>
          <Navigation />
          <div className="mx-auto">{children}</div>
        </TanstackProvider>
      </body>
    </html>
  );
}
