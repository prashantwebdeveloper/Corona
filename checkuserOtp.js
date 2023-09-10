let userlogin= JSON.parse(localStorage.getItem('Userotp'));

if(!userlogin)
{
    window.location.href= "login.html";
}