// app/plant-based/recipes/page.tsx
import Link from "next/link";

const Recipes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <Link
        href="/plant-based/recipes/georgian-lobio"
        className="rounded-lg border p-6 hover:shadow-lg transition-shadow"
      >
        <h2 className="font-semibold text-xl mb-4">Georgian Lobio</h2>
        {/* Add preview image and short description */}
      </Link>
      <Link
        href="/plant-based/recipes/tofu-sandwich"
        className="rounded-lg border p-6 hover:shadow-lg transition-shadow"
      >
        <h2 className="font-semibold text-xl mb-4">Tofu Sandwich</h2>
        {/* Add preview image and short description */}
      </Link>
    </div>
  );
};

export default Recipes;
