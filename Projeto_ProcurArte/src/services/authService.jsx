import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/auth/",
});

export class AuthEndpoint {
  async login(email, password) {
    const response = await api.post("", { email, password });
    return response.data;
  }
}

export class RegisterEndpoint {
  async register(email, name, password, repeatPassword, phoneNumber, phone, cpf) {
    const response = await api.post("", {
      email,
      name,
      password,
      repeatPassword,
      phoneNumber,
      cpf,
    });

    return response.data;
  }
}
