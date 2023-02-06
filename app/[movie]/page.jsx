import Image from "next/image";

export async function generateStaticParams() {

}

export default async function MovieDetail({params}) {
    const { movie: movieId} = params
    const imagePath = `https://image.tmdb.org/t/p/original`
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.THE_MOVIE_DB_API_KEY}`,
        { next: { revalidate: 43200} } // revalidates data every 24 hours
    )
    const result = await data.json()

    return (
        <div>
            <h2 className="text-2xl">{result.title}</h2>
            <span className="text-2xl block">{result.release_date}</span>
            <span className="text-1xl block">Runtime: {result.runtime} minutes</span>
            <span className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md">{result.status}</span>
            <Image
                className="my-12 w-full"
                src={imagePath + result.backdrop_path}
                width={1000}
                height={1000}
                priority
            />
            <p>{result.overview}</p>
        </div>
    )
}