import React ,{Component}from 'react'
import { Modal, Form, Select } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

class CollectionCreateForm extends Component {
  constructor(props){
    super(props)
    this.state={
      dblist:[]
    }
  }
  //从后端获取数据
  componentDidMount(){
    fetch('/dblist')
    .then((response) => response.json())
    .then((responseData) => {
    this.setState({dblist: responseData.dblist});
    }).catch((error) => {
      console.log('Error fetching and parsing data', error);
      });
      }

  render(){
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    let dboptions = this.state.dblist.map((dbstr) => {
      return <Option value={dbstr}>{dbstr}</Option>
      })
    return(
      <Modal
      visible={visible}
      title="选择数据库"
      okText="确定"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="horizontal">
        <FormItem label="数据库列表">
          {getFieldDecorator('database', {
            rules: [{ required: true, message: '请选择一个数据库!' }],
          })(
            <Select 
             placeholder="请选择一个数据库！">
            {dboptions}
            </Select>
          )}
        </FormItem>

        <FormItem label="集合列表">
          {getFieldDecorator('collection', {
            rules: [{ required: true, message: '请选择一个集合!' }],
          })(
            <Select placeholder="请选择一个集合">
            <Option value="collection1">Col1</Option>
            <Option value="collection2">Col2</Option>
            </Select>
          )}
        </FormItem>
        
      </Form>
    </Modal>
    )
  }
}

export default Form.create({})(CollectionCreateForm)