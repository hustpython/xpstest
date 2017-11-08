import React, { Component } from 'react';
import './style/App.css';
import { Layout } from 'antd';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import SubmenuArea from './components/SubmenuArea';
import PlotArea from './components/PlotArea';
import ChartCategoryForm from './components/forms/ChartCategoryForm'
const {Content} = Layout;

class App extends Component {
  
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} className="ant-layout-has-sider">
        <SiderCustom/>
        <Layout> 
          <HeaderCustom/>
          <Content style={{ margin: '0 9px' }}>
          </Content>
            <div className='contentlist'>
              <SubmenuArea
                collpased = 'false'
                submenu = {ChartCategoryForm}
              />
              <PlotArea/>
            </div>
          
        </Layout>
      </Layout>
    );
  }
}



export default App;
