// app/plant-based/layout.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PlantBasedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[90%] max-w-[1300px] h-full flex flex-col gap-y-8 items-center">
        {/* Plant Based Navigation */}
        <nav className="w-full flex justify-center border-b">
          <Link
            href="/plant-based/recipes"
            className={`px-6 py-3 font-medium ${
              pathname.includes("/recipes")
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Recipes
          </Link>
          <Link
            href="/plant-based/reviews"
            className={`px-6 py-3 font-medium ${
              pathname.includes("/reviews")
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Reviews
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
}
