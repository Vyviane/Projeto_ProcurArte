import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/instrument/",
});

export class InstrumentEndpoint {
    async listInstruments() {
        const response = await api.get()
        return response.data;
    }
}