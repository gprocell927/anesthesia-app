import React, { Component } from 'react'
import AddReadingForm from '../containers/AddReadingFormContainer'
import FilteredReadingsList from '../containers/FilteredReadingsList'
import Footer from '../components/Footer'

const App = () => {
  return (
    <section>
      <AddReadingForm />
      <FilteredReadingsList />
      <Footer />
    </section>
  )
}

export default App
