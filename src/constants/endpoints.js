export const CREATE_REQUEST_TOKEN_URL = '/authentication/token/new'
export const CREATE_SESSION_URL = '/authentication/session/new'
export const VALIDATE_WITH_LOGIN_URL = '/authentication/token/validate_with_login'
export const ACCOUNT_URL = '/account'
export const POPULAR_MOVIES_URL = '/movie/popular'
export const NOW_PLAYING_MOVIES_URL = '/movie/now_playing?language=en-US&page=1'
export const TV_SHOWS_URL =
  '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
export const MOVIE_DETAILS_URL = (id) => `/movie/${id}`
