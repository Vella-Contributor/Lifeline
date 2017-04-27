
var updated_location_array=[];
var time_distance_matrix=[];

function update_everything()
{
	var settings = 
	{
	  "async": true,
	  "crossDomain": true,
	  "url": "http://localhost:3000/upd_ever",
	  "method": "POST"
    }


	$.ajax(settings).done(function (response) 
	{
		
	    updated_location_array=response;

	    now_update_everything();

	});


}

function get_me_time_distance()
{
	var settings = 
	{
	  "async": true,
	  "crossDomain": true,
	  "url": "http://localhost:3000/find_time",
	  "method": "POST"
    }


	$.ajax(settings).done(function (response) 
	{
		
	   time_distance_matrix=response;


	});


}




