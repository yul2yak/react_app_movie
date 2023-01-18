import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.css";

function Detail() {
  const [detail, SetDetail] = useState();
  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    SetDetail(json.data.movie);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  console.log(id);
  return (
    <div>
      <h1>{detail.title_long}</h1>
      <ul>
        {detail.genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>{detail.description_full}</p>
      {detail.torrents.map((torrent, index) => (
        <div>
          <table key={index}>
            <tr>
              <th>seeds</th>
              <td>{torrent.seeds}</td>
            </tr>
            <tr>
              <th>quality</th>
              <td>{torrent.quality}</td>
            </tr>
            <tr>
              <th>size</th>
              <td>{torrent.size}</td>
            </tr>
            <tr>
              <th>date_uploaded</th>
              <td>{torrent.date_uploaded}</td>
            </tr>
            <tr>
              <th>url</th>
              <td>{torrent.url}</td>
            </tr>
          </table>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default Detail;
