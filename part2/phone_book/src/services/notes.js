import axios from 'axios'
const baseUrl = 'http://localhost:3000/persons'


const deletePerson = (id) => {
    axios.delete(`${baseUrl}/${id}`)
    return getAll()
}

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (updatedPerson) => {
    const request = axios.put(`${baseUrl}/${updatedPerson.id}`, updatedPerson)
    return request.then(response => response.data)
}


export default {
    getAll,
    create,
    deletePerson,
    update
}