// app/plant-based/reviews/page.tsx
import PageLayout from "@/components/pagelayout";
import PlantBasedLayout from "@/components/Plants/layout";
import Reviews from "@/components/Plants/reviews";

const ReviewsPage = () => {
  return (
    <PageLayout>
      <PlantBasedLayout>
        <Reviews />
      </PlantBasedLayout>
    </PageLayout>
  );
};

export default ReviewsPage;
