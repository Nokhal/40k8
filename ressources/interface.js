

//Generic, unintrusive loader
if(window.attachEvent) {
    window.attachEvent('onload', initInterface);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            initInterface(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = initInterface;
    }
}

function toggleHelp() {	var I_help = document.getElementById("helpText");	if (I_help.style.display === "none") { I_help.style.display = "block"; } else { I_help.style.display = "none";	}} 

var tmp_elem;
function initInterface(){
	
	populateFactionDic();
	generateNewRoster();
	
}



var I_RosterRoot;
var Roster;
function generateNewRoster(){
	
	//Init of the roster
	Roster = {};
	Roster.name = "New Army";
	Roster.dets = [];
	
	refreshArmyListDisplay();
	
	I_DataRoot = document.getElementById("DataRoot");
	I_DataRoot.innerHTML ="<p>Import a List or start editing your roster</p>";
	
	
}

var currentActiveI = null;
function cleanActiveI(){
	if(currentActiveI != null){
		currentActiveI.className ='selectableClass';
	}
	
	//Cleaning the data root
	I_DataRoot = document.getElementById("DataRoot");
	while (I_DataRoot.firstChild) {
		I_DataRoot.removeChild(I_DataRoot.firstChild);
	}
	
}

//=============  ARMY MANIPULATION ================

var I_ArmyNameBox;
var I_ArmyName;
function populateArmyDetail(){
	
	cleanActiveI();
	I_ArmyNameBox = document.getElementById("ArmyNameBox");
	currentActiveI = I_ArmyNameBox;
	currentActiveI.className ='selectableClass activated';
	
	I_ArmyName = document.getElementById("armyName");
	
	//Populating content
	I_DataRoot.innerHTML ='<div><p> Army Name : </p><input class = "resizablehorizontal" type="text" name="inputArmyName" id="armyNameInput" value="'+ I_ArmyName.innerText +'"><br><button onclick="ISubmitNewName()">Change Name</button><hr><button onclick="addDetachment()">Add Detachment</button></div>';
	
}

var I_NameInput;
function ISubmitNewName(){
	I_ArmyName = document.getElementById("armyName");
	I_NameInput = document.getElementById("armyNameInput");
	I_ArmyName.innerText = I_NameInput.value;
	Roster.name = I_NameInput.value;
}

var I_newDetIndex;
var newDet;
function addDetachment(){
	I_newDetIndex = Roster.dets.length;
	newDet = {};
	newDet.type = "Select Detachment Type";
	newDet.faction = "and Faction";
	newDet.ICP = "+?CP";
	Roster.dets.push(newDet);
	refreshArmyListDisplay();
	populateArmyDetail();
}

//==========================================================
//=============  DETACHMENT MANIPULATION ===================
//==========================================================

var I_DetachmentBox;
var I_DetachmentDispType;
var I_DetachmentDispKeyword;
var I_DetachmentDispCP;
var I_DispDetachmentOption;
var I_OptionList;
var I_OptionList2;

function populateDetachment(_IdCalled){
	cleanActiveI();
	I_DetachmentBox = document.getElementById("Detachment"+ _IdCalled + "");
	currentActiveI = I_DetachmentBox;
	currentActiveI.className ='selectableClass activated';
	
	I_OptionList = "";
	for(i=0; i<detdict.length;i++){
		if(Roster.dets[_IdCalled].type == detdict[i].name){
			I_OptionList = I_OptionList + '<option value="' + detdict[i].name + '" selected>' + detdict[i].name + '</option>';
		} else {
			I_OptionList = I_OptionList + '<option value="' + detdict[i].name + '">' + detdict[i].name + '</option>';
		}
	}
	

	
	I_OptionList2 = "";
	for(i=0; i<kfdict.length;i++){
		if(Roster.dets[_IdCalled].faction == kfdict[i].name){
			I_OptionList2 = I_OptionList2 + '<option value="' + kfdict[i].name + '" selected>' + kfdict[i].name + '</option>';
		} else {
			I_OptionList2 = I_OptionList2 + '<option value="' + kfdict[i].name + '">' + kfdict[i].name + '</option>';
		}
	}
	
	I_DataRoot.innerHTML = '<p>Select Detachment Type</p><select id="detachementTypeSelector">' + I_OptionList + '</select><button onclick="applyDetType(' + _IdCalled +')">Apply</button>' + '<p>Select Faction Keyword</p><select id="detachementFactionSelector">' + I_OptionList2 + '</select><button onclick="applyDetFaction(' + _IdCalled +')">Apply</button><hr><button onclick="addDatasheet()">Add Datasheet</button></div>';

}

