
import './App.css';
import {Container,Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ContactsForm from './components/ContactForms.jsx';
import Contact from './components/Contacts.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ContactUser: [
        {
          name:'fati',
          phone: '622122323',
          location: 'achimota'
        },
        {
          name:'sali',
          phone: '02345678932',
          location: 'badiar'
        },
        {
          name: 'bah',
          phone:'235699348439',
          location:'abofu'
        }
      ]
    }

  }
  AddNewContact = (user) =>{
    this.setState({
      ContactUser: [...this.state.ContactUser, user]
    })
  }
  render(){
    return(
      <>
      <Container fluid style={{marginTop: "2rem"}}>
        <Row>
         <Col>
           <ContactsForm AddUser = {this.AddNewContact} />
         </Col>
         <Col>
            <Contact ContactData={this.state.ContactUser} />
         </Col>
        </Row>
      </Container>



      </>

    );
  }
}

export default App;
