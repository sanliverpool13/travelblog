import AlbumPageComponent from "../../../components/Gallery/albumpage";
import { getAlbums } from "../../../lib/album";
import PageLayout from "../../../components/pagelayout";

// Function to generate static parameters
export async function generateStaticParams() {
  const albums = await getAlbums();
  const paths = albums.map((album) => ({
    params: { album: album.name.replace(/\s+/g, "-").toLowerCase() },
  }));
  return paths;
}

const AlbumPage = async ({ params }: { params: { album: string } }) => {
  const albumName = params.album.replace(/-/g, " ");
  const albums = await getAlbums(albumName);
  const album = albums[0]; // We expect only one album to be returned

  return (
    <PageLayout>
      <AlbumPageComponent album={album} />;
    </PageLayout>
  );
};

export default AlbumPage;