function applyDetType(_IdCalled){
	Roster.dets[_IdCalled].type = document.getElementById("detachementTypeSelector").value;
	for(i=0; i<detdict.length;i++){
		//Copying the dictionary var into ourself
		if(Roster.dets[_IdCalled].type == detdict[i].name){
			Roster.dets[_IdCalled].det = detdict[i];
		}
	}
	
	//Transforming the dictionary var into interface data
	
	if(Roster.dets[_IdCalled].det.CP < 0){
		Roster.dets[_IdCalled].ICP = ''+ Roster.dets[_IdCalled].det.CP +'CP';
	} else {
		Roster.dets[_IdCalled].ICP = '+'+ Roster.dets[_IdCalled].det.CP +'CP';
	}
	
	//Refresh the display
	refreshArmyListDisplay();
	populateDetachment(_IdCalled);
	
}

function applyDetFaction(_IdCalled){
	Roster.dets[_IdCalled].faction = document.getElementById("detachementFactionSelector").value;
	
	//Refresh the display
	refreshArmyListDisplay();
	populateDetachment(_IdCalled);
	
}


//==========================================================
//=============  BUILD HTML FROM JS OBJECT =================
//==========================================================

function refreshArmyListDisplay(){
	
	I_RosterRoot = document.getElementById("RosterRoot");
	while (I_RosterRoot.firstChild) {
		I_RosterRoot.removeChild(I_RosterRoot.firstChild);
	}
	
	cleanActiveI();
	
	//Init of the html content
	I_RosterRoot.innerHTML = '<div class="selectableClass" id="ArmyNameBox" onclick="populateArmyDetail()"><span class="inl">][&nbsp;</span><span class="inl" id="armyName">'+ Roster.name + '</span><span class="inl">&nbsp;][ +3CP</span></div>';
	
	var tmpDiv = {};
	for(i=0; i<Roster.dets.length;i++){ //Populating Detachments
		tmpDiv = document.createElement('div');
		tmpDiv.innerHTML = '<div class="selectableClass" id="Detachment'+i+'" onclick="populateDetachment('+i+')"><div class="inl greentext"><span class="inl">></span><span id="DetachmentType'+i+'">' + Roster.dets[i].type + '</span><span>&nbsp;<span id="commonKeyword'+i+'">' + Roster.dets[i].faction + '</span><span>&nbsp;</span><span id="CPBonus'+i+'">' + Roster.dets[i].ICP + '</span></div></div>';
		I_RosterRoot.appendChild(tmpDiv);
	}
	
}


//==========================================================
//=============================  IMPORT ====================
//==========================================================

function importPopup() {	
	var I_imp = document.getElementById("importDiv"); 
	var I_ButtonImportPopup =  document.getElementById("importButton");	
	if (I_imp.style.display === "none") { 
		I_ButtonImportPopup.innerText = "Hide Import Dialog";
		I_imp.style.display = "block";
	} else { 
		I_ButtonImportPopup.innerText = "Show Import Dialog";
		I_imp.style.display = "none";	
	}
} 


var I_textareaImporter;
function startImport(){
	I_textareaImporter =  document.getElementById("importTextArea");
	importFromString(I_textareaImporter.value);
}

