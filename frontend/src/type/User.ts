import {Roles} from "./Roles"

export type User = {
    user_id: number,
    username: string,
    email: string,
    password: string,
    roles?: Roles[]
}