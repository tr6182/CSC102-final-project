function strings()
{
    // the strings
    var string1 = document.getElementById("initString").value;
    var string2 = document.getElementById("2ndString").value;
   
    // gets user input
    document.getElementById("str1Display").innerHTML = "you input " + string1;
    document.getElementById("str2Display").innerHTML = "you input " + string2;

    // concatenate - add 2 strings together
     var string3 = string1 + string2;
  
     var len = string3.length;
     //document.getElementById("strUpdate").innerHTML = "concatenate of 1 and 2 = " + len;

    // gets the first 3 letter in the string1 
     string3 = string1.substring(0,3);
    // writes down the first 3 letter of string 1
    //document.getElementById("strUpdate").innerHTML = "substring starting at 0 length 3 = " + stringC;

    // replace specific sequence of letter or numbers Ex: [YES --> No] 
    string3 = string1.replace(/yes/, "no");
    //document.getElementById("strUpdate").innerHTML = "replace qwe with asd 1x =" + string3;

    // replaces Capitalised letters to lowercase NOM --> nom
    string3 = string1.toLowerCase();
    string3 = string1.replace(/yes/g,"no");
    // document.getElementById("strUpdate").innerHTML = "replace all yes with no " + string3;

    // reverse 1 - using split
    string3 = string1.split("");
    //document.getElementById("strUpdate").innerHTML = "SPLIT " + string3;
    string3 = string3.reverse();
    //document.getElementById("strUpdate").innerHTML = "REVERSE " + string3;
    string3 = string3.join("");
    //document.getElementById("strUpdate").innerHTML = "JOIN " + string3;

    string3 = string1;
    // reverse using for loop
    var i;
    var reversed = "";
    for(i = string3.length-1; i >=0;i--)
    {
        reversed +=string3[i]; // reverse = reverse + string 3[i]
    }
    document.getElementById("strUpdate").innerHTML = "reversed using loop "+ reversed;

    // this is checking if there is a palindrome
    if (string1 == reversed)
    {
        document.getElementById("Palindrome").innerHTML = "this is a palindrome "+ string1;
    } 

    // this is checking if there isn't 
    if(string1 != reversed)
    {
        document.getElementById("Palindrome").innerHTML = "this is not a palindrome: "+ string1;
    }
}