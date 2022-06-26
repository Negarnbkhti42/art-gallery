import { useEffect, useState, useTransition } from "react";
import { getAllArts } from "../../services/getAllArtsService";
import { getImage } from "../../services/getImageService";

function Main() {
  const [isCatching, setTransition] = useTransition();
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    setTransition(() => {
      getAllArts().then((data) => {
        console.log(data);
        setArtworks(data.data);
      });
    });
  }, []);
  return (
    <ul>
      {isCatching ? (
        <p>loading...</p>
      ) : (
        artworks.map(
          (art) =>
            art["image_id"] && (
              <li key={art.id}>
                <img
                  src={`https://www.artic.edu/iiif/2/${art["image_id"]}/full/200,/0/default.jpg`}
                  alt="art"
                />
              </li>
            )
        )
      )}
    </ul>
  );
}

export default Main;
