/* dynamically setting the display attribute of contents in right_col */
function changeColor(elem)
{
	var tabs = ["tab1", "tab2", "tab3", "tab4", "tab5", "tab6"];
	var curr_tab = document.getElementById(elem);
	var toDarken = null;

	for (i=0; i < tabs.length; ++i) {
		toDarken = document.getElementById(tabs[i]);
		if (toDarken.id == curr_tab.id) { 
			curr_tab.style.background="#FFFFFF";
			curr_tab.style.borderRight="2px solid #FFFFFF";
		} else { 
			toDarken.style.background="#d8d8d8";
			toDarken.style.borderRight="2px ridge #d8d8d8";
		}
	}
}

function show(elem)
{
	var contents = ["about", "projects", "resume", "hobbies", "photos", "links"];
	var curr_content = document.getElementById(elem);
	var toHide = null;

	for (i=0; i < contents.length; ++i) {
		toHide = document.getElementById(contents[i]);
		if (toHide.id == curr_content.id) { 
			curr_content.style.display="block";
		} else { 
			toHide.style.display="none";
		}
	}
}

function display(elem1, elem2) 
{
	changeColor(elem1);
	show(elem2);
}

function changePhoto(elem)
{
	document.getElementById("large_photo").src = elem;
}
