import _ from 'lodash';
import './style.css';
import Icon from './image_background.jpg';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack','你好，世界'], ' ');
    element.classList.add('hello');

    var bkg = new Image();
    bkg.src = Icon;

    element.appendChild(bkg);

    console.log(JSON.stringify(Data));

    return element;
  }
  
  document.body.appendChild(component());