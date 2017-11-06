import React ,{Component}from 'react'
import {Button,Select} from 'antd'

const Option = Select.Option

class DataConForm extends Component {
    render(){
        return(
            <div>
            <ul class = 'select-group'>
                <li class = "select-group-item">
                    <label>选择数据库
                        <Select defaultValue='' style={{width:200}}>
                           <Option value='database1'>database1</Option>
                           <Option value='database2'>database2</Option>
                           <Option value='database3'>database3</Option>
    
                        </Select>
                    </label>
                      
                </li>
                <li class = "select-group-item">
                    <label>选择集合
                        <Select defaultValue='' style={{width:200}}>
                           <Option value='collection1'>collection1</Option>
                           <Option value='collection2'>collection2</Option>
                           <Option value='collection3'>collection3</Option>
    
                        </Select>
                    </label>
                      
                </li>
                <li class = "select-group-item">
                    <label>
                        <Button type="primary" htmlType="submit">提交</Button>
                    </label>
                      
                </li>
            </ul>
        </div>
        )
    }
}

export default DataConForm;