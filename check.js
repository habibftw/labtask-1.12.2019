function checkname(){
	
	
	
	var name = document.getElementById('name').value; 
		
	
		if(name.length >= 2 && name[0] == name[0].toUpperCase()== true )
		{
			document.getElementById('invalidname').innerHTML="";
			
		}
		
		else
		{
			//alert('inv name');
			document.getElementById('invalidname').innerHTML="invalid Name";
		}
	

}
	
	function checkemail()
	{
	
		var email = document.getElementById('email').value; 
		var at = email.indexOf( "@" );
		var dot = email.lastIndexOf( "\." );
		
		if(
		email.length > 0 &&
           at > 0 &&
           dot > at + 1 &&
           dot < email.length &&
           email[at + 1] !== "." &&
           email.indexOf( " " ) === -1 &&
           email.indexOf( ".." ) === -1
		   )
		   {
			   document.getElementById('invalidemail').innerHTML="";
				f3();
   
			}
   else
		{
			//alert('inv email');
			document.getElementById('invalidemail').innerHTML="invalid Email";
		}
   
	}
		
	
   
  
   /*
   
   {    document.getElementById('invalidemail').innerHTML="";
		f3();
   
   }
   else
		{
			//alert('inv email');
			document.getElementById('invalidemail').innerHTML="invalid Email";
		}
   
	
	}*/
	
/*	
function checkpass()
	{
  var p = document.getElementById('pass').value
  var errors = []

  if (p.length < 8) {
    errors.push("Your password must be at least 8 characters")
  }
  if (p.search(/[a-z]/) < 0) {
    errors.push("contain at least one lowercase letter.")
  }
  if (p.search(/[A-Z]/) < 0) {
    errors.push("Ycontain at least one uppercase letter.")
  }
  if (p.search(/[0-9]/) < 0) {
    errors.push(" contain at least one digit.")
  }
  if(p.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0) {
    errors.push(" contain at least one special character.")
  }
    
  if (errors.length > 0) {
    document.getElementById("invalidpassword").innerHTML = "")
    return false;
  }
  else{    document.getElementById("invalidpassword").innerHTML = "Invalid Password"
}
}*/
  
	
	
	function passwordmatch()
	{
	 var pass = document.getElementById('pass').value;
	 var cpass = document.getElementById('cpass').value;
	 
	 if( pass == cpass)
	 {
		 document.getElementById('matchingpassword').innerHTML="";
		//checkButton();
	 }
	 
	 else
	 {
		 document.getElementById('matchingpassword').innerHTML="Password doesnt match";
		//alert("no");
	 }
	
	}
	
	
	function checkButton(){
if(document.form1.gender1.checked == true || document.form1.gender1.checked == true || document.form1.gender1.checked == true)

{   document.getElementById('checkradio').innerHTML="";
 // checkdate();
 //document.getElementById('checkradio').innerHTML="Please check";
}

else{
	document.getElementById('checkradio').innerHTML="Please check";
  
 //document.getElementById('checkradio').innerHTML="";
 }
	}

 function checkdate()
 {
		var d1 = document.getElementById('dob1').value;
	
		
		if ( d1 >= 1 && d1 <=31 )
		{
			checkdate2();
			
		}
		
		else 
		{
		alert("nl");
		}
		
 }
 
 function checkdate2()
 {
		var d2 = document.getElementById('dob2').value;
		
		if ( d2 >= 1 && d2 <=12 )
		{
			checkdate3();
			
		}
		
		else 
		{
		alert("nl");
		}
		
 }
 
 function checkdate3()
 {
			var d3 =document.getElementById('dob3').value;
	if ( d3 >= 1900 && d3 <=2079)
		{
			checkdate3();
			
		}
		
		else 
		{
		alert("nl");
		}
 
 }
	
	
	function check()
	{
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		
		if(name.length == 0 || email.length == 0)
		{alert('fill all')}
	else{}
		 
		
	}
	;
	
		
		

