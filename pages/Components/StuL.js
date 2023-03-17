import React, { useState } from 'react'
import { Card, Col, Row } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import { Select, Space ,Table, Tag} from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';


const levelData = ['กรุณาเลือก','ปริญญาตรี2ปีหลังปกติ','ปริญญาตรี2ปีหลังกศพ','ปริญญาตรี4ปีปกติ','ปริญญาตรี4ปีกศพ'];
const areaData = {
  กรุณาเลือก:['...'],
  ปริญญาตรี2ปีหลังปกติ: ['เทคโนโลยีอุตสาหกรรม(เทคโนโลยีวิศวกรรมการผลิต)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีโยธา)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีเครื่องกล)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีโยธา)',
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีวิศวกรรมการผลิต)',
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีการจัดการอุตสาหกรรม)' ],
  ปริญญาตรี2ปีหลังกศพ: ['เทคโนโลยีอุตสาหกรรม(เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีโยธา)(เทียบโอน)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีเครื่องกล)', 
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีโยธา)',
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีวิศวกรรมการผลิต)',
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีการจัดการอุตสาหกรรม)',
  'เทคโนโลยีอุตสาหกรรม(เทคโนโลยีเครื่องกล)'],
  ปริญญาตรี4ปีปกติ: ['เทคโนโลยีโยธา(เทียบโอน)', 
  'เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์(เทียบโอน)', 
  'เทคโนโลยีเซรามิกส์', 
  'เทคโนโลยีโยธา', 
  'เทคโนโลยีวิศวกรรมการผลิต', 
  'เทคโนโลยีวิศวกรรมการผลิต(เทียบโอน)',
  'เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์ ',
  'วิศวกรรมการผลิต',
  'เทคโนโลยีวิศวกรรมเซรามิกส์',
  'วิศวกรรมการจัดการอุตสาหกรรม',
  'วิศวกรรมการจัดการอุตสาหกรรม',
  'วิศวกรรมการจัดการ',
  'วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส',
  'วิศวกรรมการออกแบบและผลิต',
  'วิศวกรรมโยธาและบริหารงานก่อสร้าง'],
  ปริญญาตรี4ปีกศพ: ['เทคโนโลยีโยธา', 
  'เทคโนโลยีวิศวกรรมการผลิต', 
  'เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์', 
  'เทคโนโลยีวิศวกรรมเซรามิกส', 
  'เทคโนโลยีโยธา(เทียบโอน)', 
  'เทคโนโลยีวิศวกรรมการผลิต(เทียบโอน)', 
  'เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์(เทียบโอน)', 
  'วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์']
};
export default function StuL1 () {
    const [areas, setAreas] = useState(areaData[levelData[0]]);
    const [secondCity, setSecondCity] = useState(areaData[levelData[0]][0]);
    const [thirdCity, setThirdCity] = useState(areaData[levelData[0]][0]);
    const [fourCity, setFourCity] = useState(areaData[levelData[0]][0]);
    const handleLevelChange = (value) => {
      setAreas(areaData[value]);
      setSecondCity(areaData[value]);

    };
    const onSecondCityChange = (value) => {
      setSecondCity(value);
    };
    const onThirdCityChange = (value) => {
        setThirdCity(value);
    };
    const onFourCityChange = (value) => {
        setFourCity(value);
    };

    return (
        <Space wrap>
        <Select
          defaultValue={levelData[0]}
          style={{
            width: 650,
          }}
          onChange={handleLevelChange}
          options={levelData.map((level) => ({
            label: level,
            value: level,
          }))}
        />
        <Select
          style={{
            width: 650,
          }}
          value={secondCity}
          onChange={onSecondCityChange}
          options={areas.map((area) => ({
            label: area,
            value: area,
          }))}
        />
        <Select
          style={{
            width: 650,
          }}
          value={thirdCity}
          onChange={onThirdCityChange}
          options={areas.map((area) => ({
            label: area,
            value: area,
          }))}
        />
        <Select
          style={{
            width: 650,
          }}
          value={fourCity}
          onChange={onFourCityChange}
          options={areas.map((area) => ({
            label: area,
            value: area,
          }))}
        />
      </Space>
            
      
    );
  };
  
  