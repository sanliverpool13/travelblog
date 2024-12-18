// app/plant-based/recipes/[slug]/page.tsx
import PageLayout from "@/components/pagelayout";
import RecipeDetails from "@/components/Plants/recipe";
import recipesData from "@/data/recipe.json";

interface RecipePageProps {
  params: {
    slug: string;
  };
}

const RecipePage = ({ params }: RecipePageProps) => {
  const recipe = recipesData.recipes[params.slug];
  if (!recipe) {
    return (
      <PageLayout>
        <div>Recipe not found</div>
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <RecipeDetails {...recipe} />
    </PageLayout>
  );
};

export default RecipePage;
