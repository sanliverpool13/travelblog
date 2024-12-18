import PlantBasedLayout from "@/components/Plants/layout";
import PageLayout from "@/components/pagelayout";
import Recipes from "@/components/Plants/recipes";

const about: React.FC = () => {
  return (
    <PageLayout>
      <PlantBasedLayout>
        <Recipes />
      </PlantBasedLayout>
    </PageLayout>
  );
};

export default about;
