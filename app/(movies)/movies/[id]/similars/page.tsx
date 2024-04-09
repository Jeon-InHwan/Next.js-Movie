import { Suspense } from "react";
import { getMovie } from "../../../../../components/movie-info";
import LoadingComponent from "../../../../../components/loadingComponent";
import SimilarMovies from "../../../../../components/movie-similars";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function GetSimilarMovies({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<LoadingComponent />}>
        <SimilarMovies id={id} />
      </Suspense>
    </div>
  );
}
