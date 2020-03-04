import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  SEARCH_CHANGE,
  RATING_CHANGE
} from "../types";

const initialState = {
  movies: [
    {
      id: 1,
      title: "vis à vis",
      rating: "5",
      year: "2015",
      image:
        "https://cimaclub.com/wp-content/uploads/2016/12/MV5BM2MyNjFhZGYtMmI1ZC00Nzk0LWIwZjktMzMxZTk1YTQ2NWNhXkEyXkFqcGdeQXVyNDQ4NTM2ODE@._V1_SX715_CR00715999_AL_-e1516998816811.jpg",
      description:
        "Macarena Ferreiro est une jeune femme qui, par amour pour son patron, commet quelques délits fiscaux et de gestion. Elle se retrouve incarcérée et doit cohabiter avec de dangereuses criminelles.",
      NbreEp: "45",
      NbreSaison: "4"
    },
    {
      id: 2,
      title: "El Cuerpo",
      rating: "4",
      year: "2015",
      image: "https://images.fr.shopping.rakuten.com/photo/1166329382.jpg",
      description:
        "Fuyant quelqu'un ou quelque chose, Angel Torrès, veilleur de nuit à l'institut médico-légal, a été percuté par une voiture et il est dans le coma. Les enquêteurs chargés de l'affaire découvrent que, ce soir-là, un cadavre a disparu de la morgue. Il s'agit du corps de la richissime Mayka Villaverde",
      NbreEp: "1",
      NbreSaison: "1"
    },
    {
      id: 3,
      title: "lucifer",
      rating: "3",
      year: "2015",
      image:
        "https://www.tomsguide.fr/content/uploads/sites/2/2020/02/lucifer-saison6.jpg",
      description:
        "DescriptionLassé et mécontent de sa position de Seigneur des Enfers, Lucifer Morningstar démissionne et abandonne son royaume pour la bouillonnante Los Angeles. Dans la Cité des anges, l'ex maître diabolique est le patron d'un nightclub baptisé Lux.",
      NbreEp: "67",
      NbreSaison: "4"
    }
  ],
  searchInput: "",
  ratingInput: "0"
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };

    case EDIT_MOVIE:
      console.log("action.payload", action.payload);
      return {
        ...state,
        movies: state.movies.map(el =>
          el.id === action.payload.id ? { ...action.payload } : el
        )
      };
    case SEARCH_CHANGE:
      return {
        ...state,
        searchInput: action.payload
      };
    case RATING_CHANGE:
      return {
        ...state,
        ratingInput: action.payload
      };
    default:
      return state;
  }
};
export default movieReducer;
