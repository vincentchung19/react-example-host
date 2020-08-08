import React,{Component} from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import './App.css';


//SPA Page with Navigation

function Home(){
    return <h2>Halaman home</h2>
}

function ListView(){
    return (
        <div>
            <Link to="/users/vincent">Vincent</Link><br/>
            <Link to="/users/chung">Chung</Link><br/>
        </div>
    )
}

function NoMatch(){
    return <h2>404, halaman tidak dapat ditemukan</h2>
}

function DetailView({match}){
    return <h2>Ini halaman {match.params.name} </h2>
}

class Dom extends Component{
    render(){
        return(
          <BrowserRouter>
            <div>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">User</Link></li>
                </nav>
                {/* Pakai Switch biar keganti terus, NoMatch tidak tampil terus"an */}
                <Switch> 
                    <Route path='/' exact component={Home} />
                    <Route path='/users' exact component={ListView} />
                    <Route path='/users/:name' exact component={DetailView} />
                    <Route component={NoMatch} />
                </Switch>
            </div>

            <table>
                <h2>Table</h2>
                <tr>
                    <Column />
                </tr>
            </table>
          </BrowserRouter>   
        );
    }
}

class Column extends React.Component{
    render(){
        return(
            //<React.Fragment key={item.id}> kalau mau pake key secara explisit
            <React.Fragment> 
                <td>Satu</td>
                <td>Dua</td>
            </React.Fragment>
        );
    }
}

export default Dom;
