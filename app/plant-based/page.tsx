import PageLayout from "../../components/pagelayout";
import Recipes from "../../components/Plants/recipes";
import recipesData from "@/data/recipe.json";

const about: React.FC = () => {
  const recipes = Object.values(recipesData.recipes);
  return (
    <PageLayout>
      <Recipes recipes={recipes} />
    </PageLayout>
  );
};

export default about;
