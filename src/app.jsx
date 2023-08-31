import * as React from 'react'
import { createRoot } from 'react-dom/client';
import logo from './img/logo.svg'
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

// 清除现有的 HTML 内容
document.body.innerHTML = '<div id="app"></div>';

let doc = new DOMParser().parseFromString(logo, 'application/xml')
let node = document.importNode(doc.documentElement, true)
// 渲染你的 React 组件
const root = createRoot(document.getElementById('app'));
console.log(doc)
root.render(<h1>Hello, world1<img
  className="avatar"
  src={ logo}
  alt={'Photo of ' + user.name}
  style={{
    width: user.imageSize,
    height: user.imageSize
  }}
/></h1>);

