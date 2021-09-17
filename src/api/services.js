import axios from "axios";
const API = "http://127.0.0.1:8000/api/";

export default {
  get(collection) {
    return axios.get(`${API}${collection}`);
  },
  find(collection, id) {
    return axios.get(`${API}${collection}/${id}`);
  },
  create(collection, payload) {
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    return axios.post(`${API}${collection}`, payload);
  },
  delete(collection, id) {
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    return axios.delete(`${API}${collection}/${id}`, {_method: 'delete'});
  }
};