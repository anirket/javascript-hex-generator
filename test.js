var arr =['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const button = document.querySelector(".button");
const body = document.querySelector("body");
const text = document.querySelector(".hex");
let i = 0;
button.addEventListener("click",hexo);

 function hexo(){
     let hex ='#'
    for(i=0;i<6;i++)
    {
      var random = Math.floor(Math.random()*arr.length);
        hex += arr[random];
    }
   body.style.backgroundColor = hex;

    text.textContent = hex;

 }
