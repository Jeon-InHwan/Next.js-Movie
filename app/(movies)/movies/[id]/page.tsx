import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import LoadingComponent from "../../../../components/loadingComponent";

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
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
