import React from 'react'
import FilterContainer from '../containers/FilterContainer'

const Footer = () => {
  return (
    <footer>
      <FilterContainer filter="SHOW_ALL">All Readings</FilterContainer>
      <FilterContainer filter="SHOW_ACTIVE">Active</FilterContainer>
    </footer>
  )
}

export default Footer
