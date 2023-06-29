import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { ALL_FILM } from '../../query'

function AllFilm ({ onFilmSelect }) {
  const { data } = useQuery(ALL_FILM)
  return (
    <div>
      <select onChange={onFilmSelect} >
        <option>select film</option>
        {
          data?.allFilms?.films?.map((item, index) => {
            return (
              <option key={index} value={index + 1}>{item.title}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default AllFilm

AllFilm.propTypes = {
  onFilmSelect: PropTypes.func.isRequired
}
