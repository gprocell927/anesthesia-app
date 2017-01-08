import { connect } from 'react-redux'
import { addPatient } from '../actions'
import PatientSetup from '../components/PatientSetup'

const mapStateToProps = (state) => {
  return { patient: state.patient }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (info) => {
      dispatch(addPatient(info))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(PatientSetup)
