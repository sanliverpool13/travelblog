import { getAlbums } from "../../lib/album";
import GalleryComponent from "../../components/Gallery/gallery";
import PageLayout from "../../components/pagelayout";

const Gallery = async () => {
  const albums = await getAlbums();
  return (
    <PageLayout noPaddingTop>
      <GalleryComponent albums={albums} />
    </PageLayout>
  );
};

export default Gallery;
