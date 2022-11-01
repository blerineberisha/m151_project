import React, { useEffect, useState } from 'react'
import { services } from '../../../service/services'
import { Country } from '../../../type/Country';

const Towns = () => {
    const aServ = new services();
    const [countries, setCountries] = useState<Country[]>([]);
    useEffect(() => {
        aServ.getCountries().then((res) => {
            setCountries(res.data);
        }).catch((e) => {
            console.log(e)
        })
    },[])

    return (
        <div>
            {countries.map((c: Country) => {
                return (
                    <div key={c.id}>
                        <p>country: {c.name}</p>
                    </div>
                );
            })}
        </div>
    )
}
export default Towns;