var map;
var markers=new Array();
$(document).ready(function(){
	function initialize() {
		var myLatlng=new google.maps.LatLng(37.4528, -122.1833);
		var mapOptions = {
			center: { lat: 43.4667, lng: -80.5167},
        	 	zoom: 3,
			zoomControl:false,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL,
				position: google.maps.ControlPosition.RIGHT_CENTER
			},
			
			mapTypeControl:false,
			scaleControl:false,
			panControl: false,
			navigationControl: false,
			streetViewControl: false
		};
		var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
		
		var companyName='Facebook';
		var companyWebsite='https://www.facebook.com/careers/';
		var companyAddress='Menlo Park';
		var positions=['Software Developer'];
		var jobmine='https://jobmine.ccol.uwaterloo.ca/psp/SS_1/EMPLOYEE/WORK/c/UW_CO_STUDENTS.UW_CO_JOBDTLS.GBL?Page=UW_CO_STU_JOBDTLS&Action=U&UW_CO_CNTCTROLE_ID=00019661&UW_CO_EMPLOYER_ID=00012180&UW_CO_JOB_ID=00241953&UW_CO_JOB_TITLE=Data%20Engineering%20-%20Business%20Intelligence%20Co-Op&UW_CO_PARENT_ID=00009441&UW_CO_PARENT_NAME=Facebook&UW_CO_WT_SESSION=1151&TargetFrameName=None'

		var contentString='<h1>'+companyName+'</h1><p><b>Company Address: </b>'+companyAddress+'<br><b>Career Website: </b><a href="'+companyWebsite+'">'+companyWebsite+'</a><br><b>Positions Available: </b><br><a href="'+jobmine+'">'+positions[0]+'</a><br><b>Click on left-side arrow for more info!</b>';
		
		var infoWindow=new google.maps.InfoWindow({
			content: contentString
		});

		var marker=new google.maps.Marker({
		 	position: myLatlng,
		 	map: map,
		 	title: 'Facebook'
		 });

		marker=new google.maps.Marker({
			position: new google.maps.LatLng(37.4528, -122.1833),
			map: map,
			title: 'Facebook'
		});
		
		var myLatlng3=new google.maps.LatLng(37.5651,126.98955);
		var myLatlng4=new google.maps.LatLng(43.3980941, -80.2970993);
		var myLatlng5=new google.maps.LatLng(43.6477183, -79.3731975);
		var myLatlng6=new google.maps.LatLng(43.6477183, -122.0840);
		var myLatlng7=new google.maps.LatLng(40.761662, -73.96805);
		var myLatlng8=new google.maps.LatLng(43.8541361, -79.3465157);
		var myLatlng9=new google.maps.LatLng(43.472285, -80.544858);
		
		var marker3=new google.maps.Marker({
			position:myLatlng3,
			map:map
		});

		var marker4=new google.maps.Marker({
			position:myLatlng4,
			map:map
		});

		var marker5=new google.maps.Marker({
			position:myLatlng5,
			map:map
		});
		
		var marker6=new google.maps.Marker({
			position:myLatlng6,
			map:map
		});

		var marker7=new google.maps.Marker({
			position: myLatlng7,
			map:map
		});

		var marker8=new google.maps.Marker({
			position:myLatlng8,
			map:map
		});

		var marker9=new google.maps.Marker({
			position:myLatlng9,
			map:map
		});

		
		queryDatabase(companyName, true);

		google.maps.event.addListener(marker, 'click', function() {queryDatabase("Google", false); infoWindow.open(map, marker);});
		map.setOptions({minZoom: 3});
	}
	google.maps.event.addDomListener(window, 'load', initialize);

	function moreInfo(){
		if (!$(this).hasClass('slider-open')){
                        $(this).addClass('slider-open');
                        $(this).animate({left:"50%"},200);
                        $('.slider-panel').removeClass('notDisplayed');
                }
	}
	
	var counterErr = 0;
	var lattit = 47.4528;
	var longit = -142.1833;
	function queryDatabase(query, all) {
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
                        $('tr:last').after('<tr>' +
                            '<td>' + jobList[i]['employer'] +'</td>' +
                            '<td>' + jobList[i]['job_title'] +'</td>' +
                            '<td>' + jobList[i]['rating'] +'</td>' +
                            '<td>' + jobList[i]['salary'] +'</td>' +
                            '<td>' + jobList[i]['review'] +'</td>' +
                            '</tr>');
                        lattit = lattit + 10;
                        longit = longit + 10;
			
                    marker = new google.maps.Marker({
						position: new google.maps.LatLng(jobList[i]['latitude'], jobList[i]['longitude']),
						map: map,
						title: jobList[i]['employer']
					});
			markers.push(marker);
               		//google.maps.event.addDomListener(window, 'load', initialize);
		 }
		//google.maps.event.addDomListener(window, 'load', initialize);
                return jobList;
            }
        }
        if ( all ==  false){
        	console.log("all is set to false");
        	xmlhttp.open("GET","../fetchFromDatabase.php?q="+ query + "&queryFields=*", true);	
        }else{
        	console.log("all is set to true");
        	xmlhttp.open("GET","../selectAllDatabase.php", true);	
        }
        xmlhttp.send();
    }

	$("#slider-arrow").click(function(){
		if ($(this).hasClass('slider-open')){
			$(this).removeClass('slider-open');
			$(this).animate({left:"0%"},200);
		//	$('#map-canvas').animate({width:'100%'},200);
			$('.slider-panel').addClass('notDisplayed');	
		}else{
			$(this).addClass('slider-open');
			$(this).animate({left:"50%"},200);
			$('.slider-panel').removeClass('notDisplayed');
		}
	});


	
})
