export const TMDB_API_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_TMDB_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_TMDB_API_KEY}`
    }
};

export const fetchMovies = async( {query}: {query: string} ) => {
    const endpoint = query
    ? `${TMDB_API_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${TMDB_API_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_API_CONFIG.headers
    });

    if(!response.ok){
        // throw new Error('Failed to fetch movies', response.statusText);
    }else{
        const data = await response.json();

        return data.results;
    }
}
// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTJiZDAyZTQwYmQwMTJmY2M0ZjgyMDRmNzA3NGFkYyIsIm5iZiI6MTc1MDEyMzQ0Ni44NDA5OTk4LCJzdWIiOiI2ODUwYzNiNmUzNmE0ZGEwODFiYmQ0ZTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UbPlhra5sP5vlGexhxcUuu9kJyBhmSHuvwj43eRYqkU'
//     }
// };
//
// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));