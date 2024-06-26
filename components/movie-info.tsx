import styles from "../styles/movie-info.module.css";
import InfoDetails from "../components/movie-info-details";
import { API_URL } from "../constants";

export async function getMovie(id: string) {
  // console.log(`Fetching a movie: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
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
        <InfoDetails id={id} page="infoPage" />
      </div>
    </div>
  );
}
