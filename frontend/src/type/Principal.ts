import {Roles} from "./Roles";

export type Principal = {
    username: string;
    roles: Roles[];
}