import { Button } from 'antd';
import './App.less';
import { request } from './api/intercept.js';
import React, {Component} from 'react'

// console.log(request)
let data = {
  pageSize: 8,
  pageNow: 1,
  reportPersonId: '7a330a258ccc47858ae7f6f39d6030af',
  reportPersonDeptId: 'dc2eb4a4397547f084d1ab6c25ffe687',
  listType: 1,
  eventState: '1,6,10,11,12',
  deptLevel: 7,
  timestamp: '1610622147000',
  nonce: 'BD36sjBKHEcJpAtXsJ2HWJGRy3RzPxds',
  dId: 'dc2eb4a4397547f084d1ab6c25ffe687',
  roleIds: '9ef64a3545fe4afe96d6fd37020a10ed'
}
request('/UnifyEvent/list', 'get', data)
.then(res => {
  console.log(res)
})

function App() {
  return (
    <div >
     <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
