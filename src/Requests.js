// import axios from 'axios';
const API_KEY = "971b2ef273ae22e8f151e27d46ce7887";
// export function requestPopular() {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/movie/popular?api_key=971b2ef273ae22e8f151e27d46ce7887&language=en-US&page=1`,
//     )
//     .then((response) => console.log('response'))
//     .catch((error) => console.log(error));
// }

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
