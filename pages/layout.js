import React, { useState } from 'react'
import { Card, Col, Form, Row } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import Navbar from './Components/Navbar';
import { Space, Table, Tag } from 'antd';
import { Button, Modal } from 'antd'; 
import Form1 from './Components/Form';
import StuL1 from './Components/StuL';


export default function demo () {
  const iconSize = "large"
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalInput, setIsModalInput] = useState(false);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={showModal}>MeMind</button>
          
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  //เพิ่มข้อมูล


  const handleCancel1 = () => {
    setIsModalInput(false);
  };
  const showInput = () => {
    setIsModalInput(true);
  };

  return (
    <div>
      <Navbar/>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className=' justify-center'>
            <div style={{margin:'20px'}}>
              <button className={"text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"} onClick={showInput} type="primary">
                Input
              </button>
            </div>
          <Table columns={columns} dataSource={data} style={{overflow:"auto"}}/>;
          </div>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Modal title="Basic Modal" open={isModalInput}  onCancel={handleCancel1}
        footer={[<button className={"text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}  type="primary" onClick={handleCancel1}>
                Input
              </button>]}>
        <Form1/>
      </Modal>
      <StuL1/>
         
        </div>  
    </div>

  )
}

