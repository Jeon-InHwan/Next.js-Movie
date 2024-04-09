import styles from "../styles/movie-credits.module.css";
import InfoDetails from "./movie-info-details";

export async function getMovie(id: string) {
  // console.log(`Fetching a movie: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function getCredits(id: string) {
  const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }) {
  const movie = await getMovie(id);
  const credits = await getCredits(id);
  const directors = [];
  const actors = [];
  const crews = [];
  const productions = [];

  credits.map((credit) => {
    if (credit.known_for_department == "Acting") {
      actors.push(credit);
    }
    if (credit.known_for_department == "Directing") {
      directors.push(credit);
    }
    if (credit.known_for_department == "Crew") {
      crews.push(credit);
    }
    if (credit.known_for_department == "Production") {
      productions.push(credit);
    }
  });

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
        <InfoDetails id={id} page="creditsPage" />
      </div>
      {directors.length != 0 ? (
        <div className={styles.actors}>
          <div className={styles.titleForActors}>Directors</div>
          {directors.map((director) => (
            <ul>
              <li>{director.original_name}</li>
            </ul>
          ))}
        </div>
      ) : (
        <div className={styles.actors}>
          <div className={styles.titleForActors}>Directors</div>

          <ul>
            <li>-</li>
          </ul>
        </div>
      )}
      {actors.length != 0 ? (
        <div className={styles.actors}>
          <div className={styles.titleForActors}>Actors</div>
          {actors.map((actor) => (
            <ul>
              <li>
                {actor.popularity > 30
                  ? `${actor.original_name} 🏅`
                  : actor.original_name}
              </li>
            </ul>
          ))}
        </div>
      ) : null}
      {productions.length != 0 ? (
        <div className={styles.actors}>
          <div className={styles.titleForActors}>Productions</div>
          {productions.map((production) => (
            <ul>
              <li>{production.original_name}</li>
            </ul>
          ))}
        </div>
      ) : (
        <div className={styles.actors}>
          <div className={styles.titleForActors}>Productions</div>
          <ul>
            <li>-</li>
          </ul>
        </div>
      )}
      {crews.length != 0 ? (
        <div className={styles.actors}>
          <div className={styles.titleForActors}>Crews</div>
          {crews.map((crew) => (
            <ul>
              <li>{crew.original_name}</li>
            </ul>
          ))}
        </div>
      ) : (
        <div className={styles.actors}>
          <div className={styles.titleForActors}>Crews</div>
          <ul>
            <li>-</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export function Actors(actor) {
  return (
    <ul>
      <li>{actor.original_name}</li>
    </ul>
  );
}
