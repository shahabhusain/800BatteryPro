'use client';

import SideBar from "@/src/components/SideBar";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { AuthHydrator } from "@/src/components/AuthHydrator";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AuthHydrator>
                  {children}
          </AuthHydrator>
        </Provider>
      </body>
    </html>
  );
}