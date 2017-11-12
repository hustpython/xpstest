import React ,{Component}from 'react'
import { Modal, Form, Select } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
const API_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: 'any-string-you-like'// The Authorization is not needed for local server
  };
class CollectionCreateForm extends Component {
  constructor(props){
    super(props)
    this.state={
      dblist:[],
      collectionlist:[]
    }
  }
  //从后端获取数据
  componentWillMount(){
    fetch('/dblist')
    .then((response) => response.json())
    .then((responseData) => {
    this.setState({dblist: responseData.dblist});
    }).catch((error) => {
      console.log('Error fetching and parsing data', error);
      });
      }
  //获取选择的数据
  handleSelectValue(value) {
    //console.log(`selected ${value}`);
    //从后台获取数据并返回
    fetch('./postdb', {
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify({
        'selecteddb':value
      })
      })
      .then((response) => response.json())
      .then((responseData) => {
      this.setState({collectionlist: responseData.collectionlist});})
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
        });
  }
//向后端发送数据

  render(){
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    let dboptions = this.state.dblist.map((dbstr) => {
      return <Option value={dbstr}>{dbstr}</Option>
      })
    let collectionoptions = this.state.collectionlist.map((collectionstr) => {
      return <Option value={collectionstr}>{collectionstr}</Option>
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
             onChange= {this.handleSelectValue.bind(this)}
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
            {collectionoptions}
            </Select>
          )}
        </FormItem>
        
      </Form>
    </Modal>
    )
  }
}

export default Form.create({})(CollectionCreateForm)