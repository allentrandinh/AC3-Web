import React from 'react';
import {data} from './IntlRela_data';
import {Link} from 'react-router-dom';

const Countries = () => {
    return(
        <div className='countrynav'>
            <h3>Data by Country</h3>
            {data.map((country)=>{
                return(
                    <div key={country.id} className='item'>
                        <h4>{country.id}</h4>
                        <Link to={`/data/${country.id}`}>Learn More</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Countries;