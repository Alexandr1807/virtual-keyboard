const keys = [
  {
      "eng": "`",
      "ru": "ё",
      "shift": "~",
      "keyCode": 192,
      "which": 192,
      "code": "Backquote",
      "description": "Backtick / grave accent / ñ / æ / ö"
  },
  {
      "eng": "1",
      "ru": "1",
      "shift": "!",
      "keyCode": 49,
      "which": 49,
      "code": "Digit1",
      "description": "1 Key",
      "unicode": "①"
  },
  {
      "eng": "2",
      "ru": "2",
      "shift": "@",
      "keyCode": 50,
      "which": 50,
      "code": "Digit2",
      
      "description": "2 Key",
      "unicode": "②"
  },
  {
      "eng": "3",
      "ru": "3",
      "shift": "#",
      "keyCode": 51,
      "which": 51,
      "code": "Digit3",
      
      "description": "3 Key",
      "unicode": "③"
  },
  {
      "eng": "4",
      "ru": "4",
      "shift": "$",
      "keyCode": 52,
      "which": 52,
      "code": "Digit4",
      
      "description": "4 Key",
      "unicode": "④"
  },
  {
      "eng": "5",
      "ru": "5",
      "shift": "%",
      "keyCode": 53,
      "which": 53,
      "code": "Digit5",
      
      "description": "5 Key",
      "unicode": "⑤"
  },
  {
      "eng": "6",
      "ru": "6",
      "shift": "^",
      "keyCode": 54,
      "which": 54,
      "code": "Digit6",
      
      "description": "6 Key",
      "unicode": "⑥"
  },
  {
      "eng": "7",
      "ru": "7",
      "shift": "&",
      "keyCode": 55,
      "which": 55,
      "code": "Digit7",
      
      "description": "7 Key",
      "unicode": "⑦"
  },
  {
      "eng": "8",
      "ru": "8",
      "shift": "*",
      "keyCode": 56,
      "which": 56,
      "code": "Digit8",
      
      "description": "8 Key",
      "unicode": "⑧"
  },
  {
      "eng": "9",
      "ru": "9",
      "shift": "(",
      "keyCode": 57,
      "which": 57,
      "code": "Digit9",
      
      "description": "9 Key",
      "unicode": "⑨"
  },
  {
      "eng": "0",
      "ru": "0",
      "shift": ")",
      "keyCode": 48,
      "which": 48,
      "code": "Digit0",
      
      "description": "0",
      "unicode": "⓪"
  },
  {
      "eng": "-",
      "ru": "-",
      "shift": "_",
      "keyCode": 109,
      "which": 109,
      "code": "NumpadSubtract",
      "location": 3,
      "description": "subtract"
  },
  {
      "eng": "=",
      "ru": "=",
      "shift": "+",
      "keyCode": 61,
      "which": 61,
      "code": "Equal",
      
      "description": "equals (firefox)"
  },
  {
      "eng": "Backspace",
      "ru": "Backspace",
      "keyCode": 8,
      "which": 8,
      "code": "Backspace",
      
      "description": "backspace / delete",
      "unicode": "⌫"
  },
  {
      "eng": "Tab",
      "ru": "Tab",
      "keyCode": 9,
      "which": 9,
      "code": "Tab",
      
      "description": "tab",
      "unicode": "↹"
  },
  {
      "eng": "q",
      "ru": "й",
      "keyCode": 81,
      "which": 81,
      "code": "KeyQ",
      
      "description": "q"
  },
  {
      "eng": "w",
      "ru": "ц",
      "keyCode": 87,
      "which": 87,
      "code": "KeyW",
      
      "description": "w"
  },
  {
      "eng": "e",
      "ru": "у",
      "keyCode": 69,
      "which": 69,
      "code": "KeyE",
      
      "description": "e"
  },
  {
      "eng": "r",
      "ru": "к",
      "keyCode": 82,
      "which": 82,
      "code": "KeyR",
      
      "description": "r"
  },
  {
      "eng": "t",
      "ru": "е",
      "keyCode": 84,
      "which": 84,
      "code": "KeyT",
      
      "description": "t"
  },
  {
      "eng": "y",
      "ru": "н",
      "keyCode": 89,
      "which": 89,
      "code": "KeyY",
      
      "description": "y"
  },
  {
      "eng": "u",
      "ru": "г",
      "keyCode": 85,
      "which": 85,
      "code": "KeyU",
      
      "description": "u"
  },
  {
      "eng": "i",
      "ru": "ш",
      "keyCode": 73,
      "which": 73,
      "code": "KeyI",
      
      "description": "i"
  },
  {
      "eng": "o",
      "ru": "щ",
      "keyCode": 79,
      "which": 79,
      "code": "KeyO",
      
      "description": "o"
  },
  {
      "eng": "p",
      "ru": "з",
      "keyCode": 80,
      "which": 80,
      "code": "KeyP",
      
      "description": "p"
  },
  {
      "eng": "[",
      "ru": "х",
      "shift": "{",
      "keyCode": 160,
      "which": 160,
      "code": "BracketLeft",
      
      "altKey": false,
      "ctrlKey": false,
      "metaKey": false,
      "shiftKey": false,
      "description": "^"
  },
  {
      "eng": "]",
      "ru": "ъ",
      "shift": "}",
      "keyCode": 221,
      "which": 221,
      "code": "BracketRight",
      
      "description": "close bracket / å"
  },
  {
      "eng": "\\",
      "ru": "\\",
      "shift": "|",
      "keyCode": 220,
      "which": 220,
      "code": "Backslash",
      
      "description": "back slash"
  },
  {
      "eng": "Del",
      "ru": "Del",
      "keyCode": 46,
      "which": 46,
      // "code": "NumpadDecimal",
      "code": "Delete",
      "altKey": false,
      "ctrlKey": false,
      "metaKey": false,
      "shiftKey": false,
      "description": "delete",
      "unicode": "⌦"
  },
  {
      "eng": "CapsLock",
      "ru": "CapsLock",
      "keyCode": 20,
      "which": 20,
      "code": "CapsLock",
      
      "description": "caps lock",
      "unicode": "⇪"
  },
  {
      "eng": "a",
      "ru": "ф",
      "keyCode": 65,
      "which": 65,
      "code": "KeyA",
      
      "description": "a"
  },
  {
      "eng": "s",
      "ru": "ы",
      "keyCode": 83,
      "which": 83,
      "code": "KeyS",
      
      "description": "s"
  },
  {
      "eng": "d",
      "ru": "в",
      "keyCode": 68,
      "which": 68,
      "code": "KeyD",
      
      "description": "d"
  },
  {
      "eng": "f",
      "ru": "а",
      "keyCode": 70,
      "which": 70,
      "code": "KeyF",
      
      "description": "f"
  },
  {
      "eng": "g",
      "ru": "п",
      "keyCode": 71,
      "which": 71,
      "code": "KeyG",
      
      "description": "g"
  },
  {
      "eng": "h",
      "ru": "р",
      "keyCode": 72,
      "which": 72,
      "code": "KeyH",
      
      "description": "h"
  },
  {
      "eng": "j",
      "ru": "о",
      "keyCode": 74,
      "which": 74,
      "code": "KeyJ",
      
      "description": "j"
  },
  {
      "eng": "k",
      "ru": "л",
      "keyCode": 75,
      "which": 75,
      "code": "KeyK",
      
      "altKey": true,
      "ctrlKey": false,
      "metaKey": true,
      "shiftKey": false,
      "description": "k"
  },
  {
      "eng": "l",
      "ru": "д",
      "keyCode": 76,
      "which": 76,
      "code": "KeyL",
      
      "altKey": true,
      "ctrlKey": false,
      "metaKey": true,
      "shiftKey": false,
      "description": "l"
  },
  {
      "eng": ";",
      "ru": "ж",
      "shift": ":",
      "keyCode": 59,
      "which": 59,
      "code": "Semicolon",
      
      "description": "semicolon (firefox), equals"
  },
  {
      "eng": "'",
      "ru": "э",
      "shift": "\"",
      "keyCode": 222,
      "which": 222,
      "code": "Quote",
      
      "description": "single quote / ø / ä"
  },
  {
      "eng": "Enter",
      "ru": "Enter",
      "keyCode": 13,
      "which": 13,
      "code": "Enter",
      
      "description": "Enter / Return",
      "unicode": "↵"
  },
  {
      "eng": "Shift",
      "ru": "Shift",
      "keyCode": 16,
      "which": 16,
      "code": "ShiftLeft",
      
      "description": "shift",
      "unicode": "⇧"
  },
  {
      "eng": "z",
      "ru": "я",
      "keyCode": 90,
      "which": 90,
      "code": "KeyZ",
      
      "description": "z"
  },
  {
      "eng": "x",
      "ru": "ч",
      "keyCode": 88,
      "which": 88,
      "code": "KeyX",
      
      "description": "x"
  },
  {
      "eng": "c",
      "ru": "с",
      "keyCode": 67,
      "which": 67,
      "code": "KeyC",
      
      "description": "c"
  },
  {
      "eng": "v",
      "ru": "м",
      "keyCode": 86,
      "which": 86,
      "code": "KeyV",
      
      "description": "v"
  },
  {
      "eng": "b",
      "ru": "и",
      "keyCode": 66,
      "which": 66,
      "code": "KeyB",
      
      "description": "b"
  },
  {
      "eng": "n",
      "ru": "т",
      "keyCode": 78,
      "which": 78,
      "code": "KeyN",
      
      "description": "n"
  },
  {
      "eng": "m",
      "ru": "ь",
      "keyCode": 77,
      "which": 77,
      "code": "KeyM",
      
      "description": "m"
  },
  {
      "eng": ",",
      "ru": "б",
      "shift": "<",
      "keyCode": 108,
      "which": 108,
      "code": "NumpadDecimal",
      "location": 3,
      "altKey": false,
      "ctrlKey": false,
      "metaKey": false,
      "shiftKey": false,
      "description": "numpad period (firefox)"
  },
  {
      "eng": ".",
      "ru": "ю",
      "shift": ">",
      "keyCode": 190,
      "which": 190,
      "code": "Period",
      
      "description": "period"
  },
  {
      "eng": "/",
      "ru": ".",
      "shift": "?",
      "keyCode": 191,
      "which": 191,
      "code": "Slash",
      
      "description": "forward slash / ç"
  },
  {
      "eng": "▲",
      "ru": "▲",
      "keyCode": 38,
      "which": 38,
      "code": "ArrowUp",
      
      "altKey": false,
      "ctrlKey": false,
      "metaKey": false,
      "shiftKey": false,
      "repeat": false,
      "description": "ArrowUp",
  },
  {
      "eng": "Shift",
      "ru": "Shift",
      "keyCode": 16,
      "which": 16,
      "code": "ShiftRight",
      
      "description": "Rshift",
      "unicode": "⇧"
  },
  {
      "eng": "ctrl",
      "ru": "ctrl",
      "keyCode": 17,
      "which": 17,
      "code": "ControlLeft",
      
      "altKey": true,
      "ctrlKey": false,
      "metaKey": true,
      "shiftKey": true,
      "description": "Control",
      "unicode": "^"
  },
  {
      "eng": "Window",
      "ru": "Window",
      "keyCode": 91,
      "which": 91,
      "code": "MetaLeft",
      
      "altKey": false,
      "ctrlKey": false,
      "metaKey": true,
      "shiftKey": false,
      "description": "Windows",
      "unicode": "⌘ ⊞"
  },
  {
      "eng": "Alt",
      "ru": "Alt",
      "keyCode": 18,
      "which": 18,
      "code": "AltLeft",
      
      "altKey": true,
      "ctrlKey": false,
      "metaKey": true,
      "shiftKey": false,
      "description": "Alt",
      "unicode": "⎇ / ⌥"
  },
  {
      "eng": "Space",
      "ru": "Space",
      "keyCode": 32,
      "which": 32,
      "code": "Space",
      
      "altKey": false,
      "ctrlKey": false,
      "metaKey": false,
      "shiftKey": false,
      "repeat": false,
      "description": "Space",
  },
  {
      "eng": "Alt",
      "ru": "Alt",
      "keyCode": 18,
      "which": 18,
      "code": "AltRight",
      
      "altKey": true,
      "ctrlKey": false,
      "metaKey": true,
      "shiftKey": false,
      "description": "Ralt",
      "unicode": "⎇ / ⌥"
  },
  {
      "eng": "◄",
      "ru": "◄",
      "keyCode": 37,
      "which": 37,
      "code": "ArrowLeft",
      
      "altKey": false,
      "ctrlKey": false,
      "metaKey": false,
      "shiftKey": false,
      "repeat": false,
      "description": "ArrowLeft",
  },
  {
      "eng": "▼",
      "ru": "▼",
      "keyCode": 40,
      "which": 40,
      "code": "ArrowDown",
      
      "altKey": false,
      "ctrlKey": false,
      "metaKey": false,
      "shiftKey": false,
      "repeat": false,
      "description": "ArrowDown",
  },
  {
      "eng": "►",
      "ru": "►",
      "keyCode": 39,
      "which": 39,
      "code": "ArrowRight",
      
      "altKey": false,
      "ctrlKey": false,
      "metaKey": false,
      "shiftKey": false,
      "repeat": false,
      "description": "ArrowRight",
  },
  {
      "eng": "ctrl",
      "ru": "ctrl",
      "keyCode": 17,
      "which": 17,
      "code": "ControlRight",
      
      "altKey": true,
      "ctrlKey": false,
      "metaKey": true,
      "shiftKey": true,
      "description": "Rctrl",
      "unicode": "^"
  }
];

export default keys;