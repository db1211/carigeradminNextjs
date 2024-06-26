

import { Inter } from "next/font/google";
import "./ui/globals.css";
import Providers from './providers.js'
import PrivateRoute from "./PrivateRoute";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cariger Admin",
  description: "Cariger admin app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {/* <PrivateRoute> */}

          {children}
        {/* </PrivateRoute> */}
        </Providers>
      </body>
    </html>
  );
}