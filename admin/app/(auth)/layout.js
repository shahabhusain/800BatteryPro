'use client';
import "../globals.css";
import { Provider } from "react-redux";
import { store } from "@/src/store/store";
import { AuthHydrator } from "@/src/components/AuthHydrator";

export default function AuthLayout({ children }) {
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