import swal from 'sweetalert'
import './alert.css'

export const showAlert = ({
  title,
  message = '',
  icon,
  buttonTitle = 'OK',
}, callback = () => {}) => {
  return swal(title, message ,{
    icon,
    button: {
      text: buttonTitle,
    },
  }).then(callback)
}
