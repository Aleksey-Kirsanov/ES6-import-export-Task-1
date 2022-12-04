import { getRandomColor } from './utils';

export default function initApp() {

    const buttonHTML = document.createElement('button');
    buttonHTML.classList = 'button';
    buttonHTML.textContent = 'Изменить цвет страницы';
    document.body.append(buttonHTML);
    buttonHTML.addEventListener('click', function() {
        // console.log('Hello world');
        document.body.style.background = getRandomColor();
    })

  }