import {createContext} from 'react';

const simpleContext =  createContext({
  state: {},
  handleDeletePerson : () => { },
  handleChangName: () => {},
  handleNewPerson: () => {},
  setPerson: () => {},
  
})

export default simpleContext

