import React, { Component } from 'react';
import sliderLogo from '../assets/images/logo.png'
import { Layout,Menu, Icon } from 'antd';
const {Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderCustom extends Component {
  state = {
    collapsed: true,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
        <Sider
          className="custom-theme" 
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          width={165} 
          style={{background:'#333'
                }}
       >
          {/*sliderlogo*/}
          <img src={sliderLogo} alt="sliderLogo" width='50' id='sliderLogo'/>
          <Menu theme="dark" 
               defaultSelectedKeys={['-1']} 
               mode="inline">
               
            {/*SubMenu*/}
            <SubMenu 
              key="sub1"
              title={<span><Icon type="pie-chart" /><span>图表</span></span>}
            >
              <Menu.Item key="1"><a>图表 1</a></Menu.Item>
              <Menu.Item key="2">图表 2</Menu.Item>
              <Menu.Item key="3">图表 3</Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>样式</span></span>}
            >
              <Menu.Item key="4">样式 1</Menu.Item>
              <Menu.Item key="5">样式 2</Menu.Item>
            </SubMenu>
            {/*MenuItem*/}
            <Menu.Item key="6">
              <Icon type="search" />
              <span>数据搜索</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="desktop" />
              <span>数据导出</span>
            </Menu.Item>
            
            <Menu.Item key="8">
              <Icon type="file" />
              <span>性能预测</span>

            </Menu.Item>
          </Menu>
        </Sider>
    );
  }
}



export default SiderCustom;