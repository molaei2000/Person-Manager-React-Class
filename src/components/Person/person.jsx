import React from 'react';
// import './person.css'


const Person = ({
  fullname,
  personDelete,
  changed
    
  }) => {
  return (
    <div className="card text-white bg-info mb-3 mt-3 w-25 mx-auto " >
      <div className="card-body text-center">
        <p className="d-block" > {`${fullname}`} </p>
        <div className="input-group justify-content-center">
          <input type='text' placeholder={fullname} onChange={changed} className="form-control w-50"/>
          <div className="input-group-prepend">
            <button className="btn btn-sm btn-danger fa fa-trash" onClick={personDelete} />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Person;