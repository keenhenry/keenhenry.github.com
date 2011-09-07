var xmlhttp;

function loadXMLDoc(url)
{
	xmlhttp = null;
	if (window.XMLHttpRequest) {// code for IE7, Firefox, Mozilla, etc.
  		xmlhttp = new XMLHttpRequest();
		if (xmlhttp.overrideMimeType) {
			xmlhttp.overrideMimeType('text/xml');
		}
  	} else if (window.ActiveXObject) {// code for IE5, IE6
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

	if (xmlhttp != null) {
  		xmlhttp.onreadystatechange=listProjects;
  		xmlhttp.open("GET", url, true);
  		xmlhttp.send(null);
  	} else {
  		alert("Your browser does not support XMLHTTP.");
  	}
}

function listProjects()
{
	if(xmlhttp.readyState!=4) return;
	if(xmlhttp.status!=200)	{
  		alert("Problem retrieving XML data");
  		return;
  	}

	var xmlDoc = xmlhttp.responseXML.documentElement;
	var clist  = xmlDoc.getElementsByTagName("category");
	var txt	   = "";

	for (i = 0; i < clist.length; i++) {
		txt = txt + "<table id='t" + (i+1) + "'>";
  		cname = clist[i].firstChild.firstChild.nodeValue;
  		plist = clist[i].getElementsByTagName("project");
    		
    		try {
      			txt = txt + "<tr class='r1'><td colspan='2'>" + cname + "</td></tr>"; 
			for (j = 0; j < plist.length; j++) {
      				txt = txt + "<tr class='r2'>"; 
				txt = txt + "<td class='c1'>" + plist[j].childNodes[0].firstChild.nodeValue + "</td>";
				txt = txt + "<td class='c2'>Updated " + plist[j].childNodes[1].firstChild.nodeValue + "</td></tr>";
				txt = txt + "<tr class='r3'><td class='c1'>" + plist[j].childNodes[3].firstChild.nodeValue + "</td>";
				txt = txt + "<td class='c2'><a href='./projects/" + plist[j].childNodes[4].firstChild.nodeValue + "'>"
					  + "DOWNLOAD</a></td></tr>";
				
				if (j == plist.length - 1)
					txt = txt;
				else
					txt = txt + "<tr class='r4'><td colspan='2'><div></div></td></tr>"
			}
			txt = txt + "</table>";
      		} catch (er) {
      			txt = txt + "<div>?</div>";
      		}
  	}
	document.getElementById('proj-lists').innerHTML = txt;
}
