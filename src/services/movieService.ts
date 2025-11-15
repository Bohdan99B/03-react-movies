import { api } from "../api";
import type { Movie } from "../types/movie";


interface TMDBResponse {
results: Movie[];
}


export async function fetchMovies(query: string): Promise<Movie[]> {
const response = await api.get<TMDBResponse>("/search/movie", {
params: { query },
});


return response.data.results;
}