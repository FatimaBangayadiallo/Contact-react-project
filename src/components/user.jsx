import React from 'react';
import {Card,Col} from 'react-bootstrap'

const Users = (props) =>{
  return(
    <Col md="4">
    <Card style={{ marginBottom: '2rem' }}>
  <Card.Body>
    <Card.Title> User Conatact</Card.Title>
    <br/>
    <Card.Subtitle className="mb-2 text-muted"> {props.userInfo.name} </Card.Subtitle>
    <Card.Text>
      <p>  phone-number: {props.userInfo.phone}</p>
      <p>  Location: {props.userInfo.location}</p>
    </Card.Text>
    <Card.Link href="#">Edit</Card.Link>
    <Card.Link href="#">Destroy</Card.Link>
  </Card.Body>
</Card>
</Col>
  );
}
export default Users
