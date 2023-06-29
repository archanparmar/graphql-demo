import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { FILM_DATA } from '../../query'

function Film ({ filmID }) {
  const { data, refetch } = useQuery(FILM_DATA,
    {
      variables: { filmId: filmID },
      fetchPolicy: 'cache-first'
    })
  return (
    <div>
        <h3>{data?.film?.title}</h3>
        <p>episodeID : {data?.film?.episodeID}</p>
        <p>releaseDate : {data?.film?.releaseDate}</p>
        <p>director : {data?.film?.director}</p>

        <button onClick={() => refetch({ filmId: 1 })}>Refetch!</button>
    </div>
  )
}

export default Film

Film.propTypes = {
  filmID: PropTypes.string.isRequired
}
