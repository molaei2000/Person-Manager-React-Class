import React,{useContext} from 'react';
import {Alert,Badge} from 'react-bootstrap'
import simpleContext from '../../simpleContext';

const Header = () => {

  const context = useContext(simpleContext)

  let badgeStyle = ''

  if (context.state.persons.length >= 3) badgeStyle = 'success'
  if (context.state.persons.length <= 2) badgeStyle = 'warning'
  if (context.state.persons.length <= 1) badgeStyle = 'danger'
  return (
        <div>
          <Alert variant="info">
            <h2 >{ context.state.appTitle}</h2>
            </Alert>

            <h5 className="alert alert-light"> تعداد اشخاص  
              <Badge className="mx-2" pill variant={badgeStyle}> {context.state.persons.length}</Badge>
              {/* <span className={`badge badge-pill ${badgeStyle.join(' ')}`} >{persons.length}</span> */}
            نفر میباشد  
            </h5>
        </div>
   );
}
 
export default Header;