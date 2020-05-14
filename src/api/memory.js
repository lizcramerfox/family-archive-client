import apiUrl from '../apiConfig'
import axios from 'axios'

export const memoryIndex = user => {
  return axios({
    url: apiUrl + '/memories',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const memoryCreate = (user, memory) => {
  return axios({
    url: apiUrl + '/memories-create',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      memory: {
        title: memory.title,
        description: memory.description,
        people: memory.people
      }
    }
  })
}

// export const signOut = user => {
//   return axios({
//     url: apiUrl + '/sign-out',
//     method: 'DELETE',
//     headers: {
//       'Authorization': `Token token=${user.token}`
//     }
//   })
// }
//
// export const changePassword = (passwords, user) => {
//   return axios({
//     url: apiUrl + '/change-password',
//     method: 'PATCH',
//     headers: {
//       'Authorization': `Token token=${user.token}`
//     },
//     data: {
//       passwords: {
//         old: passwords.oldPassword,
//         new: passwords.newPassword
//       }
//     }
//   })
// }
