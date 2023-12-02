import axios from "axios";

// const URL = 'http://localhost:8081/musician';
const api = axios.create({
  baseURL: "http://localhost:8081/musician",
});

export class MusicianEndpoint {
  async listMusician() {
    const response = await api.get();
    console.log(response.data);
    return response.data;
  }
}
