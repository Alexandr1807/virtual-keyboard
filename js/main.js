import keys from "./keys.js";

// Класс конструктор для кнопок и элементов страницы в целом
class Keyboard {
  constructor(tag) {
    this.tag = document.createElement(tag);
  }

  addClass(className) {
    this.tag.classList.add(className);
  }

  addDataSet(item){
    this.tag.dataset.key = item;
}

}

const container = new Keyboard('div'),
      night = new Keyboard('div'),
      toggleCircle = new Keyboard('div'),
      keyboardWrap = new Keyboard('div'),
      text = new Keyboard('textarea'),
      changeColor = new Keyboard('div'),
      colors = new Keyboard('div'),
      colorsInput = new Keyboard('input'),
      keyboardLights = new Keyboard('div'),
      help = new Keyboard('div');


container.addClass('container');
night.addClass('night__mode');
toggleCircle.addClass('toggle__circle');
keyboardWrap.addClass('keyboard__wrapper');
text.addClass('text');
changeColor.addClass('change__light-color');
colors.addClass('colors');
colorsInput.addClass('colors__input');
keyboardLights.addClass('keyboard__lights');
help.addClass('help');


document.body.append(container.tag);
document.querySelector('.container').append(night.tag);
document.querySelector('.container').append(changeColor.tag);
document.querySelector('.night__mode').append(toggleCircle.tag);
document.querySelector('.container').append(text.tag);
document.querySelector('.container').append(keyboardWrap.tag);
document.querySelector('.change__light-color').append(colors.tag);
document.querySelector('.colors').append(colorsInput.tag);
document.querySelector('.keyboard__wrapper').append(keyboardLights.tag);
document.querySelector('.container').append(help.tag);

document.querySelector('.colors__input').type = 'color';
document.querySelector('.text').readOnly = 'true';

let helpInner = document.querySelector('.help');
helpInner.innerHTML = `
  <h1 class="help__text">
    Для переключения языка нажмите Shift + Alt</br>
    Клавиатура создана в ОС Windows
  </h1>
`;

for (let i = 0; i < keys.length; i++) {
  let key = new Keyboard('div');
  key.addClass('keys');
  key.addDataSet(keys[i].code);
  document.body.querySelector('.keyboard__wrapper').append(key.tag);
}

let keysData = document.querySelectorAll('.keys');

keysData.forEach(item => {
  if(item.getAttribute("data-key") == "Backspace"){
    item.classList.add('backspace__key');
  } else if (item.getAttribute("data-key") == "Tab") {
    item.classList.add('tab__key');
  } else if (item.getAttribute("data-key") == "Enter") {
    item.classList.add('enter__key');
  } else if (item.getAttribute("data-key") == "slash") {
    item.classList.add('slash__key');
  } else if (item.getAttribute("data-key") == "CapsLock") {
    item.classList.add('caps-lock__key');
  } else if (item.getAttribute("data-key") == "Space") {
    item.classList.add('space__key');
  } else if (item.getAttribute("data-key") == "ShiftRight") {
    item.classList.add('shift__key');
    item.classList.add('shift__right');
  } else if (item.getAttribute("data-key") == "ShiftLeft") {
    item.classList.add('shift__key');
    item.classList.add('shift__left');
  } else if (item.getAttribute("data-key") == "MetaLeft") {
    item.classList.add('window__key');
  } else if (item.getAttribute("data-key") == "ControlLeft") {
    item.classList.add('control__key');
    item.classList.add('control__left');
  } else if (item.getAttribute("data-key") == "ControlRight") {
    item.classList.add('control__key');
    item.classList.add('control__right');
  } else if (item.getAttribute("data-key") == "AltLeft") {
    item.classList.add('alt__key');
    item.classList.add('alt__left');
  } else if (item.getAttribute("data-key") == "AltRight") {
    item.classList.add('alt__key');
    item.classList.add('alt__right');
  } else if (item.getAttribute("data-key") == 'Delete') {
    item.classList.add('del__key');
  } else if (item.getAttribute("data-key") == 'ArrowUp') {
    item.classList.add('arrow__up-key');
  } else if (item.getAttribute("data-key") == 'ArrowDown') {
    item.classList.add('arrow__down-key');
  } else if (item.getAttribute("data-key") == 'ArrowLeft') {
    item.classList.add('arrow__left-key');
  } else if (item.getAttribute("data-key") == 'ArrowRight') {
    item.classList.add('arrow__right-key');
  }
});