function importFromString(_ImportString){
	
	console.log("Beginning Import...");
	
	Roster = {};
	Roster.name = "";
	Roster.dets = [];
	
	var _lines = _ImportString.split('\n');

	//Checking the first line and grabbing army name
	if(_lines[0].startsWith("][ ")){
		Roster.name = _lines[0].split("][")[1].trim();
		console.log("Army name : " + Roster.name);
	} else {
		alert("Your army list doens't start with the ][ characters at line " + 1 +" :\n" + (_lines[0]));
		generateNewRoster();
		return;
	}
	
	var detIdx=0; //The detachment index start at 0;
	
	var tmpline;
	var tmpword;
	//We are now gonna start the line by line parsing
	for(lidx=1; lidx<_lines.length;lidx++){
		if(_lines[lidx].startsWith(">")){ //Detachment detected
			
			//Adding a new det in the roster object
			var empty = {};
			Roster.dets.push(empty);
			detIdx = Roster.dets.length -1;
			
			//Parsing
			tmpline = _lines[lidx].substr(1); //Removing the meme arrow
			tmpword = tmpline.substr(0, tmpline.indexOf("Detachment")) + "Detachment";
			
			//Adding the roster type
			Roster.dets[detIdx].type = tmpword;
			

			//Checking if the formation is found in the dictionnary
			Roster.dets[detIdx].det = null;
			for(i=0; i<detdict.length;i++){
				//Copying the dictionary var into ourself and intializing the display variables
				if(Roster.dets[detIdx].type == detdict[i].name){
					Roster.dets[detIdx].det = detdict[i];
					if(Roster.dets[detIdx].det.CP < 0){
						Roster.dets[detIdx].ICP = ''+ Roster.dets[detIdx].det.CP +'CP';
					} else {
						Roster.dets[detIdx].ICP = '+'+ Roster.dets[detIdx].det.CP +'CP';
					}
					break;
				}
			}
			if(	Roster.dets[detIdx].det == null){
				alert("Did not found any matching detachment formation for '"+ tmpword +"' at line " + (lidx + 1) +" :\n" + (_lines[lidx]));
				generateNewRoster();
				return;
			}
			
			
			//Adding the keyword
			tmpword = tmpline.substr(tmpline.indexOf("Detachment") + "Detachment".length);
			
			//Checking if the amount of CP is correct 
			if(tmpword.indexOf(Roster.dets[detIdx].ICP) == -1){
				alert("Incorrect number of CP for the '"+  Roster.dets[detIdx].type +"' at line " + (lidx + 1) +" :\n" + (_lines[lidx]) +"\n\n" + Roster.dets[detIdx].ICP + " was expected.");
				generateNewRoster();
				return;
			}
			
			Roster.dets[detIdx].faction = tmpword.substr(0, tmpword.indexOf(Roster.dets[detIdx].ICP)).trim();
			
			
			console.log("Adding " + Roster.dets[detIdx].type + " " + Roster.dets[detIdx].faction + "...");
			
			
		}
		
		
	}
	
	
	
	//Refreshing the display
	refreshArmyListDisplay();
	I_DataRoot = document.getElementById("DataRoot");
	I_DataRoot.innerHTML ="<p>Import Done</p>";
}

//=============  DATASHEET DISPLAY ================

