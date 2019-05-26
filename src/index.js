
import Test from './component/Test/Test';

import test from './olcs/test.js'; 
import initMap from './olcs/initMap1.js';



//预览时使用
// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(
//     <Test />
//     ,
//     document.getElementById('root')
// );

var olcs={};
olcs.test=test;
olcs.initMap=initMap;

//打包时使用
export  default olcs
