// app/plant-based/recipes/page.tsx
import PageLayout from "@/components/pagelayout";
import Link from "next/link";
import PlantBasedLayout from "@/components/Plants/layout";
import Recipes from "@/components/Plants/recipes";

const RecipesPage = () => {
  return (
    <PageLayout>
      <PlantBasedLayout>
        <Recipes />
      </PlantBasedLayout>
    </PageLayout>
  );
};

export default RecipesPage;
