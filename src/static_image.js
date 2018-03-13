import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import staticJpg from '../assets/luna.jpg';

const staticImage = document.createElement('img');
staticImage.src = staticJpg;
staticImage.className = 'luna';

//const imageWrapper = document.getElementsByClassName('luna-wrapper');
//imageWrapper.innerHTML = 'staticImage';
//document.body.appendChild(staticImage);
document.getElementsByClassName('luna-wrapper')[0].appendChild(staticImage);

//ReactDOM.render(staticImage, document.getElementsByClassName('luna-wrapper'));
