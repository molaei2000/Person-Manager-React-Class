import React,{useContext} from 'react';
import simpleContext from '../../simpleContext';
import Person from './person'

const Persons = () => {
  const context = useContext(simpleContext)
  return (<div>
    {context.state.persons.map(person => (
      <Person
        fullname={person.fullname}
        key={person.id}
        personDelete = {
        () => context.handleDeletePerson(person.id)
        }
        changed = {
          (event) => context.handleChangName(event,person.id)
        }
      />
    ))}
  </div> );
}
 
export default Persons;