import React, { Component } from 'react';
import { Menu,Layout,Icon} from 'antd';
import  DatabaseCollForm from './forms/DatabaseCollForm'
//import screenfull from 'screenfull';
//import SiderCustom from './SiderCustom';
//import { connect } from 'react-redux';
const { Header } = Layout;
//const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;
//const datacontitle =<div style={{background:'#83dada'}}><span style={{color:'red',background:'#83dada'}}>数据库列表</span> </div>
class HeaderCustom extends Component {
    
    state = {
        visible: false,
      };
      showModal = () => {
        this.setState({ visible: true });
      }
      handleCancel = () => {
        this.setState({ visible: false });
      }
      handleCreate = () => {
        const form = this.form;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
    
          console.log('Received values of form: ', values);
          form.resetFields();
          this.setState({ visible: false });
        });
      }
      saveFormRef = (form) => {
        this.form = form;
    }

    render() {
      let headerTitleStyle ={display:'inline',fontSize:30,position:"relative",color:'white',left:40}
      return(
      <Header style={{ background: '#333', padding: 0, height: 65 }} className="custom-theme" >
        <h1 style={headerTitleStyle}>
        MIDISBOARD
        </h1>
        <Menu mode="horizontal"
                style={{background: '#333',color:'white',lineHeight: '64px', float: 'right',position:'relative',right:100}}
            >
            <Menu.Item  key="full">
                <Icon type="arrows-alt" style={{ fontSize: 22}}/>         
            </Menu.Item> 
            <Menu.Item  key="space">
               
            </Menu.Item> 

            <Menu.Item  key="showdatabase" >
                <Icon type="database" style={{ fontSize:22}} onClick={this.showModal}/>
                <DatabaseCollForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </Menu.Item> 
        </Menu>  
    
    </Header> 
      )
}
}

export default HeaderCustom;