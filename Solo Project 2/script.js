// let getRandomPasswordEl = document.getElementById("getRandomPassword")
let result1El = document.getElementById("result1");
let result2El = document.getElementById("result2");
let result3El = document.getElementById("result3");
let result4El = document.getElementById("result4");
let password = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function getRandomPassword() {
  result1El.innerText = "";
  result2El.innerText = "";
  result3El.innerText = "";
  result4El.innerText = "";

  for (i = 0; i < 12; i++) {
    var randomLetter = password[Math.floor(password.length * Math.random())];
    result1El.innerText += randomLetter;

    // result1El.textContent = preresult1El;
  }
  for (i = 0; i < 12; i++) {
    var randomLetter = password[Math.floor(password.length * Math.random())];
    result2El.textContent += randomLetter;
  }
  for (i = 0; i < 12; i++) {
    var randomLetter = password[Math.floor(password.length * Math.random())];
    result3El.textContent += randomLetter;
  }
  for (i = 0; i < 12; i++) {
    var randomLetter = password[Math.floor(password.length * Math.random())];
    result4El.textContent += randomLetter;
  }
}
