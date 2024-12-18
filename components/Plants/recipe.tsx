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
  console.log(image);
  return (
    <div className="w-full max-w-[1300px] mx-auto p-8">
      <Link href="/plant-based" className="mb-8 inline-block">
        ← Back to All Recipes
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Image */}
        <div className="relative rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill className="w-full h-full " />
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{title}</h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-gray-600">
                {tag}
                {" • "}
              </span>
            ))}
          </div>

          <p className="text-gray-700">{description}</p>

          {/* Ingredients and Directions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {ingredients.map((ing, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-medium">
                      {ing.amount} {ing.unit}
                    </span>{" "}
                    {ing.item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Directions</h2>
              <ol className="space-y-4">
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
