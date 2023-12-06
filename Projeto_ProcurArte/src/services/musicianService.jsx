import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/musician",
});

export class MusicianEndpoint {
  async listMusician() {
    const response = await api.get();
    return response.data;
  }

  async showMusician(id) {
    const response = await api.get(`${id}`);
    return response.data;
  }

  async addMusician(
    email,
    password,
    name,
    phoneNumber,
    cpf,
    address,
    portfolio,
    musicStyles,
    intruments
  ) {
    const response = await api.post("", {
      email,
      password,
      name,
      phoneNumber,
      cpf,
      address,
      portfolio,
      musicStyles,
      intruments,
    });
    return response.data;
  }

  async getImages(id) {
    const response = await api.get(`${id}/images`);
    return response.data;
  }

  async updateImages(id, images) {
    const response = await api.patch(`${id}/images`, { images });
    return response.data;
  }

  async getPortfolio(id) {
    const response = await api.get(`${id}/portfolio`);
    return response.data;
  }

  async updatePortfolio(id, req) {
    const headers = {
      'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtdXNpY2lhbjVAZXhhbXBsZS5jb20iLCJpc3MiOiJNdXNpY28iLCJpZCI6IjY1NjU0MGIxMmZkOGE1N2RjMWI5NmZjYyIsImV4cCI6MTcwMTg4NTk2Nn0.WCzbvO3gMN9e9yTZ-WMb6l3eCemhkNqLg2Rp7m7RSA4"
    };

    const response = await api.patch(`${id}/portfolio`, req, {
      headers: headers
    });
    return response.data;
  }

  async getWhatsappLink(id) {
    const response = await api.get(`${id}/whatsapp`);
    return response.data;
  }

  async updateInstruments(id, instruments) {
    const response = await api.patch(`${id}/instrument`, { instruments });
    return response.data;
  }

  async updateMusicStyles(id, musicStyles) {
    const response = await api.patch(`${id}/musicstyle`, { musicStyles });
    return response.data;
  }

  async deleteMusician(id) {
    const response = await api.delete(`${id}`);
    return response.data;
  }
}
