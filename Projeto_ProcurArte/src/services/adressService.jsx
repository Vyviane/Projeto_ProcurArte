import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/address/",
});

export class AddressEndpoint {
    async getAddress(cep) {
        const response = (await api.get(`${cep}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
          }
        }))
        return response.data; 
    }
}


