import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "../components/TransitionProvider";
import { ThemeProvider } from "../components/ThemeContext"; // Adjust the import path as needed

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alibek Olimov Portfolio App",
  description: "The best animated portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <TransitionProvider>{children}</TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
