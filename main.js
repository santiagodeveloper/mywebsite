/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global True */
    


document.getElementsById('projetcs').window.alert("hi");;
document.getElementById('message').innerHTML="Enter your message here";
        
function getCopy(){
    var entryEmail=document.getElementById('email').value;
    var myEmail="eduardo@gmx.at";
    document.getElementById('cform').action=mailto: entryEmail, myEmail;
    alert(entryEmail);
}


