import React from 'react';
import Users from './user.jsx';
import {Container ,Row} from 'react-bootstrap';

const Contact =(props) =>{
  return(
    <Container>
      <Row>
         {
           props.ContactData.map((user,index)=>{
             return   <Users userInfo={user} key={index} />
           })
         }

      </Row>
    </Container>
  );
};
export default Contact;
