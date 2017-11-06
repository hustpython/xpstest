import React, { Component } from 'react';
import { Popover,Menu,Layout,Icon,Button } from 'antd';
import DataConForm from './forms/DatabaseConFrom'
//import screenfull from 'screenfull';
//import SiderCustom from './SiderCustom';
//import { connect } from 'react-redux';
const { Header } = Layout;
//const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;
const datacontitle =<div style={{background:'#83dada'}}><span style={{color:'red',background:'#83dada'}}>数据库列表</span> </div>
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
               <Popover title={datacontitle} content={<DataConForm/>} trigger='click'>
                <Button type="primary">链接数据库</Button>
               </Popover>
            </Menu.Item> 
        </Menu>  
    </Header> 
      )
}
}

export default HeaderCustom;
