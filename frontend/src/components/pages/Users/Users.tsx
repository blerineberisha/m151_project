import React, { useEffect, useState } from 'react'
import { services } from '../../../service/services'
import { Roles } from '../../../type/Roles';
import { Town } from '../../../type/Town';
import { User } from '../../../type/User';
import "./Users.css"

const Towns = () => {
    const aServ = new services();
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        aServ.getUsers().then((res) => {
            setUsers(res.data);
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    return (
        <div>
            {users.map((u: User) => {
                return (
                    <div id="user">
                        <p>email: {u.email}</p>
                        <p>username: {u.username}</p>
                        {u.roles?.map((r: Roles) => {
                            return (
                                <p>roles: {r.name}</p>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    )
}
export default Towns;