var dtdsp;
var I_DataSheetRoot;
var tmprule;
function displayDatasheet(_name){
	
	//Cleaning the board
	I_DataSheetRoot = document.getElementById("DatasheetRoot");
	while (I_DataSheetRoot.firstChild) {
		I_DataSheetRoot.removeChild(I_DataSheetRoot.firstChild);
	}
	
	//Grabbing the relevant datasheet in the dictionnary
	dtdsp = null;
	dtdsp = sheetdict[_name];
	
	//Case we can't find any match 
	if(dtdsp == null){
		var tmpDiv = {};
		tmpDiv = document.createElement('div');
		tmpDiv.innerHTML = "Error : Can't find a datasheet with the name : " + _name;
		I_DataSheetRoot.appendChild(tmpDiv);
		return;
	}
	
	
	//If we have found a match, let's start building.
	var dtstxt = "";
	dtstxt += '<div class="roleicon ' + dtdsp.role + '"></div>';
	dtstxt +=  '<b>' + dtdsp.name +'</b> - '+ dtdsp.PL +'PL <br><hr>';
	dtstxt +=  '<div><div class="profilecontainerRow"><div class="profileContainerFirst"><b>Name</b></div><div class="profileContainerElem"><b>M</b></div><div class="profileContainerElem"><b>WS</b></div><div class="profileContainerElem"><b>BS</b></div><div class="profileContainerElem"><b>S</b></div><div class="profileContainerElem"><b>T</b></div><div class="profileContainerElem"><b>W</b></div><div class="profileContainerElem"><b>A</b></div><div class="profileContainerElem"><b>Ld</b></div><div class="profileContainerElem"><b>Sv</b></div></div>';
	
	//Display of the model profiles 
	for(i=0; i<dtdsp.profiles.length;i++){
		dtstxt +=  '<div class="modelProfile whitehoverable"><div class="profilecontainerRow"><div class="profileContainerFirst">'+ dtdsp.profiles[i].name +'</div><div class="profileContainerElem">'+ dtdsp.profiles[i].m +'</div><div class="profileContainerElem">'+ dtdsp.profiles[i].ws +'</div><div class="profileContainerElem">'+ dtdsp.profiles[i].bs +'</div><div class="profileContainerElem">'+ dtdsp.profiles[i].s +'</div><div class="profileContainerElem">'+ dtdsp.profiles[i].t +'</div><div class="profileContainerElem">'+ dtdsp.profiles[i].w +'</div><div class="profileContainerElem">'+ dtdsp.profiles[i].a +'</div><div class="profileContainerElem">'+ dtdsp.profiles[i].ld +'</div><div class="profileContainerElem">'+ dtdsp.profiles[i].sv +'</div></div></div>';
	}
	
	//Wargear
	dtstxt += '<hr><div class="wargearSection">' + dtdsp.wargeartext.replace(/(?:\r\n|\r|\n)/g, '<br>'); +'</div>';
	
	//Wargear options
	dtstxt += '<hr><div class="wargearoptionsSection"><b>Wargear options</b><br>' + dtdsp.wargearoptionstext.replace(/(?:\r\n|\r|\n)/g, '<br>') +'</div>';
	

	//Abilites
	dtstxt += '<hr><div class="abilitieSection"><b>Abilities </b><br>';
	for(i=0; i<dtdsp.abilities.length;i++){
		dtstxt += '<div class="whitehoverable"><span class="AbilityName">§ <b>' +  dtdsp.abilities[i].name + '</b></span> : '+ dtdsp.abilities[i].content +'</div>';
		
	}
	dtstxt += '</div>';
	
	//Faction Keywords
	dtstxt += '<hr><div class="factionKeywordsSection"><b>Faction keywords</b><br>';
	for(i=0; i<dtdsp.factionkeywords.length;i++){
		if(dtdsp.factionkeywords[i].aliases != null){
			dtstxt += '<span class="whitehoverable">&#8249;' + dtdsp.factionkeywords[i].name  +'&#8250;</span>';
		} else {
			dtstxt += '<span class="whitehoverable">' + dtdsp.factionkeywords[i].name  +'</span>';
		}
		

		if(i+1 <dtdsp.factionkeywords.length){
			dtstxt += ', ';
		}
	}
	dtstxt += '</div>';
	
	//Keywords
	dtstxt += '<hr><div class="generickeywordssection"><b>Keywords</b><br>';
	for(i=0; i<dtdsp.keywords.length;i++){
		if(dtdsp.keywords[i].aliases != null){
			dtstxt += '<span class="whitehoverable">&#8249;' + dtdsp.keywords[i].name  +'&#8250;</span>';
		} else {
			dtstxt += '<span class="whitehoverable">' + dtdsp.keywords[i].name  +'</span>';
		}
		

		if(i+1 <dtdsp.keywords.length){
			dtstxt += ', ';
		}
	}
	dtstxt += '</div>';
	
	//Weapons
	dtstxt += '<hr><div class="weaponsection"><div class="profilecontainerRow"><div class="weaponContainerName"><b>Weapon</b></div><div class="weaponContainerRange"><b>Range</b></div><div class="weaponContainerType"><b>Type</b></div><div class="weaponContainerS"><b>S</b></div><div class="weaponContainerAP"><b>AP</b></div><div class="weaponContainerD"><b>D</b></div><div class="weaponContainerAbi"><b>Abilities</b></div></div>';
	for(i=0; i<dtdsp.weapons.length;i++){
		dtstxt += '<div class="aWeaponBox">';
		//Simplest case : neither combi or dual profile
		if(!(dtdsp.weapons[i].combi || dtdsp.weapons[i].chooseone)){
			dtstxt += '<div class="profilecontainerRow"><div class="weaponContainerName">'+ dtdsp.weapons[i].p[0].name +'</div><div class="weaponContainerRange">'+ dtdsp.weapons[i].p[0].range +'"</div><div class="weaponContainerType">'+ dtdsp.weapons[i].p[0].type +'</div><div class="weaponContainerS">'+ dtdsp.weapons[i].p[0].s +'</div><div class="weaponContainerAP">'+ dtdsp.weapons[i].p[0].ap +'</div><div class="weaponContainerD">'+ dtdsp.weapons[i].p[0].d +'</div><div class="weaponContainerAbi">'+ dtdsp.weapons[i].p[0].abilities +'</div></div>';
		} else if(dtdsp.weapons[i].combi){
			dtstxt += '<div class="profilecontainerRow"><div class="weaponContainerName">'+dtdsp.weapons[i].name +'</div><div class="weaponContainerNotes">When attacking with this weapon, choose one or both of the profiles below. If you choose both, substract 1 from all hit rolls for this weapon</div></div>';
			dtstxt += '<div class="profilecontainerRow"><div class="weaponContainerName">&nbsp;'+ dtdsp.weapons[i].p[0].name +'</div><div class="weaponContainerRange">'+ dtdsp.weapons[i].p[0].range +'"</div><div class="weaponContainerType">'+ dtdsp.weapons[i].p[0].type +'</div><div class="weaponContainerS">'+ dtdsp.weapons[i].p[0].s +'</div><div class="weaponContainerAP">'+ dtdsp.weapons[i].p[0].ap +'</div><div class="weaponContainerD">'+ dtdsp.weapons[i].p[0].d +'</div><div class="weaponContainerAbi">'+ dtdsp.weapons[i].p[0].abilities +'</div></div>';
			dtstxt += '<div class="profilecontainerRow"><div class="weaponContainerName">&nbsp;'+ dtdsp.weapons[i].p[1].name +'</div><div class="weaponContainerRange">'+ dtdsp.weapons[i].p[1].range +'"</div><div class="weaponContainerType">'+ dtdsp.weapons[i].p[1].type +'</div><div class="weaponContainerS">'+ dtdsp.weapons[i].p[1].s +'</div><div class="weaponContainerAP">'+ dtdsp.weapons[i].p[1].ap +'</div><div class="weaponContainerD">'+ dtdsp.weapons[i].p[1].d +'</div><div class="weaponContainerAbi">'+ dtdsp.weapons[i].p[1].abilities +'</div></div>';
		} else {
			dtstxt += '<div class="profilecontainerRow"><div class="weaponContainerName">' + dtdsp.weapons[i].name + '</div><div class="weaponContainerNotes">When attacking with this weapon, choose one of the profiles below.</div></div>';
			dtstxt += '<div class="profilecontainerRow"><div class="weaponContainerName">&nbsp;'+ dtdsp.weapons[i].p[0].name +'</div><div class="weaponContainerRange">'+ dtdsp.weapons[i].p[0].range +'"</div><div class="weaponContainerType">'+ dtdsp.weapons[i].p[0].type +'</div><div class="weaponContainerS">'+ dtdsp.weapons[i].p[0].s +'</div><div class="weaponContainerAP">'+ dtdsp.weapons[i].p[0].ap +'</div><div class="weaponContainerD">'+ dtdsp.weapons[i].p[0].d +'</div><div class="weaponContainerAbi">'+ dtdsp.weapons[i].p[0].abilities +'</div></div>';
			dtstxt += '<div class="profilecontainerRow"><div class="weaponContainerName">&nbsp;'+ dtdsp.weapons[i].p[1].name +'</div><div class="weaponContainerRange">'+ dtdsp.weapons[i].p[1].range +'"</div><div class="weaponContainerType">'+ dtdsp.weapons[i].p[1].type +'</div><div class="weaponContainerS">'+ dtdsp.weapons[i].p[1].s +'</div><div class="weaponContainerAP">'+ dtdsp.weapons[i].p[1].ap +'</div><div class="weaponContainerD">'+ dtdsp.weapons[i].p[1].d +'</div><div class="weaponContainerAbi">'+ dtdsp.weapons[i].p[1].abilities +'</div></div>';
		}
		dtstxt += '</div>';
	}
	dtstxt += '</div>';
	
	//Rules
	dtstxt += '<hr><div class="rulesSection"><b>Applicable Rules </b><br>';
	for(i=0; i<dtdsp.rulekeys.length;i++){
		
		console.log(dtdsp.rulekeys[i]);
		tmprule = rules[dtdsp.rulekeys[i]];
		dtstxt += '<div class="whitehoverable"><span class="RuleName"><b>§ ' +  tmprule.key + '</b></span> :<br> '+  tmprule.content.replace(/(?:\r\n|\r|\n)/g, '<br>');
		//If there is a comment on the rules
		if(!(tmprule.comment == null || tmprule.comment ==  '')){
			dtstxt += '<br>*' + tmprule.comment.replace(/(?:\r\n|\r|\n)/g, '<br>');
			
		}
		dtstxt += '<br><i>' + tmprule.source +'</i></div><br>';
		
	}
	dtstxt += '</div>';
	
	//And finally, let's display ourselves : 
	var tmpDiv = {};
	tmpDiv = document.createElement('div');
	tmpDiv.innerHTML = dtstxt;
	I_DataSheetRoot.appendChild(tmpDiv);
}



function devtest(){
	displayDatasheet("Infantry Squad");
}