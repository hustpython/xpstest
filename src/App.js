import React, { Component } from 'react';
import './App.css';
import { Layout, Breadcrumb } from 'antd';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
const {Content,Footer} = Layout;

class App extends Component {
  
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} className="ant-layout-has-sider">
        <SiderCustom/>
        <Layout> 
          <HeaderCustom/>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>图表</Breadcrumb.Item>
              <Breadcrumb.Item>S11</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              来自数据库的数据图表.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}



export default App;
