import { connect } from 'react-redux'
import { toggleReading } from '../actions'
import ReadingsList from '../components/ReadingsList'


const getFilteredReadings = (readings, filter) => {
  switch (filter){
    case 'SHOW_ALL':
      return readings
  }
}
