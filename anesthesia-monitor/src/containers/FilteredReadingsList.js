import { connect } from 'react-redux'
import { toggleReading } from '../actions'
import ReadingsList from '../components/ReadingsList'


const getFilteredReadings = (readings, filter) => {
  switch (filter){
    case 'SHOW_ALL':
      return readings
    default:
      return new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  readings: getFilteredReadings(state.readings, state.setFilter)
})

const mapDispatchToProps = (dispatch) => ({
  onReadingClick: (id) => {
    dispatch(toggleReading(id))
  }
})

const FilteredReadingsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadingsList)

export default FilteredReadingsList
