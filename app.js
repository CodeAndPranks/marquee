// Add a click event to each buttons
btn1.addEventListener("click", myFunction1);
btn2.addEventListener("click", myFunction2);
btn3.addEventListener("click", myFunction3);
btn4.addEventListener("click", myFunction4);

//twist angel of tag('s) ,e.g img tag OR all tag-name with *
function myFunction1 () {  
(function(){var x = document.body.getElementsByTagName("*"); 
for (i = 0; i < x.length; i++) {
var y = Math.floor((Math.random()*10)+1); x[i].style.transform="rotate("+y+"deg)"}}());
}  
//STOP AND RESET THE TRANSFORM(MessUpp)
function myFunction2() {var x = document.body.getElementsByTagName("*");
       for (var i = 0; i < x.length; i++) { x[i].style.transform = "none";
}
 }
//Rotate script-tag you want,or all with a astric(*)
// Initialize the variable R
let R = 0;

// Define the variables used in the animation
let x1 = 1, x2 = 2, x3 = 3, x4 = 100, x5 = 150;
let y1 = 1, y2 = 2, y3 = 3, y4 = 100, y5 = 150;

// Function called on button3 click
function myFunction3() {
    // Get all elements (images or others)
    let DI = document.getElementsByTagName("*");//Expriment with ,h1,h2,img,*. 
    let DIL = DI.length;

    //animate the elements
    function A() {
        for (let i = 0; i < DIL; i++) { 
            let DIS = DI[i].style; 
            DIS.position = 'absolute'; 
            DIS.left = (Math.sin(R * x1 + i * x2 + x3) * x4 + x5) + "px"; 
            DIS.top = (Math.cos(R * y1 + i * y2 + y3) * y4 + y5) + "px";
        }
        R++;
    }

    // Start the animation with a 200 ms interval//Try differens speed
    let intervalID = setInterval(A, 200); 

    // Stop the animation after 5 seconds
    setTimeout(function() {
        clearInterval(intervalID); // Stop animation,
        location.reload();         // reload page(= back to start)
    }, 5000);                      //rotate 5 secound.
} 
function myFunction4() {
alert("OK MIGTH PRANK YOU\n Have a nice day !");
document.body.innerHTML="";
document.body.style.backgroundColor="grey";
}
