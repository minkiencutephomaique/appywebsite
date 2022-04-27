function check()
{
    console.log("hello");
    var error = "";
    // check username
    var user = document.getElementById("user");
    if(user.value == "")
    {
        user.className = "value";
        error += "You must enter Username !!! <br>";
    }
    else if(user.value.length < 7)
    {
        user.className = "value";
        error += "Username must be more than 7 characters  <br>";
    }
    else if(user.value.length > 25)
    {
        user.className = "value";
        error += "User not too 30 character !!! <br>"
    }
    else 
    {
        user.className="info";
        error += "<br>";
    }
    // check password
    var pass = document.getElementById("pass");
    if(pass.value == "")
    {
        pass.className = "value";
        error += "You must enter password !!! <br>";
    }
    else if(pass.value.length < 8)
    {
        pass.className = "value";
        error += "Password must be more than 8 characters <br>";
    }
    else 
    {
        pass.className="info";
        error += "<br>";
    }
    // check email
    var email = document.getElementById("email");
    const perfect = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    if(email.value == "")
    {
        email.className = "value";
        error += "You must enter email !!! <br>";
    }
    else if(perfect.test(email.value))
    {
        pass.className="info";
        error += "<br>";
        
    }
    else
    {
        email.className = "value";
        error += "Invalid email (kiendz@gmail.com) !!! <br>";
    }
    if(email.value != "")
    {
        email.className="info";
        error += "<br>";
    }
    
    
    
    
    
    

    // if()
    // {
    //     email.className = "value";
    //     error += "Valid email !!! <br>";
    // }
    // else
    // {
    //     email.className = "value";
    //     error += "Invalid email (kiendz@gmail.com) !!! <br>";
    // }
    
    // check sex
    count = 0;
    var array_sex = document.getElementsByName("gioi_tinh");
    for(var i = 0; i < array_sex.length ; i++)
    {
        if(array_sex[i].checked == true) count++;
    }
    if(count == 0)
    {
        document.getElementById("sex").className="value1";
        error += "You must enter sex !!! <br>";
    }
    else
    {
        document.getElementById("sex").className="";
        error += "<br>";
    }
    // check hobby
    count = 0;
    var array_hobby = document.getElementsByName("hb");
    for(var i = 0; i < array_hobby.length; i++)
    {
        if(array_hobby[i].checked == true) count++;
    }
    if(count == 0)
    {
        document.getElementById("hoby").className = "value1";
        error += "You must enter hobby !!! <br>";
    }
    else
    {
        document.getElementById("hoby").className="";
        error += "<br>";
    }
    // check country
    var country = document.getElementById("country");
    if(country.value == 0)
    {
        country.className = "value";
        error += "You must enter country !!! <br>";
    }
    else
    {
        document.getElementById("country").className="";
        error += "<br>";
    }
    // check note
    var note = document.getElementById("note");
    if(note.value.length > 20)
    {
        note.className = "value2";
        error += "Note must be less than 20 characters !!! <br>";
    }
    else
    {
        document.getElementById("note").className="";
        error += "<br>";
    }
    // retutn check
    if(error != "")
    {
        document.getElementById("screen").innerHTML=error;
        setTimeout("document.getElementById('screen').innerHTML = 'Welcome'",10000);
        return false;
    }
}


Angular

app = angular.module("singin", []);
app.controller("fight",check);
function check($scope)
{
    $scope.inputsp = function()
    {
        if($scope.inputuser != undefined)
        {
            alert("Nice");
        }
    }
}
