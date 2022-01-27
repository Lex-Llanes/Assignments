//alert("Welcome to My Best Oatmeal Recipe!")



//Function that starts a count down
function startTimer(){
  var counter = 60;

  //setInterval method with the delay on the bottom
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    //When it reaches zero it will alert the user
    if (counter === 0) {
        alert('Oatmeal is done!');
        clearInterval(counter); //clearInterval will stop the timer
    }
  }, 1000); //Delay interval = 1000ms which is one second
}

//This function grabs the elemend with the id="count" and changes it to green, then after calls the startTimer() function.
function start()
{
    document.getElementById("count").style="color:green;";
    startTimer();
};


//Will this change?