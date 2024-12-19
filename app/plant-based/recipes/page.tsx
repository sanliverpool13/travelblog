// app/plant-based/recipes/page.tsx
import PageLayout from "../../../components/pagelayout";
import PlantBasedLayout from "../../../components/Plants/layout";
import Recipes from "../../../components/Plants/recipes";
import recipesData from "@/data/recipe.json";

const RecipesPage = () => {
  const recipes = Object.values(recipesData.recipes);
  return (
    <PageLayout>
      <Recipes recipes={recipes} />
    </PageLayout>
  );
};

export default RecipesPage;
