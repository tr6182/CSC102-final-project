function function1()// when a button with a function is pressed the function well run its code
{
    alert("do it again i dare you");
}

function playAGame()//this function will display a random number when a specfic button is pressed
{
    var random1 = Math.ceil(Math.random() *10);//math.random will produce a random numberbetween 1- whatever we want 10 to like 100000000000000000000 and more
    var random2 = Math.ceil(Math.random() *10);

    document.getElementById("rand1").innerHTML = "1st random num =" + random1
    document.getElementById("rand2").innerHTML = "2nd random num = " + random2;

    var sum = random1+random2;
    if ((sum == 13) || (random1 !=6))
    {
        document.getElementById("result").innerHTML = "You are a Winner - you got 13 or no 6's!";
    }
    else if ((sum < 12)  && (random2 !=4))
    {
        document.getElementById("result").innerHTML = "LOW #s this time - and with a 4 in rand2";
    }
    else
    {
        document.getElementById("result").innerHTML = "not interesting enough";
    }

}


function average(num1, num2)// get the average from num 1 and num 2 and divides by 2 to get the average
{
    var result = (num1+num2)/2.0;
    document.getElementById("average").innerHTML = "Average of 2 nums is " +result;
}

function theChangingButton() 
{
    const button = document.getElementById("myButton");
    alert("I am changing");
    var randomWidth = Math.ceil(Math.random() *500);
    var randomHeight = Math.ceil(Math.random() *500);
   
    button.style.width =  randomWidth  + "px";
    button.style.height = randomHeight + "px";
   
}

