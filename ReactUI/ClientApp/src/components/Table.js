import React, { Component, useState } from 'react';
import { useHistory, Link  } from 'react-router-dom';

import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
//import { Link } from 'react-router-dom';

export default class Contact extends Component {
    constructor(props) {
        debugger;
        super(props);
        this.state = { ...props.data };  // 6
       
    }

    DeleteStudent = () => {
        debugger;
   
    }
    render() {    
        return (
        
                 
                      <tr>
                            <td>{this.state.customerName}</td>
                            <td>{this.state.address}</td>
                            <td>{this.state.mobil}</td>
             
                    <td>
                        <Link to={"/edit/" + this.state.customerId} className="btn btn-success">Edit</Link>
                    </td>
                <td>
                    <button type="button" onClick={() => this.props.onDelete(this.state.customerId)} className="btn btn-danger" > Delete</button>
                    </td>
                      </tr>
                    
       
        
        )
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              