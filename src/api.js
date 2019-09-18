import axios from "axios";
import {apiRoute} from "./route";

export default {
    endpoint(url) {
        url = apiRoute.apiBase + url; //concat base url and url with base api endpoint
        return {
            getOne: (id) => axios.get(url + `${id}`), //id_url
            getAll: () => axios.get(url),
            create: (data) => axios.post(url, data), //url, data
            updateByID: (id, data) => axios.put(url + `/${id}`, data), //url, data
            update: (data) => axios.put(url, data),  // without id
            delete: (id) => axios.delete(url + `/${id}`),
        }
    },
}