import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../NavigationItems/Toolbar/Toolbar';
import SideDrawer from'../NavigationItems/SideDrawer/SideDrawer';
class layout extends Component{

    state ={
        showSideDrawer:true
    }
    sideDrawerClosedHandler =()=>{
        this.setState({showSideDrawer:false});
    }

    render(){
        return (
            <Aux>
                <Toolbar />
                <SideDrawer 
                    open ={this.state.showSideDrawer}
                    closed = {this.sideDrawerClosedHandler}/>
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
    );
    }
    
};

export default layout;