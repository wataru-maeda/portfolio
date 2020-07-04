import swal from 'sweetalert2'
import PropTypes from 'prop-types'
import './alert.css'

const Alert = ({ label, message, icon, buttonText, onClick }) => {
  return swal
    .fire(label, message, {
      icon,
      button: {
        text: buttonText,
      },
    })
    .then(onClick)
}

Alert.propTypes = {
  label: PropTypes.string,
  message: PropTypes.string,
  icon: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
}

Alert.defaultProps = {
  label: '',
  message: '',
  icon: '',
  buttonText: 'OK',
  onClick: () => null,
}

export default Alert
