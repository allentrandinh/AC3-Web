import React, { useState } from 'react';

//person first name email age
const ControlledInputs = (props) => {
  const [area, setArea] = useState({ areaname: '', longitude: '', latitude: '',weight: '' });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setArea({ ...area, [name]: value });
  };

//add modal when all are not entered
  const handleSubmit = (e) => {
    e.preventDefault();
    if (area.areaname && area.longitude && area.latitude && area.weight) {
      const newArea = { ...area, id: new Date().getTime().toString() };
      // setAreas([...areas, newArea]);
      props.onChange(newArea);
      setArea({ areaname: '', longitude: '', latitude: '',weight:'' });
    }
  };
  return (
    <div>
      <div className='form'>
        <form>
          <div className='form-control'>
            <label htmlFor='areaname'>Area Name </label>
            <input
              type='text'
              id='areaname'
              name='areaname'
              value={area.areaname}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='longitude'>Longitude </label>
            <input
              type='number'
              id='longitude'
              name='longitude'
              value={area.longitude}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='latitude'>Latitude</label>
            <input
              type='number'
              id='latitude'
              name='latitude'
              value={area.latitude}
              onChange={handleChange}
            />
          </div>
        <div className='form-control'>
            <label htmlFor='weight'>Weight</label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={area.weight}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn' onClick={handleSubmit}>
            add conflict area
          </button>
        </form>
      </div>
    </div>
  );
};

export default ControlledInputs;
