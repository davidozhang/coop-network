$(document).ready(function(){
	$( ".filters" ).addClass( "notDisplayed" );

  	/*$("#searchButton").click(function() {
		if ($( ".filters" ).hasClass( "notDisplayed" )) {
		    $( ".filters" ).removeClass( "notDisplayed" );
		    console.log("1");
		} else {
		    greeting = "Good evening";
		    $( ".filters" ).addClass( "notDisplayed" );
		    console.log("2");
		}
	}); */

	$("#searchButton").click(function() {

		//$("#searchResults").children().slice(2).detach();

		console.log("1");
		console.log( queryDatabase($("#searchField").val()) ) ;
		console.log("5 above");

		// console.log("1");
		// queryDatabaseParams("Facebook");
		// console.log("5 above");

		//console.log(makeResults());
		/*
		event.preventDefault();
		if ($("#searchField").val()=="") {return;} 
		if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		} else { // code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function() {
			console.log(xmlhttp.responseText);
		}
		console.log($("#searchField").val());
		xmlhttp.open("GET","../fetchFromDatabase.php?q="+ $("#searchField").val(),true);
		xmlhttp.send();
		*/
	});
	var counterErr = 0;  //The results come in identical pairs. This counter will temprarily fix that.
	
	function clearTable(){
		document.getElementById("panel-content").innerHTML = "<div class='panel-heading'>Search Results</div><table class='table' id='searchResults'><tr><td>Employer</td><td>Job Title</td><td>Rating</td><td>Salary ($)</td><td>Review</td></tr></table>";
	}

	
	function queryDatabase(query) {
		event.preventDefault();
		if (query=="") {return;} 
		if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		} else { // code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function() {
			counterErr++;
			console.log("2");
			if (counterErr%2 == 0){
				var jobList = xmlhttp.responseText;
				jobList = jQuery.parseJSON(jobList);
				console.log(jobList);
				console.log(typeof jobList);
				console.log("3");
				clearTable();
				for (i = 0; i < jobList.length; i++) { 
					console.log("4");
				    console.log( 'jobList : ');
				    console.log(jobList[i]);
					$('tr:last').after('<tr>' + 
						'<td>' + jobList[i]['employer'] +'</td>' + 
						'<td>' + jobList[i]['job_title'] +'</td>' + 
						'<td>' + jobList[i]['rating'] +'</td>' + 
						'<td>' + jobList[i]['salary'] +'</td>' + 
						'<td>' + jobList[i]['review'] +'</td>' + 
						'</tr>');
				}
				return jobList;
			}
			
		}
		xmlhttp.open("GET","../fetchFromDatabase.php?q="+ query + "&queryFields=*", true);
		xmlhttp.send();
	}
	
	
	function queryDatabaseParams(query) {
		event.preventDefault();
		if (query=="") {return;} 
		if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		} else { // code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function() {
			counterErr++;
			console.log("2");
			if (counterErr%2 == 0){
				var jobList = xmlhttp.responseText;
				jobList = jQuery.parseJSON(jobList);
				console.log(jobList);
				console.log(typeof jobList);
				console.log("3");

				for (i = 0; i < jobList.length; i++) { 
					console.log("4");
				    console.log( 'jobList : ');
				    console.log(jobList[i]);
				    jobList[i]['employer'];
				}
				return jobList;
			}
			
		}
		xmlhttp.open("GET","../fetchFromDatabase.php?q="+ query + "&queryFields=*", true);
		//xmlhttp.open("GET","../fetchFromDatabase.php?q="+ query + "&queryFields=" . queryParam, true);
		xmlhttp.send();
	}

});
