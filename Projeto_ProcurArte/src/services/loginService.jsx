import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8081",
});

export class loginService{
    async login(email, password) {
        const response = await api.post(
          "/auth",
          {},
          {
            headers: {
              usuario: email,
              senha: password,
            },
          }
        );
    console.log(response.data)
        return response.data;
      }
}

export default loginService;