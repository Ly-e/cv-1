let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string =
    `/*你好，我是一名前端新人
  *接下来我来展示一下我的前端功底
  *首先准备一个 div*/
#div1{
    border:1px solid black;
    width:200px;
    height:200px;
}
/* 接下来将这个 div 变成一个太极图 
  * 首先画一个圆
*/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
} 
/* 太极是由阴阳两个部分组成的，太极图中，一半白一半黑，白者像阳，黑者像阴。*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 白中又有一个黑点，黑中又有一个白点，表示阳中有阴，阴中有阳。分开的两半，酷似两条鱼，所以俗称阴阳鱼。
*/
#div1::before{
     width:100px;
     height:100px;
     left:50%;
     top:0;
     transform:translateX(-50%);
     background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 26%);
     border-radius:50%;

}
#div1::after{
     width:100px;
     height:100px;
     left:50%;
     bottom:0;
     transform:translateX(-50%);
     background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 26%);
     border-radius:50%;
}
`;
let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        n = n + 1;
        if (n < string.length) {
            step();
        }

    }, 50);
};
step();



