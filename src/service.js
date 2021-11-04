const API_KEY = 'a3c200f7c1c7f65b45dccd609c36de0a';
const API_BASE = `https://api.themoviedb.org/3/`;


const basicFetchRequisition = async (endpoint) => {
  const requisition = await fetch(`${API_BASE}${endpoint}language=pt-BR&api_key=${API_KEY}`);
  const json = await requisition.json();
  return json;
}

const moviesData = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetchRequisition('discover/tv?with_network=213&')
      },
      {
        slug: 'recommended',
        title: 'Recomendados para Você',
        items: await basicFetchRequisition('trending/all/week?')
      },
      {
        slug: 'top-rated',
        title: 'Em Alta',
        items: await basicFetchRequisition('movie/top_rated?')
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetchRequisition('discover/movie?with_genres=28&')
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetchRequisition('discover/movie?with_genres=35&')
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetchRequisition('discover/movie?with_genres=27&')
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetchRequisition('discover/movie?with_genres=10749&')
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetchRequisition('discover/movie?with_genres=99&')
      },
      {
        slug: 'animes',
        title: 'Animes',
        items: await basicFetchRequisition('discover/movie?with_genres=16&')
      },
    ];
  }
}

export default moviesData;