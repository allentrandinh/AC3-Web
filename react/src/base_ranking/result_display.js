import React from 'react';

const ResultDisplay = (props) => {
    const data = props.result;
    return(
    <div className='rankerresult'> 
    <h3>result board</h3>
    <p>{data.intro}</p>
    <ul>
        {
            data.base.map((eachbase,index)=>{
            return(<li key={index}>Base Name: {eachbase[0]} - Raw Distance: {eachbase[2]} - Adjusted Distance: {eachbase[1]}</li>)
        })
        }
    </ul>
    <br></br>
    <h5>******************************************************</h5>
    </div>)
};

export default ResultDisplay;