import React, { useEffect, useState } from 'react'
import { services } from '../../../service/services'
import { Town } from '../../../type/Town';

const Towns = () => {
    const aServ = new services();
    const [towns, setTowns] = useState<Town[]>([]);
    useEffect(() => {
        aServ.getTowns().then((res) => {
            setTowns(res.data);
        }).catch((e) => {
            console.log(e)
        })
    },[])

    return (
        <div>
            {towns.map((t: Town) => {
                return (
                    <div key={t.id}>
                        <p>town: {t.name}</p>
                        <p>country: {t.id_country.name}</p>
                    </div>
                );
            })}
        </div>
    )
}
export default Towns;