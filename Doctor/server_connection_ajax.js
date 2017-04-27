

var tell_user_you_on_this_location;

var tell_user_you_off_this_location;


function on_a_location_button()
{
	var settings = 
	{
	  "async": true,
	  "crossDomain": true,
	  "url": "http://localhost:3000/on_loc",
	  "method": "POST"
    }



	$.ajax(settings).done(function (response) 
	{
		tell_user_you_on_this_location=response;
	 	show_this_too_user_you_on_this();

	});


}


function off_a_location_button()
{
	var settings = 
	{
	  "async": true,
	  "crossDomain": true,
	  "url": "http://localhost:3000/off_loc",
	  "method": "POST"
    }

	$.ajax(settings).done(function (response) 
	{
		tell_user_you_off_this_location=response;
		show_this_too_user_you_off_this();		

	});


}

