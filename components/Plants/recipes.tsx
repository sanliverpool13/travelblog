// app/plant-based/recipes/page.tsx
import Link from "next/link";
import Image from "next/image";

interface RecipeDetailsProps {
  title: string;
  image: string;
  tags: string[];
  description: string;
  ingredients: Array<{
    amount: string | number;
    unit?: string;
    item: string;
  }>;
  directions: string[];
}

interface RecipesProps {
  recipes: RecipeDetailsProps[]; // Array of recipe details
}

const Recipes: React.FC<RecipesProps> = ({ recipes }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[90%] max-w-[1300px] h-full flex flex-col gap-y-56 items-center">
        <h2 className="text-5xl">Plant Based Recipes</h2>
        <div className="grid grid-cols-4 md:grid-cols-12 gap-6 w-full">
          {recipes.map((recipe, index) => (
            <Link
              key={index}
              href={`/plant-based/recipes/${recipe.title.toLowerCase().replace(/ /g, "-")}`}
              className=" col-span-2 md:col-span-3"
            >
              <div className="relative h-40 w-full mb-4">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h2 className="font-semibold text-xl mb-2">{recipe.title}</h2>
              <p className="text-gray-500">{recipe.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
