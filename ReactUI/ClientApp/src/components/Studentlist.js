import React from 'react';
import './Studentlist.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

class Studentlist extends React.Component {


    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Enter Student Information</h4>
                  View student list 
            </Container>
        );
    }

}

export default Studentlist;