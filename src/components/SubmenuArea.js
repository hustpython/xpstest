import React from 'react'
import {Card} from 'antd'
const SubmenuArea =(props) =>{
    const { collpased,submenu} = props;
    let collapsedstate = (
        <div className='submenupanel'>
        <p style={{fontFamily:'STKaiti'}}>子菜单面板</p>
        <hr/>
        <submenu/>
        <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
       </Card>
    </div>
    )
    console.log(collpased)
    collpased == 'false' ? '':collapsedstate=null
    return(
        collapsedstate
    )
  }
export default SubmenuArea