function login()
{
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    if(user.value == "" && pass.value == "")
    {
        alert("You have not entered Username and Password");
        return;
    }
    if(user.value == "")
    {
        alert("You have not entered Username");
        return;
    }
    if(pass.value == "")
    {
        alert("You have not entered Password");
        return;
    }
    if(user.value != "" && pass.value != "")
    {
        alert("Log In");
        return;
    }
}