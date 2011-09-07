var projects = {
		"category": [
			{ "cname": "Web", 
			  "project": { 
			  	"name": "Hank Site", 
				"date": "Mar 2010", 
				"language": "DHTML, Ajax", 
				"description": "My personal website using several web technologies.", 
				"source": "hank_site.tar.gz"
			   }
			},
			{ "cname": "Search Engine", 
			  "project": {
				"name": "SmartQuery", 
				"date": "Feb 2010", 
				"language": "Java", 
				"description": "Implementaion of a small search engine using Yahoo!BOSS API. Improving search results quality by providing relevance feedback with users. A command line based program.", 
				"source": "smart_query.tar.gz"}
			},
			{ "cname": "System Programming", 
			  "project": {
				"name": "Hsh (Hank Shell)", 
				"date": "Aug 2010", 
				"language": "C", 
				"description": "A shell used on UNIX/LINUX operating systems. Several common builtins, I/O redirection, pipeline and path name autocompletion are implmented. It is basically a customized shell for henry to use.", 
				"source": "hsh.tar.gz"}
			},
			{ "cname": "Games", 
			  "project": {
				"name": "Isolation", 
				"date": "Apr 2009", 
				"language": "C++", 
				"description": "A simple board game played by one person with computer. Both GUI and command line versions available.", 
				"source": "isolation.tar.gz"}
			},
			{ "cname": "Compiler", 
			  "project": {
				"name": "CRYPS", 
				"date": "Sept 2008", 
				"language": "OCaml", 
				"description": "A scripting language that is used write programs that uses cryptographic operations. A interpreter was implemented.", 
				"source": "cryps.tar.gz"}
			}
		]
}

function listProjects()
{
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
