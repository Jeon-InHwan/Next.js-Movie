import { Suspense } from "react";
import LoadingComponent from "../../../../../components/loadingComponent";
import { getMovie } from "../../../../../components/movie-info";
import MovieCredits from "../../../../../components/movie-credits";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<LoadingComponent />}>
        <MovieCredits id={id} />
      </Suspense>
    </div>
  );
}
