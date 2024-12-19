// components/RecipeDetails.tsx
import React from "react";
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

const RecipeDetails: React.FC<RecipeDetailsProps> = ({
  title,
  image,
  tags,
  description,
  ingredients,
  directions,
}) => {
  return (
    <div className="w-full max-w-[1300px] mx-auto p-8">
      <Link href="/plant-based/recipes" className="mb-8 inline-block">
        ← Back to All Recipes
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left side - Image */}
        <div className="col-span-12 lg:col-span-5 relative rounded-lg overflow-hidden h-[700px]">
          <Image src={image} alt={title} fill className="w-full h-full" />
        </div>

        {/* Right side - Content */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{title}</h1>

          {/* Tags */}
          {/* <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-gray-600">
                {tag}
                {" • "}
              </span>
            ))}
          </div> */}

          <p className="text-xl text-gray-700">{description}</p>

          {/* Ingredients and Directions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <table className="text-xl text-gray-700 table-fixed w-full">
                <tbody>
                  {ingredients.map((ing, index) => (
                    <tr key={index} className="text-lg">
                      {/* Amount and Unit */}
                      <td className="w-24 font-bold text-gray-900 align-top">
                        {ing.amount} {ing.unit}
                      </td>
                      {/* Ingredient Name */}
                      <td className="font-light text-gray-500 align-top">
                        {ing.item}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Directions</h2>
              <ol className="text-xl space-y-4">
                {directions.map((step, index) => (
                  <li key={index} className="text-gray-700">
                    {index + 1}. {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
