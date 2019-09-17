import axios from "axios";

const apiKey = "a3c048c4f3355f666764ae9ce53e9c70"

const apiBase = `https://www.food2fork.com/api/search?key=${apiKey}`

 
export default {
    endpoint() {
        return {
            getOne: ({id}) => axios.get(apiBase + `/${id}`), //id_url 
            getAll: () => axios.get(apiBase),
            create: (data) => axios.post(apiBase, data), //url, data
            update: ({ id }, data) => axios.put(apiBase + `/${id}`, data), //url, data
            delete: ({ id }) => axios.delete(apiBase + `/${id}`)//id_url
        }
    }
}
