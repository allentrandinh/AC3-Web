import React from 'react';
import albionlogo from '../images/Logo_Albion.png';
import blacknrossi from '../images/Logo_BlacknRossi.png';
import dispute from '../images/claimed_territory.jpg'
import {data} from './student_assessment';

const About = () => {
    return(
        <div className='about'>
            <h3> PROJECT OVERVIEW: AC3 #2</h3>
            <img src={dispute} alt='South China Sea Dispute' className='image'></img>
            <p>Dispute at the South China Sea Region</p>
            <div className='country'>
                <h4>Goal</h4>
                <p>{data.goal}</p>
                <h4>Reason behind the problem</h4>
                <p>{data.reason}</p>
                <h4>Potential Solution</h4>
                <p>{data.solution}</p>
            </div>
            <hr></hr>
            <img src={albionlogo} alt='Albion Logo' className='logo'></img>
            <img src={blacknrossi} alt='BlacknRossi Logo' className='logo'></img>
        </div>
    )
}

export default About;