const notAddToTextArea= ['Enter', 'Alt', 'Shift', 'Tab', 
 'CapsLock', 'Backspace', 'ArrowUp', 
 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ctrl', 'Del',
 'Space', 'Window'
];

const obj = {
  'CapsLock': false,
  'shift': false,
  'ctrl': false,
  'lang': 'eng',
  'alt': false,
};

function innerText() {
  keysData.forEach((item, i) => {
    if(JSON.parse(localStorage.getItem('MyObj')) == undefined) {
      item.textContent = keys[i].eng;
    } else if(JSON.parse(localStorage.getItem('MyObj')).lang == 'ru') {
      item.textContent = keys[i].ru;
    } else if(JSON.parse(localStorage.getItem('MyObj')).lang == 'eng') {
      item.textContent = keys[i].eng;
    }
  });
}

innerText();


document.querySelector('.keyboard__wrapper').addEventListener('click', (e) => {
  keysData.forEach(item => {
    if (item == e.target) {
      write(item);
    }
  });
});

window.addEventListener('keydown', (e) => {
  if(e.code == 'ArrowUp') {
    document.querySelector('.arrow__up-key').classList.add('active');
  }
  if(e.code == 'ArrowDown') {
    document.querySelector('.arrow__down-key').classList.add('active');
  }
  if(e.code == 'ArrowLeft') {
    document.querySelector('.arrow__left-key').classList.add('active');
  }
  if(e.code == 'ArrowRight') {
    document.querySelector('.arrow__right-key').classList.add('active');
  }
  if(e.code == 'AltLeft') {
    obj.alt = true;

    if(obj.shift) {
      toggleLang();
    }
    document.querySelector('.alt__left').classList.add('active');
  }
  if(e.code == 'Delete') {
    document.querySelector('.del__key').classList.add('active');
  }
  if(e.code == 'Backspace') {
    if (text.tag.selectionStart) {
      text.tag.setRangeText("", text.tag.selectionStart-1, text.tag.selectionEnd, "end");
      document.querySelector('.backspace__key').classList.add('active');
    }
  }
  if(e.code == 'Enter') {
    text.tag.value += '\n';
    document.querySelector('.enter__key').classList.add('active');
  }
  if(e.code == 'Space') {
    text.tag.value += ' ';
    document.querySelector('.space__key').classList.add('active');
  }
  if(e.code == 'Tab') {
    e.preventDefault();
    text.tag.value += '    ';
    document.querySelector('.tab__key').classList.add('active');
  }
  if(e.code == 'ShiftLeft') {
    document.querySelector('.shift__left').classList.add('active');
    obj.shift = true;
    if(obj.alt) {
      toggleLang();
    }
    shiftActive();
  }
  if(e.code == 'ShiftRight') {
    document.querySelector('.shift__right').classList.add('active');
    obj.shift = true;
    shiftActive();
  }
  if(e.code == 'CapsLock') {
    if(!obj.CapsLock) {
      capsLockOn();
      obj.CapsLock = true;
      document.querySelector('.caps-lock__key').classList.toggle('active');
    } else {
      capsLockOn();
      obj.CapsLock = false;
      document.querySelector('.caps-lock__key').classList.toggle('active');
    }
  }
  if(e.code == 'MetaLeft') {
    document.querySelector('.window__key').classList.add('active');
  }

  ////////////////////////////////////////////////////////////////////////////
  for (let i = 0; i < keysData.length; i++) {
    if(e.key == keysData[i].innerText && !notAddToTextArea.includes(e.key)) {
      keysData[i].classList.add('active');
      text.tag.setRangeText(e.key, text.tag.selectionStart, text.tag.selectionEnd, "end");
    }
    if(e.code == 'ControlLeft') {
      document.querySelector('.control__left').classList.add('active');
    }
    if(e.code == 'ControlRight') {
      document.querySelector('.control__right').classList.add('active');
    }
    if(e.code == 'AltLeft') {
      document.querySelector('.alt__left').classList.add('active');
    }
    if(e.code == 'AltRight') {
      document.querySelector('.alt__right').classList.add('active');
    }
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keysData.length; i++) {
    if(e.key == keysData[i].innerText && !notAddToTextArea.includes(e.key)) {
      keysData[i].classList.remove('active');
      keysData[i].classList.add('remove');
    }
    if(e.code == 'ArrowUp') {
      document.querySelector('.arrow__up-key').classList.remove('active');
      document.querySelector('.arrow__up-key').classList.add('remove');
    }
    if(e.code == 'ArrowDown') {
      document.querySelector('.arrow__down-key').classList.remove('active');
      document.querySelector('.arrow__down-key').classList.add('remove');
    }
    if(e.code == 'ArrowLeft') {
      document.querySelector('.arrow__left-key').classList.remove('active');
      document.querySelector('.arrow__left-key').classList.add('remove');
    }
    if(e.code == 'ArrowRight') {
      document.querySelector('.arrow__right-key').classList.remove('active');
      document.querySelector('.arrow__right-key').classList.add('remove');
    }
    if(e.code == 'AltLeft') {
      obj.alt = false;
      document.querySelector('.alt__left').classList.remove('active');
      document.querySelector('.alt__left').classList.add('remove');
    }
    if(e.code == 'Backspace') {
      document.querySelector('.backspace__key').classList.remove('active');
      document.querySelector('.backspace__key').classList.add('remove');
    }
    if(e.code == 'Delete') {
      document.querySelector('.del__key').classList.remove('active');
      document.querySelector('.del__key').classList.add('remove');
    }
    if(e.code == 'Enter') {
      document.querySelector('.enter__key').classList.remove('active');
      document.querySelector('.enter__key').classList.add('remove');
    }
    if(e.code == 'Space') {
      document.querySelector('.space__key').classList.remove('active');
      document.querySelector('.space__key').classList.add('remove');
    }
    if(e.code == 'ShiftLeft') {
      document.querySelector('.shift__left').classList.remove('active');
      document.querySelector('.shift__left').classList.remove('remove');
      obj.shift = false;
      shiftDeactive();
    }
    if(e.code == 'Tab') {
      document.querySelector('.tab__key').classList.remove('active');
      document.querySelector('.tab__key').classList.add('remove');
    }
    if(e.code == 'ShiftRight') {
      document.querySelector('.shift__right').classList.remove('active');
      document.querySelector('.shift__right').classList.remove('remove');
      obj.shift = false;
      shiftDeactive();
    }
    if(e.code == 'MetaLeft') {
      document.querySelector('.window__key').classList.remove('active');
      document.querySelector('.window__key').classList.add('remove');
    }
    if(e.code == 'ControlLeft') {
      document.querySelector('.control__left').classList.remove('active');
      document.querySelector('.control__left').classList.remove('remove');
    }
    if(e.code == 'ControlRight') {
      document.querySelector('.control__right').classList.remove('active');
      document.querySelector('.control__right').classList.remove('remove');
    }
    if(e.code == 'AltLeft') {
      document.querySelector('.alt__left').classList.remove('active');
      document.querySelector('.alt__left').classList.remove('remove');
    }
    if(e.code == 'AltRight') {
      document.querySelector('.alt__right').classList.remove('active');
      document.querySelector('.alt__right').classList.remove('remove');
    }
    setTimeout(() => {
      keysData[i].classList.remove('remove');
    }, 200);
  }
});

