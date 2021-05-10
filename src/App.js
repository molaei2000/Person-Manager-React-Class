import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import Header from './components/common/Header';
import NewPerson from './components/Person/NewPerson';

import Persons from './components/Person/persons';
import simpleContext from './simpleContext';


//import cost extentions

class App extends Component {
  state = {
    persons: [],
    person: '',
    id:1,
    show: true,
    appTitle:'مدیریت کننده اشخاص'
    
  }
  
  handleShowPerson = () => {
    this.setState({ show: !this.state.show })
  }

  handleDeletePerson = (id) => {
    const persons = [...this.state.persons]// copy from state.persons
    //find name
    const personIndex = persons.findIndex(p => p.id === id)
    const name = persons[personIndex].fullname
    
    const filterdPersons = persons.filter(p => p.id !== id)

    this.setState({ persons: filterdPersons })
    toast.error(`${name} با موفقیت حذف شد`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  handleChangName = (event,id) => {

    const allPersons = [...this.state.persons]
    const personIndex = allPersons.findIndex(p => p.id === id)
    allPersons[personIndex].fullname = event.target.value

    this.setState({persons:allPersons})
    
    console.log(event);
  }
  handleNewPerson = () => {
    const persons = [...this.state.persons]
    const person = {
      id:this.state.id,
      fullname:this.state.person
    }
    if (person.fullname !== '' && person.fullname !== ' ') {
      this.state.id++
      persons.push(person)
      this.setState({persons,person:''})
      toast.success('فرد مورد نظر با موفقیت اضافه شد', {
        position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      })
    }

  }

  setPerson = (event) => {
    this.setState({person:event.target.value})
  }



  render() {
    const { show } = this.state
    

    return (
      
      <simpleContext.Provider value={{
        state:this.state,
        handleChangName: this.handleChangName,
        handleDeletePerson: this.handleDeletePerson,
        handleNewPerson: this.handleNewPerson,
        setPerson:this.setPerson
      }}>
        
      
      <div className="rtl text-center">
        
          <Header/>

          <NewPerson/>
          
        

        <Button size="lg" variant={show ? "info": "danger"}
        onClick = {
          this.handleShowPerson
        }
        >
          مشاهده ی اشخاص
        </Button>

        {show ?
          <Persons
            // persons={this.state.persons}
            // personDelete={this.handleDeletePerson}
            //   personChange={this.handleChangName}
              
            />
            :
            null
        }

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        <ToastContainer />
        
      </div>
      
      </simpleContext.Provider>
     );
  }
}
 
export default App;