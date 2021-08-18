import React from 'react';
import  Addstudent  from './components/Addstudent';
import Studentlist from './components/Studentlist';
import EditStudent from './components/Editstudent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../src/custom.css'
function App() {
    return (
        <Router>
            <div className="container">
                <h2 className="header"> Student CRUD </h2>
                <nav className="navbar navbar-expand-lg navheader">
                    <div className="collapse navbar-collapse" >
                      
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/Studentlist'} className="nav-link">Student List</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/Addstudent'} className="nav-link">Add Student</Link>
                            </li>
                          
                        </ul>
                    </div>
                </nav> <br />
                <Switch>
                    <Route exact path='/Addstudent' component={Addstudent} />
                    <Route path='/edit/:id' component={EditStudent} />
                    <Route path='/Studentlist' component={Studentlist} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;




//export default class App extends Component {
//  static displayName = App.name;

//  render () {
//    return (
//      <Layout>
//        <Route exact path='/' component={Home} />
//        <Route path='/counter' component={Counter} />
//        <Route path='/fetch-data' component={FetchData} />
//      </Layout>
//    );
//  }
//}
