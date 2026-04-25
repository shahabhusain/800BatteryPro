'use client';

import SideBar from "@/src/components/SideBar";
import "../globals.css";
import { Provider } from "react-redux";
import { store } from "@/src/store/store";
import { AuthHydrator } from "@/src/components/AuthHydrator";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AuthHydrator>
                <div className="min-h-screen bg-gray-50 flex">
      <SideBar />
      <main className="flex-1 transition-all duration-300 ml-0">
        <div className="p-4 lg:p-8">
                  {children}
                  </div>
      </main>
    </div>
          </AuthHydrator>
        </Provider>
      </body>
    </html>
  );
}