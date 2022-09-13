var screen = document.getElementById("screen");
var btn = document.querySelectorAll(".btn");
var scien = document.querySelectorAll(".scien");
var ScreenVal = "";


btn.forEach(items => {
   items.addEventListener("click" , (e) => {
       var btnText = e.target.innerHTML;
       if(btnText === "CE"){
         ScreenVal = "";
         screen.value = ScreenVal;
       }
       else if(btnText === "AC") {
         var str = screen.value;
         str = str.substring(1)
         screen.value = str
       }else if(btnText === "=") {
         screen.value = eval(ScreenVal);
       }
       else{
         ScreenVal += btnText;
         screen.value = ScreenVal;
       }
   });
});

scien.forEach(val => {
   val.addEventListener("click" , () => {
      alert("This Time Scientific Calculation Not availiable!");
      screen.value = ""
      val.disabled = true
   })
});
