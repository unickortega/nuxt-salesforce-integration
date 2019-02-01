import axios from 'axios'
import swal from 'sweetalert2'
export default function (context) {

    // Request interceptor
    axios.interceptors.request.use(request => {
        const token = context.app.store.getters.auth
        if (token) {
            request.headers.common['Authorization'] = `Bearer ${token}`
        }
        return request
    })
}


  // Response interceptor
// axios.interceptors.response.use(response => response, error => {
//     const { status } = error.response
  
//     if (status >= 500) {
//       swal({
//         type: 'error',
//         title: i18n.t('error_alert_title'),
//         text: i18n.t('error_alert_text'),
//         reverseButtons: true,
//         confirmButtonText: 'ok',
//         cancelButtonText: 'cancel'
//       })
//     }
  
//     if (status === 401 && store.getters['auth'] && jQuery('.swal2-container').length == 0) {
//       swal({
//         type: 'warning',
//         title: 'Expired',
//         text: 'Expired',
//         reverseButtons: true,
//         confirmButtonText: 'ok',
//         cancelButtonText: 'cancel'
//       }).then(() => {
//         store.commit('logout')
//         // router.push({ name: 'login' })
//       })
//     }
  
//     return Promise.reject(error)
//   })
  