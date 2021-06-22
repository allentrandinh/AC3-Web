import React, { useState } from 'react';

//person first name email age
const ControlledInputs = (props) => {
  const [base, setBase] = useState({ basename: '', longitude: '', latitude: '' });
//   const [bases, setBases] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBase({ ...base, [name]: value });
  };
  

//add modal when all are not entered
  const handleSubmit = (e) => {
    e.preventDefault();
    if (base.basename && base.longitude && base.latitude) {
      const newBase = { ...base, id: new Date().getTime().toString() };
      props.onChange(newBase);
   //   setBases([...bases, newBase]);
      setBase({ basename: '', longitude: '', latitude: '' });
    }
  };
  return (
    <div className='controlledinput'>
      <div className='form'>
        <form>
          <div className='form-control'>
            <label htmlFor='basename'>Base Name </label>
            <input
              type='text'
              id='basename'
              name='basename'
              value={base.basename}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='longitude'>Longitude </label>
            <input
              type='number'
              id='longitude'
              name='longitude'
              value={base.longitude}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='latitude'>Latitude</label>
            <input
              type='number'
              id='latitude'
              name='latitude'
              value={base.latitude}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn' onClick={handleSubmit}>
            add base
          </button>
        </form>
      </div>
    </div>
  );
};

export default ControlledInputs;
