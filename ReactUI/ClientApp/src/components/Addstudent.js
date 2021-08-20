import React from 'react';
import axios from 'axios';
import './Addstudent.css';
import { Container, Col, Form, FormGroup, Label, Input, Button,Alert } from 'reactstrap';

class Addstudent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Address: '',
            Mobil:''
        }
    }

    Addstudent = () => {
        axios.post('http://localhost:51829/api/Customer/', {
            CustomerName: this.state.Name, Address: this.state.Address,
            Mobil: this.state.Mobil
        })
            .then(json => {
                if (json.status === 201) {
                    debugger;
                    console.log(json.data);
                    alert("Data Save Successfully");
                    this.props.history.push('/Studentlist');
                }
                else {
                    console.log(json.data.Status);
                    alert('Data not Saved');
                    //debugger;
                    this.props.history.push('/Studentlist');
                }
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Enter Student Information</h4>
                <Form className="form">
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                   
                    
                        <FormGroup row>
                            <Label for="Password" sm={2}>Address</Label>
                            <Col sm={10}>
                                <Input type="text" name="Address" onChange={this.handleChange} value={this.state.Address} placeholder="Enter Address" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="text" sm={2}>Mobil</Label>
                            <Col sm={10}>
                                <Input type="text" name="Mobil" onChange={this.handleChange} value={this.state.Mobil} placeholder="Enter Mobil" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row className="rightBtns">
                            <Col >
                                <Button color="danger">Cancel</Button>{' '}
                            </Col>
                            <Col >
                                <button type="button" onClick={this.Addstudent} className="btn btn-success">Submit</button>
                            </Col>
                     
                        
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }

}

export default Addstudent;