import React, {Component} from 'react'
import {Switch,Route} from 'react-router'

import Posts from './Posts/Posts'
import NotFound from './NotFound/NotFound'
import Navbar from './Navbar/Navbar'
import PostPage from './PostPage/PostPage'
import Login from './Login/Login'
import Register from './Register/Register'
import AddPost from './AddPost/AddPost'
import EditPost from './EditPost/EditPost'
import Logout from './Logout/Logout'

export class App extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Posts}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/logout" component={Logout}/>
                        <Route exact path="/post/:id" component={PostPage}/>
                        <Route exact path="/edit/:id" component={EditPost}/>
                        <Route exact path="/add" component={AddPost}/>
                        <Route path="/" component={NotFound}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App