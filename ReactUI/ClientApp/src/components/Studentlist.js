import React, { Component ,  useState } from 'react';
//import React, { useState } from 'react';
import axios from 'axios';
import Contact from './Table';



export default class Studentlist extends React.Component  {
  
    constructor(props) {
        super(props);
      //  this.state = { business: [] };
        this.state = {
            contacts: []
        };
    }
    componentDidMount() {
        //  debugger;
        axios.get('http://localhost:51829/api/Customer/')
            .then(response => {
                debugger;
               // this.setState({ business: response.data });
                const contacts = response.data.slice();   // 4
                this.setState({ contacts });
                //debugger;

            })
            .catch(function (error) {
                console.log(error);
            })
    }


 

    handledelete = (customerid) => {
        debugger;
        axios.delete('http://localhost:51829/api/Customer/' + customerid)
            .then()
            .catch(error => {

                console.error('There was an error!', error);
            });
          setTimeout(() => {
            this.props.history.push('/Studentlist');
        }, 6000);
        // this.props.history.push('/Studentlist');
    }
    render() {
        return (
            <div>
               {/* <h3 className="p-3 text-center"> Display a list of Customers</h3>*/}
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Mobil</th>
                            <th colSpan="4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                {this.state.contacts.map(contact =>
                    <Contact data={contact} key={contact.customerId} onDelete={this.handledelete} />  // 5
                        )}
                        </tbody>
                </table>
            </div>
        );
    }
}


