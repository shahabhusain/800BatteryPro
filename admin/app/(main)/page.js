"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const location = usePathname();
  const router = useRouter();
  
  useEffect(() => {
    if (location === "/") {
      router.push("/dashboard");
    }
  }, [location, router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p>Redirecting...</p>
      </div>
    </div>
  );
}