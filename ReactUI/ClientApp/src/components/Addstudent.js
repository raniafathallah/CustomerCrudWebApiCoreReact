import React from 'react';
import './Addstudent.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

class Addstudent extends React.Component {


    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Enter Student Information</h4>
                  Add New Student 
            </Container>
        );
    }

}

export default Addstudent;