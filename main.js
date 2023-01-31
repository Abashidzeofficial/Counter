const increaseButton = document.getElementsByClassName('lower')[0];
const decreaseButton = document.getElementsByClassName('add')[0];
let count = document.getElementById('count');
let counter = 0;

increaseButton.addEventListener("click", () =>  {
   counter--; 
   count.innerHTML = counter;
   if(counter < 0){
    count.style.color = "red";
   } else if(counter == 0){
    count.style.color = "rgb(51, 51, 51)";
}
     
});

decreaseButton.addEventListener("click", () =>  {
    counter++; 
    count.innerHTML = counter;
    if(counter > 0){
     count.style.color = "green";
    }else if(counter == 0){
        count.style.color = "rgb(51, 51, 51)";
    }     
  });



 



  
 






