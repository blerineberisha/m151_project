import { Author } from "./Author";

export type BookType = {
    isbn: string;
    title: string;
    author: Author;
    description: string;
    price: string;
    publisher: string;
    genre: string;
};