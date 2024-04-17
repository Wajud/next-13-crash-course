import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Traversy Media",
  description: "Web Development tutorial and course",
  keywords: "web development, javascript, programming , react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
