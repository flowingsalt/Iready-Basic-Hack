//utils

function getFrameSrc() {
    open(html5Iframe.src)
}

function toggleMenu() {
    //enable
    if(html5Iframe.contentWindow.localStorage.cheats !== '{"showMenu":true}'){
    html5Iframe.contentWindow.localStorage.cheats = '{"showMenu":true}'
    html5Iframe.contentWindow.document.getElementById('settings-gear').click()
    html5Iframe.contentWindow.document.getElementById('cancelBtn').click()
        document.getElementById('tm').innerHTML='Disable'
    } else {
        //disable
        html5Iframe.contentWindow.localStorage.cheats = '{"showMenu":false}'
        html5Iframe.contentWindow.document.getElementById('settings-gear').click()
        html5Iframe.contentWindow.document.getElementById('cancelBtn').click()
        setTimeout(function(){
            html5Iframe.contentWindow.localStorage.clear()
            html5Iframe.contentWindow.document.getElementById('settings-gear').click()
            html5Iframe.contentWindow.document.getElementById('cancelBtn').click()
            document.getElementById('tm').innerHTML='Enable'
        },1000)
    }
}

function fix() {
        //disable
	html5Iframe.contentWindow.localStorage.clear()
        html5Iframe.contentWindow.localStorage.cheats = '{"showMenu":false}'
        html5Iframe.contentWindow.document.getElementById('settings-gear').click()
        html5Iframe.contentWindow.document.getElementById('cancelBtn').click()
}

//UI
function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		/* if present, the header is where you move the DIV from:*/
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		/* otherwise, move the DIV from anywhere inside the DIV:*/
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

var UI = document.createElement("div");
UI.innerHTML = `
	<div style="width:300px; left: 1px; top: 1px; background-color: #282828; color: white; outline: white solid 1px; position:absolute; z-index: 99999;">
		<h1 style="font-size: 32px;">i-Ready Basic Hack</h1>
		<br>
		<h2 style="font-size: 25px; font-style: normal !important; color: white !important;">Teacher Menu</h2>
		<button id='tm' onclick="toggleMenu()">Toggle</button>
		<br>
		<br>
		<h2 style="font-size: 25px; font-style: normal !important; color: white !important;">Get i-frame src</h2>
		<button onclick="getFrameSrc()">Get i-frame src</button>
		<br>
		<br>
    <h3 style="font-size: 25px; font-style: normal !important; color: white !important;">press this after skipping</h3>
		<button onclick="fix()">Fix</button>
		<br>
		<br>
		
	</div>`
  
// shamelessly stolen from https://www.w3schools.com/howto/howto_js_draggable.asp
//Make the DIV element draggagle:
dragElement(UI.firstElementChild);
document.body.appendChild(UI);
