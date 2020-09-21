const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let codeIndex = 0;

function init() {
  // your code here
  document.addEventListener('keydown', onKeyDownHandler)

  function onKeyDownHandler(e){
    var key = e.key
      if(key === codes[codeIndex]){
        codeIndex = codeIndex + 1;
        if (codeIndex === codes.length){
        alert ('Hooray!');
        codeIndex = 0;
        }
      } else {
        codeIndex = 0;
      }
  }

}

init()
