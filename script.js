function validEmail(str) {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
	if(regEx.test(str))
	{
		return true;
	}
	else 
	{
		return false;
	}
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
