let aaa = require('./a.js');
import bbb from './b.js';
aaa();
console.log(bbb);

let a = b => c => d =>b+c+d;
alert(a(1)(2)(3))

let obj = {school:'zfpx'};
let obj1 = {age:8};
let newObj = {...obj,...obj1};
console.log(newObj);

import ccc from './c.css';
import './style.less';