import scss from '../styles/index.scss';

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  // System.import splits bundle.js files for efficiency
  System.import('./image_viewer').then(module => {});
};

document.body.appendChild(button);
