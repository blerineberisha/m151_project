import axios from 'axios';
import { BookType } from '../type/BookType';
import { User } from '../type/User';

export class services {
    private BASE_URL = "http://localhost:8080";
    private client = axios.create({ baseURL: this.BASE_URL });

    postNewUser(user: User) {
        return this.client.post("/register", user);
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

    config = {
        headers: {
            AUTHORIZATION: "Bearer " + localStorage.getItem('user'),
            withCredentials: true
        }
    };

    getTowns() {
        return this.client.get("/countries/towns", this.config);
    }

    getBooks() {
        return this.client.get("/books");
    }

    getCountries() {
        return this.client.get("/countries", this.config);
    }

    getUsers() {
        return this.client.get("/users", this.config);
    }

    getPrincipal() {
        return this.client.get("/principal", this.config)
    }

    deleteUser(username: string) {
        return this.client.delete("/" + username, this.config)
    }

    getCart() {
        return this.client.get("/cart/", this.config)
    }

    deleteItem(id: string) {
        return this.client.delete("/cart/" + id, this.config)
    }

    addBookToCart(book: BookType) {
        return this.client.post("/cart/", book, this.config)
    }
}