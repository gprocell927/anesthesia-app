import { connect } from 'react-redux'
import { addReading } from '../actions'
import AddReadingForm from '../components/AddReadingForm'

const mapStateToProps = (state) => {
  return { readings: state.readings }
}

const mapDispatchToProps=(dispatch) => {
   return {
     handleSubmit: (text, id) => {
       dispatch(addReading(text, id))
     }
   }
 }


export default connect(mapStateToProps, mapDispatchToProps)(AddReadingForm)