if(localStorage.getItem('NightMode') == 1) {
  document.querySelector('.toggle__circle').classList.add('active');
  document.body.classList.add('active');
  document.querySelector('.night__mode').classList.add('active');
  document.querySelector('.keyboard__wrapper').classList.add('active');
  document.querySelector('.text').classList.add('active');
  document.querySelector('.change__light-color').classList.add('active');
  for (let i = 0; i < keysData.length; i++) {
    keysData[i].classList.toggle('keys__night');
  }
}

document.querySelector('.night__mode').addEventListener('click', () => {
  document.querySelector('.toggle__circle').classList.toggle('active');
  document.body.classList.toggle('active');
  document.querySelector('.night__mode').classList.toggle('active');
  document.querySelector('.keyboard__wrapper').classList.toggle('active');
  document.querySelector('.text').classList.toggle('active');
  document.querySelector('.change__light-color').classList.toggle('active');
  for (let i = 0; i < keysData.length; i++) {
    keysData[i].classList.toggle('keys__night');
  }
  if(document.querySelector('.night__mode').classList.contains('active')) {
    localStorage.setItem('NightMode', 1);
  } else {
    localStorage.setItem('NightMode', 0);
  }
});

if(localStorage.getItem('Color') == undefined) {
  document.querySelector('.keyboard__lights').style.background = document.querySelector('.colors__input').value;  
} else {
  for (let i = 0; i < keysData.length; i++) {
    keysData[i].style.color = localStorage.getItem('Color');
  }
  document.querySelector('.keyboard__lights').style.background = localStorage.getItem('Color');
}


