
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
    const response = await api.get(`${id}`)
    return response.data;
  }

  async addMusician(email,password,name,phoneNumber,cpf,address,portfolio,musicStyles,intruments) {
    const response = await api.post("",{email,password,name,phoneNumber,cpf,address,portfolio,musicStyles,intruments})
    return response.data;
  }

  async getImages(id) {
    const response = await api.get(`${id}/images`)
    return response.data
  }

  async updateImages(id, images) {
    const response = await api.patch(`${id}/images`, {images})
    return response.data;
  }

  async getPortfolio(id) {
    const response = await api.get(`${id}/portfolio`)
    return response.data;
  }

  async updatePortfolio(id,musicianDescription,instagramProfile,profilePhoto,thumbnail,media) {
    const response = await api.patch(`${id}/portfolio`,{musicianDescription,instagramProfile,profilePhoto,thumbnail,media})
    return response.data;
  }

  async getWhatsappLink (id) {
    const response = await api.get(`${id}/whatsapp`)
    return response.data;
  }

  async updateInstruments(id, instruments) {
    const response = await api.patch(`${id}/instrument`, {instruments})
    return response.data;
  }

  async updateMusicStyles (id, musicStyles) {
    const response = await api.patch(`${id}/musicstyle`, {musicStyles})
    return response.data;
  }

  async deleteMusician (id) {
    const response = await api.delete(`${id}`)
    return response.data;
  }

}

