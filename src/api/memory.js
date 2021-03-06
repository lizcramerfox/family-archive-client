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

export const memoryShow = (user, id) => {
  return axios({
    url: apiUrl + `/memories/${id}`,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const memoryCreate = (user, memory) => {
  return axios({
    url: apiUrl + '/memories',
    method: 'POST',
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

export const memoryUpdate = (user, memory, id) => {
  return axios({
    url: apiUrl + `/memories/${id}`,
    method: 'PATCH',
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

export const memoryDestroy = (user, id) => {
  return axios({
    url: apiUrl + `/memories/${id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
