/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function drop_me(){
    
        var msg="If you have further questions, please don't hesitate to drop me a line.";
    var msg2="eduardo@gmx.at";
    
    document.getElementById("dropme").innerHTML=msg;
    document.getElementById("dropme2").innerHTML=msg2;
         
}   


function copyemail(){
    var useremail = document.getElementById('email').value;
    var recipient = document.getElementById('cform').action;
    var myemail ="eduardo@gmx.at";
    var newrecipients=recipient+", "+useremail;
    document.getElementById('cform').action=newrecipients;
    
}



