import axios from 'axios';
import { User } from '../type/User';

export class services {
    private BASE_URL = "http://localhost:8080";
    private client = axios.create({ baseURL: this.BASE_URL });


    postNewUser(user: User) {
        return this.client.post("/users/", user);
    }

    async login(username: string, password: string) {
        const response = await axios.post(this.BASE_URL + "/login?username=" + username + "&password=" + password);
        if (response.data) {
            localStorage.setItem('user', response.data.access_token);
        }
        return response.data.access_token;
    }

    logout() {
        localStorage.removeItem("user");
    };

    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);

        return null;
    };

    config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('user'),
            withCredentials: true
        }
    };

    getTowns() {
        return this.client.get("/countries/towns", this.config);
    }

    getBooks() {
        return this.client.get("/books");
    }
}