import React from 'react'
import { Modal, Form, Select } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    return (
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
              <Select placeholder="请选择一个数据库！">
              <Option value="db1">Db1</Option>
              <Option value="db2">Db2</Option>
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
    );
  }
);
export default CollectionCreateForm