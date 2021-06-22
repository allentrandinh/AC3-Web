import React from 'react';
import {data} from './IntlRela_data';
import { Link, useParams } from 'react-router-dom';

const Country = () => {
    const {id} = useParams();
    const country = data.find((element)=>element.id===id);
    return(
        <div id={country.id} className='country'>

            <h2>{country.id}</h2>

            <div id='Politics'>
                <h4>Politics</h4>
                <h5>With the United States</h5>
                <ul>
                    {country.politics_us.map((bulletpoint)=><li>{bulletpoint}</li>)}
                </ul>
                <h5>With China</h5>
                <ul>
                    {country.politics_china.map((bulletpoint)=><li>{bulletpoint}</li>)}
                </ul>
            </div>

            <div id="Geography">
                <h4>Geography</h4>
                <ul>
                    {country.geography.map((bulletpoint)=><li>{bulletpoint}</li>)}
                </ul>
            </div>

            <div id="Climate">
                <h4>Climate</h4>
                <ul>
                    {country.climate.map((bulletpoint)=><li>{bulletpoint}</li>)}
                </ul>
            </div>

            <div id='Resources'>
                <h4>Resources</h4>
                <h5>Water</h5>
                <ul>
                    {country.water.map((bulletpoint)=><li>{bulletpoint}</li>)}
                </ul>
                <h5>Fuel/Energy</h5>
                <ul>
                    {country.fuel.map((bulletpoint)=><li>{bulletpoint}</li>)}
                </ul>
            </div>
            <div id="Advantages">
                <h4>Advantages</h4>
                <ul>
                    {country.advantages.map((bulletpoint)=><li>{bulletpoint}</li>)}
                </ul>
            </div>
            <div id="Disadvantages">
                <h4>Disadvantages</h4>
                <ul>
                    {country.disadvantages.map((bulletpoint)=><li>{bulletpoint}</li>)}
                </ul>
            </div>
            <div id="Comments">
                <h4>Comments</h4>
                <ul>
                    {country.comments.map((bulletpoint)=><li>{bulletpoint}</li>)}
                </ul>
            </div>

            <div id="Sources">
                <h4>Sources</h4>
                <ul>
                    {country.sources.map((bulletpoint)=><li>{bulletpoint}</li>)}
                </ul>
            </div>
            <div className='backhome'>
                <Link to='/data'>Back to Data Page</Link>
            </div>

        </div>
    )
}

export default Country;