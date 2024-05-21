let firstName;
let lastName;
let emailId;
let password;

const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function submitData()
{
    firstName=document.getElementById("fname").value;
    lastName=document.getElementById("lname").value;
    emailId=document.getElementById("email").value;
    password=document.getElementById("pwd").value;

    if(firstName===null || firstName.length==0)
    {
        document.getElementById("fnameDiv").style.border="2px solid hsl(0, 100%, 74%)";
        document.getElementById("fnameErr").style.display="block";
        document.getElementById("fnameErrIcon").style.display="block";
    }
    else if( firstName!=null ||firstName.length!=0)
    {
        document.getElementById("fnameDiv").style.border="2px solid hsl(248, 32%, 49%)";
        document.getElementById("fnameErr").style.display="none";
        document.getElementById("fnameErrIcon").style.display="none";
    }

    if(lastName===null || lastName.length==0)
    {
        document.getElementById("lnameDiv").style.border="2px solid hsl(0, 100%, 74%)";
        document.getElementById("lnameErr").style.display="block";
        document.getElementById("lnameErrIcon").style.display="block";
    }
    else if(lastName!==null || lastName.length!=0)
    {
        document.getElementById("lnameDiv").style.border="2px solid hsl(248, 32%, 49%)";
        document.getElementById("lnameErr").style.display="none";
        document.getElementById("lnameErrIcon").style.display="none";
    }
    if(emailId===null || emailId.length==0)
    {
        document.getElementById("mailDiv").style.border="2px solid hsl(0, 100%, 74%)";
        document.getElementById("mailErr").style.display="block";
        document.getElementById("mailErrIcon").style.display="block";
    }
    else if(emailId!==null || emailId.length!=0)
    {
        if(emailRegex.test(emailId)===false)
        {
            document.getElementById("mailDiv").style.border="2px solid hsl(0, 100%, 74%)";
            document.getElementById("mailErr").style.display="block";
            document.getElementById("email").style.color="hsl(0, 100%, 74%)";
            document.getElementById("mailErrIcon").style.display="block";
            document.getElementById("mailErr").innerText="Looks like this is not an email";
        }
        else{
            document.getElementById("mailDiv").style.border="2px solid hsl(248, 32%, 49%)";
            document.getElementById("email").style.color="hsl(249, 10%, 26%) ";
            document.getElementById("mailErr").style.display="none";
            document.getElementById("mailErrIcon").style.display="none";
        }
    }
    if(password===null || password.length==0)
    {
        document.getElementById("pwdDiv").style.border="2px solid hsl(0, 100%, 74%)";
        document.getElementById("pwdErr").style.display="block";
        document.getElementById("pwdErrIcon").style.display="block";
    }
    else if(password!=null || password.length!=0)
    {
        document.getElementById("pwdDiv").style.border="2px solid hsl(248, 32%, 49%)";
        document.getElementById("pwdErr").style.display="none";
        document.getElementById("pwdErrIcon").style.display="none";
    }
    

}