document.querySelector('.colors__input').addEventListener('input', () => {
  for (let i = 0; i < keysData.length; i++) {
    keysData[i].style.color = document.querySelector('.colors__input').value;
  }
    document.querySelector('.keyboard__lights').style.background = document.querySelector('.colors__input').value;
    localStorage.setItem('Color', document.querySelector('.colors__input').value);
});




function write(el) {
  if(el.textContent == 'Backspace') {
    if(text.tag.selectionStart){
      text.tag.setRangeText("", text.tag.selectionStart-1, text.tag.selectionEnd, "end");
    }
  } else if(el.textContent == 'Space') {
    text.tag.value += ' ';
  } else if(el.textContent == 'Enter') {
    text.tag.value += '\n';
  } else if(el.textContent == 'Tab') {
    text.tag.value += '    ';
  } else if(el.textContent == "Window") {
    text.tag.value += '';
  } else if(el.textContent == "CapsLock") {
    if(!obj.CapsLock){
      capsLockOn();
      obj.CapsLock = true;
      el.classList.toggle("active");
    } else {
      capsLockOn();
      obj.CapsLock = false;
      el.classList.toggle("active");
    }
  } else if(el.textContent == "Shift") {
    text.tag.value += '';
  } else if(el.textContent == "Del") {
    if(text.tag.selectionEnd+1){
      text.tag.setRangeText("", text.tag.selectionStart, text.tag.selectionEnd+1, "end");
    }
  } else if(el.textContent == "ctrl") {
      // key ctrl
  } else if(el.textContent == "Alt") {
    text.tag.value += '';
  } else {
    text.tag.setRangeText(el.textContent, text.tag.selectionStart, text.tag.selectionEnd, "end");
  }
}

function capsLockOn() {
  keysData.forEach(item => {
    if (!obj.CapsLock) {
      if (!notAddToTextArea.includes(item.textContent)) {
        item.textContent = item.textContent.toUpperCase();
      }
    } else {
      if (!notAddToTextArea.includes(item.textContent)) {
        item.textContent = item.textContent.toLowerCase();
      }
    }
  });
}

function toggleLang(){
  if(obj.shift && obj.alt){
    languageChanger();
  }else{
    languageChanger();
  }
}

function languageChanger(){
  if(obj.lang == "ru"){
    innerText();
    obj.lang = "eng";
    localStorage.setItem('MyObj', JSON.stringify(obj));
  }else{
    innerText();
    obj.lang = "ru";
    localStorage.setItem('MyObj', JSON.stringify(obj));
  }
}

function shiftActive() {
  keysData.forEach((item, i) => {
    if (!notAddToTextArea.includes(item.textContent)) {
      if(keys[i].shift != undefined) {
        item.textContent = keys[i].shift;
      } else {
        item.textContent = item.textContent.toUpperCase();
      }
    }
  });
}

function shiftDeactive() {
  keysData.forEach((item, i) => {
    if (!notAddToTextArea.includes(item.textContent)) {
      if(obj.CapsLock) {
        item.textContent = item.textContent.toUpperCase();
      } else {
        if(obj.lang == 'ru') {
          item.textContent = keys[i].ru;
        } else {
          item.textContent = keys[i].eng; 
        }
      }
    }
  });
}