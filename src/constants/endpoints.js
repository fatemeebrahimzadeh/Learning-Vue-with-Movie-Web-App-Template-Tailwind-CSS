export const CREATE_REQUEST_TOKEN_URL = '/authentication/token/new'
export const CREATE_SESSION_URL = '/authentication/session/new'
export const VALIDATE_WITH_LOGIN_URL = '/authentication/token/validate_with_login'
export const ACCOUNT_URL = '/account'
export const POPULAR_MOVIES_URL = '/movie/popular'
export const POPULAR_PERSON_URL = '/trending/person/day'
export const NOW_PLAYING_MOVIES_URL = '/movie/now_playing?language=en-US&page=1'
export const TV_SHOWS_URL =
  '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
export const MOVIES_URL =
  '/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
export const MOVIE_DETAILS_URL = (id) => `/movie/${id}`
export const TV_SERIES_DETAILS_URL = (id) => `/tv/${id}`
export const MOVIE_IMAGES_URL = (id) => `/movie/${id}/images`
export const TV_SERIES_IMAGES_URL = (id) => `/tv/${id}/images`
export const MOVIE_KEYWORDS_URL = (id) => `/movie/${id}/keywords`
export const TV_SERIES_KEYWORDS_URL = (id) => `/tv/${id}/keywords`
export const MOVIE_REVIEWS_URL = (id) => `/movie/${id}/reviews`
export const TV_SERIES_REVIEWS_URL = (id) => `/tv/${id}/reviews`
export const MOVIE_CREDITS_URL = (id) => `/movie/${id}/credits`
export const TV_SERIES_CREDITS_URL = (id) => `/tv/${id}/credits`
