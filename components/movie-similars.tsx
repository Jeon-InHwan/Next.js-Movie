import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-similars.module.css";
import Movie from "./movie";
import InfoDetails from "./movie-info-details";

export async function getMovie(id: string) {
  // console.log(`Fetching a movie: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function getSimilars(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function SimilarMovies({ id }) {
  const movie = await getMovie(id);
  const similars = await getSimilars(id);

  return (
    <div>
      <div className={styles.container}>
        <img
          src={movie.poster_path}
          className={styles.poster}
          alt={movie.title}
        ></img>
        <div className={styles.info}>
          <h1 className={styles.title}>{movie.title}</h1>
          <h3>⭐{movie.vote_average.toFixed(2)}</h3>
          <p>{movie.overview}</p>
          <a href={movie.homepage} target={"_blank"}>
            Official Homepage
          </a>
          <InfoDetails id={id} page="similarsPage" />
        </div>
      </div>
      <div className={styles.similarContainer}>
        {similars.map((similar) => (
          <Movie
            key={similar.id}
            id={similar.id}
            poster_path={similar.poster_path}
            title={similar.title}
          />
        ))}
      </div>
    </div>
  );
}
