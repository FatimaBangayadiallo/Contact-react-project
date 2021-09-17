import React from 'react';
import {Form, Button} from 'react-bootstrap';

class ContactsForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      phone:'',
      location: ''
    }
  }
  handleChange = (e)=>{
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log(this.state);

  };
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.AddUser(this.state)
    this.setState({
      name: '',
      phone:'',
      location: ''
    })
  }
 render(){
   return(
     <Form onSubmit={this.handleSubmit}>
 <Form.Group className="mb-3" controlId="formBasicName">
   <Form.Label>Name</Form.Label>
   <Form.Control type="txt" placeholder="Enter Name"  name="name" value={this.state.name} onChange={this.handleChange}/>
 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicPhone">
   <Form.Label>Phone</Form.Label>
   <Form.Control type="number" placeholder="phone number" name="phone" value={this.state.phone} onChange={this.handleChange} />
 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicLocation">
   <Form.Label>Location</Form.Label>
   <Form.Control type="txt" placeholder="Enter Location" name="location" value={this.state.location} onChange={this.handleChange}  />
 </Form.Group>

 <Button variant="primary" type="submit">
   Submit
 </Button>
</Form>


   );
 }

};
export default ContactsForm;
