function validate()
{
    let u=document.getElementById("uname");
    let p=document.getElementById("pwd")
    u.style.border="solid 1px black";
    p.style.border="solid 1px black"
    if (u.value.trim()=="")
    {
        alert("username cannot be empty");
        u.style.border="solid 3px red";
        return false;
    }
    else if (p.value.trim()=="")
    {
        alert("password cannot be empty");
        p.style.border="solid 3px red";
        return false
    }
    else
    {
        return true;
    }
   
}