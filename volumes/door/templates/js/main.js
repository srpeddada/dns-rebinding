

var a = document.querySelector('.open-close-door');
a.addEventListener('click',stateUpdate);

function stateUpdate() {
	currentvalue = document.getElementById("status").value;
	$.get('/password', function(data) {
		$.post('/state?value=' + currentvalue + '&password=' + data.password, function(data) {
			console.debug('Response --> ');
			console.debug(data);
			displayState();
		});
	});
}

function displayState() {
	currentvalue = document.getElementById("status").value;
	if (currentvalue == "closed"){
	    document.getElementById("status").value="open";
		document.querySelector('.maindoor').classList.toggle('open');
	}else{
	    document.getElementById("status").value="closed";
		document.querySelector('.maindoor').classList.toggle('closed');
	}
	console.log("rendering: ", currentvalue);
}


function pollState() {
	$.get('/state', function(data) {
		if (!data.hasOwnProperty('state')) {
			console.error('server does not send the correct data');
		} else {
			let newState = data.state;
			if (newState == 'change') {
				console.log('Door status is changed appropriately');
				displayState(); 
			} 
		}
	});
}

setInterval(pollState, 500);
