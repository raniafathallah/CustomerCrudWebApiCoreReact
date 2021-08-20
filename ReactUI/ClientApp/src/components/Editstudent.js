import React from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import axios from 'axios';
import './Addstudent.css'

class Editstudent extends React.Component {
    constructor(props) {
        super(props)
        debugger;
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeMobil = this.onChangeMobil.bind(this);
    
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Address: '',
            Mobil: ''
        }
    }

    componentDidMount() {
        debugger;
        axios.get('http://localhost:51829/api/Customer/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Name: response.data.customerName,
                    Address: response.data.address,
                    Mobil: response.data.mobil,
                 
                });

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }
    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        });
    }
    onChangeMobil(e) {
        this.setState({
            Mobil: e.target.value
        });
    }


    onSubmit(e) {
        debugger;
        e.preventDefault();
        const obj = {
            customerid: this.props.match.params.id,
            customerName: this.state.Name,
            address: this.state.Address,
            mobil: this.state.Mobil
        

        };
        
        axios.put('http://localhost:51829/api/Customer/'+obj.customerid, obj)
            .then(res => console.log(res.data));
        debugger;
   
        setTimeout(() => {
            this.props.history.push('/Studentlist');
        }, 6000);
       
    }


    render() {
        return (
            <Container className="App">

                <h4 className="PageHeading">Update Student Informations</h4>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="Name" value={this.state.Name} onChange={this.onChangeName}
                                    placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>RollNo</Label>
                            <Col sm={10}>
                                <Input type="text" name="Address" value={this.state.Address} onChange={this.onChangeAddress} placeholder="Enter Address" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Class</Label>
                            <Col sm={10}>
                                <Input type="text" name="Class" value={this.state.Mobil} onChange={this.onChangeMobil} placeholder="Enter Mobil" />
                            </Col>
                        </FormGroup>
                    
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <Button type="submit" color="success">Submit</Button>{' '}
                            </Col>
                            <Col sm={1}>
                                <Button color="danger">Cancel</Button>{' '}
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }

}

export default Editstudent;