import swal from 'sweetalert'
const Alert = (title, message) => {
    if (title.toLowerCase() === 'success') {
        swal(title, message, "success");
    } else if (title.toLowerCase() === 'error') {
        swal(title, message, "error");
    } else {
        swal(title, message, "warning");
    }
}
export default Alert;