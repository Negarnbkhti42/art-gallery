import { useEffect, useState, useTransition } from "react";
import { getAllArts } from "../../services/getAllArtsService";
import "./main.css";

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
    <ul className="gallery-ul">
      {isCatching ? (
        <p>loading...</p>
      ) : (
        artworks.map(
          (art) =>
            art["image_id"] && (
              <li className="gallery-image" key={art.id}>
                <img
                  src={`https://www.artic.edu/iiif/2/${art["image_id"]}/full/270,/0/default.jpg`}
                  alt="art"
                />
                <div className="gallery-image_info">
                  <p>{art.title}</p>
                </div>
              </li>
            )
        )
      )}
    </ul>
  );
}

export default Main;
