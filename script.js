class Keyboard {
  constructor() {
    this.keys = [
      {
        ru: 'ё',
        eng: '`',
        code: 'Backquote',
      },
      {
        ru: '1',
        eng: '1',
        code: 'Digit1',
      },
      {
        ru: '2',
        eng: '2',
        code: 'Digit2',
      },
      {
        ru: '3',
        eng: '3',
        code: 'Digit3',
      },
      {
        ru: '4',
        eng: '4',
        code: 'Digit4',
      },
      {
        ru: '5',
        eng: '5',
        code: 'Digit5',
      },
      {
        ru: '6',
        eng: '6',
        code: 'Digit6',
      },
      {
        ru: '7',
        eng: '7',
        code: 'Digit7',
      },
      {
        ru: '8',
        eng: '8',
        code: 'Digit8',
      },
      {
        ru: '9',
        eng: '9',
        code: 'Digit9',
      },
      {
        ru: '0',
        eng: '0',
        code: 'Digit0',
      },
      {
        ru: '-',
        eng: '-',
        code: 'Minus',
      },
      {
        ru: '=',
        eng: '=',
        code: 'Equal',
      },
      {
        ru: 'backspace',
        eng: 'backspace',
        add: 'backspace',
        code: 'Backspace',
      },
      {
        ru: 'tab',
        eng: 'tab',
        add: 'tab',
        code: 'Tab',
      },
      {
        ru: 'Й',
        eng: 'Q',
        code: 'KeyQ',
      },
      {
        ru: 'Ц',
        eng: 'W',
        code: 'KeyW',
      },
      {
        ru: 'У',
        eng: 'E',
        code: 'KeyE',
      },
      {
        ru: 'К',
        eng: 'R',
        code: 'KeyR',
      },
      {
        ru: 'Е',
        eng: 'T',
        code: 'KeyT',
      },
      {
        ru: 'Н',
        eng: 'Y',
        code: 'KeyY',
      },
      {
        ru: 'Г',
        eng: 'U',
        code: 'KeyU',
      },
      {
        ru: 'Ш',
        eng: 'I',
        code: 'KeyI',
      },
      {
        ru: 'Щ',
        eng: 'O',
        code: 'KeyO',
      },
      {
        ru: 'З',
        eng: 'P',
        code: 'KeyP',
      },
      {
        ru: 'Х',
        eng: '[',
        code: 'BracketLeft',
      },
      {
        ru: 'Ъ',
        eng: ']',
        code: 'BracketRight',
      },
      {
        ru: '\\',
        eng: '\\',
        add: 'backslash',
        code: 'Backslash',
      },
      {
        ru: 'caps lock',
        eng: 'caps lock',
        add: 'caps',
        code: 'CapsLock',
      },
      {
        ru: 'Ф',
        eng: 'A',
        code: 'KeyA',
      },
      {
        ru: 'Ы',
        eng: 'S',
        code: 'KeyS',
      },
      {
        ru: 'В',
        eng: 'D',
        code: 'KeyD',
      },
      {
        ru: 'А',
        eng: 'F',
        code: 'KeyF',
      },
      {
        ru: 'П',
        eng: 'G',
        code: 'KeyG',
      },
      {
        ru: 'Р',
        eng: 'H',
        code: 'KeyH',
      },
      {
        ru: 'О',
        eng: 'J',
        code: 'KeyJ',
      },
      {
        ru: 'Л',
        eng: 'K',
        code: 'KeyK',
      },
      {
        ru: 'Д',
        eng: 'L',
        code: 'KeyL',
      },
      {
        ru: 'Ж',
        eng: ';',
        code: 'Semicolon',
      },
      {
        ru: 'Э',
        eng: "'",
        code: 'Quote',
      },
      {
        ru: 'enter',
        eng: 'enter',
        add: 'enter',
        code: 'Enter',
      },
      {
        ru: 'shift',
        eng: 'shift',
        add: 'shift',
        code: 'ShiftLeft',
      },
      {
        ru: '\\',
        eng: '\\',
        code: 'Backslash',
      },
      {
        ru: 'Я',
        eng: 'Z',
        code: 'KeyZ',
      },
      {
        ru: 'Ч',
        eng: 'X',
        code: 'KeyX',
      },
      {
        ru: 'С',
        eng: 'C',
        code: 'KeyC',
      },
      {
        ru: 'М',
        eng: 'V',
        code: 'KeyV',
      },
      {
        ru: 'И',
        eng: 'B',
        code: 'KeyB',
      },
      {
        ru: 'Т',
        eng: 'N',
        code: 'KeyN',
      },
      {
        ru: 'Ь',
        eng: 'M',
        code: 'KeyM',
      },
      {
        ru: 'Б',
        eng: ',',
        code: 'Comma',
      },
      {
        ru: 'Ю',
        eng: '.',
        code: 'Period',
      },
      {
        ru: '/',
        eng: '/',
        code: 'Slash',
      },
      {
        ru: '▲',
        eng: '▲',
        add: 'top',
        code: 'ArrowUp',
      },
      {
        ru: 'shift',
        eng: 'shift',
        add: 'shift',
        code: 'ShiftRight',
      },
      {
        ru: 'ctrl',
        eng: 'ctrl',
        add: 'ctrl',
        code: 'ControlLeft',
      },
      {
        ru: 'win',
        eng: 'win',
        add: 'win',
        code: 'MetaRight',
      },

      {
        ru: 'alt',
        eng: 'alt',
        add: 'alt',
        code: 'AltLeft',
      },
      {
        ru: '',
        eng: '',
        add: 'space',
        code: 'Space',
      },
      {
        ru: 'alt',
        eng: 'alt',
        add: 'alt',
        code: 'AltRight',
      },
      {
        ru: 'ctrl',
        eng: 'ctrl',
        add: 'ctrl',
        code: 'ControlRight',
      },
      {
        ru: '◄',
        eng: '◄',
        add: 'left',
        code: 'ArrowLeft',
      },
      {
        ru: '▼',
        eng: '▼',
        add: 'down',
        code: 'ArrowDown',
      },
      {
        ru: '▶',
        eng: '▶',
        add: 'right',
        code: 'ArrowRight',
      },
    ];
    this.isRuLang = JSON.parse(localStorage.getItem('isRuLang')) || false;
  }

  drawKeyboard() {
    this.section = document.createElement('div');
    this.section.classList.add('section-keyboard');

    this.textar = document.createElement('textarea');
    this.textar.classList.add('window');
    this.textar.setAttribute('readonly', '');

    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');

    document.body.appendChild(this.section);
    this.section.appendChild(this.textar);
    this.section.appendChild(this.keyboard);
    this.addStyles();
    this.drawKeys();
    this.addListeners();
  }

  addStyles() {
    this.styles = document.createElement('link');
    this.styles.setAttribute('rel', 'stylesheet');
    this.styles.setAttribute('href', 'style.css');
    document.head.appendChild(this.styles);
  }

  drawKeys() {
    this.keys.forEach(item => {
      const keyElement = document.createElement('div');
      keyElement.classList.add('key');
      keyElement.dataset.code = item.code;

      keyElement.innerText = this.isRuLang ? item.ru : item.eng;

      if (item.add) {
        keyElement.classList.add(item.add);
      }
      this.keyboard.append(keyElement);
    });
  }

  addListeners() {
    this.keyboard.addEventListener('mousedown', event => this.switchDown(event));
    document.addEventListener('keydown', event => this.switchDown(event));
    document.addEventListener('mouseup', event => this.switchUp(event));
    document.addEventListener('keyup', event => this.switchUp(event));
  }

  switchDown(event) {
    if (event.target.classList.contains('key') || event.code) {
      const code = event.code ? event.code : event.target.dataset.code;
      this.selector = event.code || event.target.dataset.code;
      this.key = document.querySelector(`[data-code=${this.selector}]`);
      if (event instanceof KeyboardEvent) this.key.classList.add('key-active');
      if (event instanceof MouseEvent) this.key.classList.remove('key-active');

      switch (code) {
        case 'Space':
          this.textar.value += ' ';
          break;

        case 'Tab':
          event.preventDefault();
          this.textar.value += '\t';
          break;

        case 'AltRight':
        case 'AltLeft':
          break;

        case 'ShiftLeft':
          this.isShiftLeftPressed = true;
          if (this.isCtrlLeftPressed) this.langHandler();
          break;

        case 'ShiftRight':
          break;

        case 'ControlRight':
          break;

        case 'ControlLeft':
          this.isCtrlLeftPressed = true;
          if (this.isShiftLeftPressed) this.langHandler();
          break;

        case 'CapsLock':
          break;

        case 'Enter':
          this.textar.value += '\n';
          break;

        case 'Backspace':
          this.textar.value = this.textar.value.substr(0, this.textar.value.length - 1);
          break;

        case 'MetaRight':
          break;

        default:
          if (this.key) this.textar.value += this.key.innerText.toLowerCase();
      }
    }
  }

  switchUp(event) {
    if (event.target.classList.contains('key') || event.code) {
      this.selector = event.code || event.target.dataset.code;
      this.key = document.querySelector(`[data-code=${this.selector}]`);
      if (this.key) this.key.classList.remove('key-active');
      if (event.target.classList.contains('key') || event.code) {
        const code = event.code ? event.code : event.target.dataset.code;
        switch (code) {
          case 'ShiftLeft':
            this.isShiftLeftPressed = false;
            break;
          case 'ControlLeft':
            this.isCtrlLeftPressed = false;
            break;
          default:
            break;
        }
      }
    }
  }

  langHandler() {
    this.isRuLang = !this.isRuLang;
    this.keyboard.innerHTML = '';
    this.drawKeys();
    const ctrl = document.querySelector('.ctrl');
    const shift = document.querySelector('.shift');
    ctrl.classList.add('key-active');
    shift.classList.add('key-active');
    localStorage.setItem('isRuLang', this.isRuLang);
  }
}

const keyb = new Keyboard();
keyb.drawKeyboard();
