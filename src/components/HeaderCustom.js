import React, { Component } from 'react';
import { Menu,Layout,Icon,Button } from 'antd';
//import screenfull from 'screenfull';
//import SiderCustom from './SiderCustom';
//import { connect } from 'react-redux';
const { Header } = Layout;
//const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends Component {
    
    render() {
      let headerTitleStyle ={display:'inline',fontSize:30,position:"relative",color:'white',left:40}
      return(
      <Header style={{ background: '#333', padding: 0, height: 65 ,boxShadow: '5px 5px 3px #888888'}} className="custom-theme" >
        <h1 style={headerTitleStyle}>
        MIDISBOARD
        </h1>
        <Menu mode="horizontal"
                style={{ background: '#333',lineHeight: '64px', float: 'right' ,display:'inline_block'}}
            >
            <Menu.Item style ={{position:'relative',right:150}} key="full">
                <Icon type="arrows-alt"/>
            </Menu.Item> 

            <Menu.Item style ={{position:'relative',right:50}} key="buttonDatabase">
                <Button type="primary" style={{disabled:"disabled"}}ghost>链接数据库</Button>
            </Menu.Item> 
        </Menu>  
    </Header> 
      )
}
}

export default HeaderCustom;
