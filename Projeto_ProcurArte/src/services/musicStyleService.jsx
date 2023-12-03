import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/musicstyle/",
});

export class MusicStyleEndpoint {
    async listMusicStyles() {
        const response = await api.get()
        return response.data;
    }
}