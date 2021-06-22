import React,{ useState } from 'react';
import axios from 'axios';

import BaseInput from './base_input';
import ConflictInput from'./conflict_areas_input';
import Explanation from './explanation';
import ResultDisplay from './result_display';

const FullInput = () => {

    const [bases, setBases] = useState([]);
    const updatebaselist = (newBase) => {
        setBases([...bases, newBase]);
    };
    const removeBaseItem = (id) => {
    let newBases = bases.filter((base) => base.id !== id);
    setBases(newBases);
  };

    const [areas, setAreas] = useState([]);
    const updatearealist = (newArea) => {
        setAreas([...areas,newArea]);
    };
    const removeAreaItem = (id) => {
    let newAreas = areas.filter((area) => area.id !== id);
    setAreas(newAreas);
  };

    // const data = {intro: "The ascending order of bases with regards to total distance to all potential conflicting areas are:", base: [["sprat", 34, 12]]}
    // const before = {intro:"No data to display",base:[]}
    const [reply,setReply] = useState({intro:"No data to display",base:[]});

    const resetAll = () => {
        setAreas([]);
        setBases([]);
        setReply({intro:"No data to display",base:[]});
    };

    const submitData = (e) => {
        e.preventDefault();
        console.log("submit button clicked");
        console.log(bases);
        console.log(areas);
        axios
            .post('/tester',"random command")
            .then((response)=>console.log(response));
        axios
            .post('/baseranker',{base:bases,area:areas})
            .then((respond) => {
                console.log(respond);
                setReply({intro:respond.data.intro,base:respond.data.base})
             })
            .catch(err => {console.log(err)});
    };


    return(
        <React.Fragment>
            <Explanation/>
            <div className='grid37'>
            <div>
                <BaseInput bases={bases} onChange={updatebaselist}/>
                <ConflictInput areas={areas} onChange={updatearealist}/>
            </div>
            <div>
            <div className='outputBase'>
                {bases.map((base) => {
                const { id, basename, longitude, latitude } = base;
                return (
                    <div key={id} className='item'>
                    <h4>Base</h4>
                    <h4>{basename}</h4>
                    <p>{longitude}</p>
                    <p>{latitude}</p>
                    <p>X</p>
                    <button onClick={() => removeBaseItem(id)}>remove</button>
                    </div>
                );
                })}
            </div>
            <div className='outputBase'>
                {areas.map((area) => {
                const { id, areaname, longitude, latitude, weight } = area;
                return (
                    <div key={id} className='item'>
                    <h4>Area</h4>
                    <h4>{areaname}</h4>
                    <p>{longitude}</p>
                    <p>{latitude}</p>
                    <p>{weight}</p>
                    <button onClick={() => removeAreaItem(id)}>remove</button>
                    </div>
                );
                })}
            </div>
            <button type='reset' className='totalbtn' onClick={()=>{resetAll()}}> RESET </button>
            <button type='submit' className='totalbtn' onClick={submitData}> SUBMIT </button>
            </div>
            </div>

            <div>
                <ResultDisplay result={reply}/>
            </div>
        </React.Fragment>
    )
};

export default FullInput;