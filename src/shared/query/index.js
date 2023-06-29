import { gql } from '@apollo/client'

export const ALL_FILM = gql`
    query Query {
        allFilms {
          films {
            title
            id
          }
        }
      }`

export const FILM_DATA = gql`
    query Film($filmId: ID) {
        film(filmID: $filmId) {
             director
             episodeID            
             releaseDate
             title
        }
    }`
