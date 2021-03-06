import { connect } from 'react-redux'
import { addReading } from '../actions'
import AddReadingForm from '../components/AddReadingForm'

const mapStateToProps = (state) => {
  return { readings: state.readings }
}

const mapDispatchToProps = (dispatch) => {
   return {
     handleSubmit: (info) => {
       dispatch(addReading(info))
     }
   }
 }


export default connect(mapStateToProps, mapDispatchToProps)(AddReadingForm)
