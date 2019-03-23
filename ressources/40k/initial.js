/* Setup file where common data structures are being initialized for everyone  */

console.log("Loading common data...");

/* 
===============================================================================


								DETACHMENT SETUP
								
								
===============================================================================
*/
 
var detdict = []; //Detachement dictionnary
var det = {};

function Detachement(name, CP, LoWMin, LoWMax, HQMin, HQMax, TroopsMin, TroopsMax, ElitesMin, ElitesMax, FastAttackMin, FastAttackMax, HeavySupportMin, HeavySupportMax, FlyersMin, FlyersMax, FortMin, FortMax, slotsMax, DedicatedTransport){
	this.name = name;
	this.CP = CP;
	this.LoWMin = LoWMin;
	this.LoWMax = LoWMax;
	this.HQMin = HQMin;
	this.HQMax = HQMax;
	this.TroopsMin = TroopsMin;
	this.TroopsMax = TroopsMax;
	this.ElitesMin = ElitesMin;
	this.ElitesMax = ElitesMax;
	this.FastAttackMin = FastAttackMin;
	this.FastAttackMax = FastAttackMax;
	this.HeavySupportMin = HeavySupportMin;
	this.HeavySupportMax = HeavySupportMax;
	this.FlyersMin = FlyersMin;
	this.FlyersMax = FlyersMax;
	this.FortMin = FortMin;
	this.FortMax = FortMax;
	this.slotsMax = slotsMax;
	this.DedicatedTransport = DedicatedTransport;
	detdict.push(this);
}

det = new Detachement('Patrol Detachment', 0, 0, 0, 1, 2, 1, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, -1, true);
det = new Detachement('Battalion Detachment', 5, 0, 0, 2, 3, 3, 6, 0, 6, 0, 3, 0, 3, 0, 2, 0, 0, -1, true);

det = {};
det.name = 'Brigade Detachment';
det.CP = 12;
det.LoWMin = 0;
det.LoWMax = 0;
det.HQMin = 3;
det.HQMax = 5;
det.TroopsMin = 6;
det.TroopsMax = 12;
det.ElitesMin = 3;
det.ElitesMax = 8;
det.FastAttackMin = 3;
det.FastAttackMax = 5;
det.HeavySupportMin = 3;
det.HeavySupportMax = 5;
det.FlyersMin = 0;
det.FlyersMax = 2;
det.FortMin = 0;
det.FortMax = 0;
det.slotsMax = -1;
det.DedicatedTransport = true;
detdict.push(det);

det = {};
det.name = 'Vanguard Detachment';
det.CP = 1;
det.LoWMin = 0;
det.LoWMax = 0;
det.HQMin = 1;
det.HQMax = 2;
det.TroopsMin = 0;
det.TroopsMax = 3;
det.ElitesMin = 3;
det.ElitesMax = 6;
det.FastAttackMin = 0;
det.FastAttackMax = 2;
det.HeavySupportMin = 0;
det.HeavySupportMax = 2;
det.FlyersMin = 0;
det.FlyersMax = 2;
det.FortMin = 0;
det.FortMax = 0;
det.slotsMax = -1;
det.DedicatedTransport = true;
detdict.push(det);

det = {};
det.name = 'Spearhead Detachment';
det.CP = 1;
det.LoWMin = 0;
det.LoWMax = 0;
det.HQMin = 1;
det.HQMax = 2;
det.TroopsMin = 0;
det.TroopsMax = 3;
det.ElitesMin = 0;
det.ElitesMax = 2;
det.FastAttackMin = 0;
det.FastAttackMax = 2;
det.HeavySupportMin = 3;
det.HeavySupportMax = 6;
det.FlyersMin = 0;
det.FlyersMax = 2;
det.FortMin = 0;
det.FortMax = 0;
det.slotsMax = -1;
det.DedicatedTransport = true;
detdict.push(det);

det = {};
det.name = 'Outrider Detachment';
det.CP = 1;
det.LoWMin = 0;
det.LoWMax = 0;
det.HQMin = 1;
det.HQMax = 2;
det.TroopsMin = 0;
det.TroopsMax = 3;
det.ElitesMin = 0;
det.ElitesMax = 2;
det.FastAttackMin = 3;
det.FastAttackMax = 6;
det.HeavySupportMin = 0;
det.HeavySupportMax = 2;
det.FlyersMin = 0;
det.FlyersMax = 2;
det.FortMin = 0;
det.FortMax = 0;
det.slotsMax = -1;
det.DedicatedTransport = true;
detdict.push(det);

det = {};
det.name = 'Supreme Command Detachment';
det.CP = 1;
det.LoWMin = 0;
det.LoWMax = 1;
det.HQMin = 3;
det.HQMax = 5;
det.TroopsMin = 0;
det.TroopsMax = 0;
det.ElitesMin = 0;
det.ElitesMax = 1;
det.FastAttackMin = 0;
det.FastAttackMax = 0;
det.HeavySupportMin = 0;
det.HeavySupportMax = 0;
det.FlyersMin = 0;
det.FlyersMax = 0;
det.FortMin = 0;
det.FortMax = 0;
det.slotsMax = -1;
det.DedicatedTransport = true;
detdict.push(det);

det = {};
det.name = 'Super-Heavy Detachment';
det.CP = 3;
det.LoWMin = 3;
det.LoWMax = 5;
det.HQMin = 0;
det.HQMax = 0;
det.TroopsMin = 0;
det.TroopsMax = 0;
det.ElitesMin = 0;
det.ElitesMax = 0;
det.FastAttackMin = 0;
det.FastAttackMax = 0;
det.HeavySupportMin = 0;
det.HeavySupportMax = 0;
det.FlyersMin = 0;
det.FlyersMax = 0;
det.FortMin = 0;
det.FortMax = 0;
det.slotsMax = -1;
det.DedicatedTransport = false;
detdict.push(det);

det = {};
det.name = 'Air Wing Detachment';
det.CP = 1;
det.LoWMin = 0;
det.LoWMax = 0;
det.HQMin = 0;
det.HQMax = 0;
det.TroopsMin = 0;
det.TroopsMax = 0;
det.ElitesMin = 0;
det.ElitesMax = 0;
det.FastAttackMin = 0;
det.FastAttackMax = 0;
det.HeavySupportMin = 0;
det.HeavySupportMax = 0;
det.FlyersMin = 3;
det.FlyersMax = 5;
det.FortMin = 0;
det.FortMax = 0;
det.slotsMax = -1;
det.DedicatedTransport = false;
detdict.push(det);

det = {};
det.name = 'Super-Heavy Auxiliary Detachment';
det.CP = 0;
det.LoWMin = 1;
det.LoWMax = 1;
det.HQMin = 0;
det.HQMax = 0;
det.TroopsMin = 0;
det.TroopsMax = 0;
det.ElitesMin = 0;
det.ElitesMax = 0;
det.FastAttackMin = 0;
det.FastAttackMax = 0;
det.HeavySupportMin = 0;
det.HeavySupportMax = 0;
det.FlyersMin = 0;
det.FlyersMax = 0;
det.FortMin = 0;
det.FortMax = 0;
det.slotsMax = -1;
det.DedicatedTransport = false;
detdict.push(det);

det = {};
det.name = 'Fortification Network';
det.CP = 0;
det.LoWMin = 0;
det.LoWMax = 0;
det.HQMin = 0;
det.HQMax = 0;
det.TroopsMin = 0;
det.TroopsMax = 0;
det.ElitesMin = 0;
det.ElitesMax = 0;
det.FastAttackMin = 0;
det.FastAttackMax = 0;
det.HeavySupportMin = 0;
det.HeavySupportMax = 0;
det.FlyersMin = 0;
det.FlyersMax = 0;
det.FortMin = 1;
det.FortMax = 3;
det.slotsMax = -1;
det.DedicatedTransport = false;
detdict.push(det);


det = {};
det.name = 'Auxiliary Support Detachment';
det.CP = -1;
det.LoWMin = 0;
det.LoWMax = 0;
det.HQMin = 0;
det.HQMax = 1;
det.TroopsMin = 0;
det.TroopsMax = 1;
det.ElitesMin = 0;
det.ElitesMax = 1;
det.FastAttackMin = 0;
det.FastAttackMax = 1;
det.HeavySupportMin = 0;
det.HeavySupportMax = 1;
det.FlyersMin = 0;
det.FlyersMax = 0;
det.FortMin = 0;
det.FortMax = 0;
det.slotsMax = 1;
det.DedicatedTransport = false;
detdict.push(det);





/* 
===============================================================================


								KEYWORDS SETUP
								
								
===============================================================================
*/

/* Structure of a keyword "k"

k.name : string representing the keyword name. E.G : IMPERIUM
k.faction : a bool reprenting if the keyword can be used for detachment building. 
			false for INFANTRY, true for ADEPTUS MINISTORUM
k.aliases : a list of string which are alias of this keyword ex : k.name = CHAPTER
			k.aliases = ULTRAMARINES, CRIMSON FISTS, etc
k.aliasof : a string reprenting the keyword this keyword is an alias of. example : 
			k.name = ULTRAMARINES, k.aliasof = CHAPTER


*/

var kdict = []; //Keyword dictionnary
var k; //Keyword builder variable 
function Keyword(name, faction, aliases, aliasof){
	this.name = name;
	this.faction = faction;
	this.aliases = aliases;
	this.aliasof = aliasof;
	kdict[this.name] = this;
}


/* 
===============================================================================
								GENERIC KEYWORDS
===============================================================================
*/

k = new Keyword("CHARACTER",false, null, null);
k = new Keyword("INFANTRY",false, null, null);
k = new Keyword("VEHICLE",false, null, null);
k = new Keyword("TRANSPORT",false, null, null);
k = new Keyword("MONSTER",false, null, null);


/* 
===============================================================================
								FACTION KEYWORDS
===============================================================================
*/

k = new Keyword("IMPERIUM",true, null, null);
k = new Keyword("ASTRA MILITARUM",true, null, null);
k = new Keyword("REGIMENT",true, [], null);
k = new Keyword("CHAOS",true, null, null);




/* 
===============================================================================
					FACTION KEYWORD ORDERED DICTIONARY
===============================================================================
*/

var kfdict = [];

function populateFactionDic(){
	
	console.log("Populating Faction Dictionary...");
	
	kfdict = [];
	//console.log(kfdict);
	
	function _populateFactionDic_compare(_a, _b){
		return _a.name > _b.name;
	}
	
	Object.entries(kdict).forEach(function(_elem, _idx){
		//console.log(_elem[1].name);
		if(_elem[1].faction == true){
			kfdict.push(_elem[1]);
		}
	});
	kfdict.sort(_populateFactionDic_compare);
	
	
}

//populateFactionDic();



/* 
===============================================================================
            
								RULES SETUP
								
===============================================================================
*/

/*


All the core rules can be an option for export when printing your army, but all the players
are expected to know them and hence there should be no assymetrie of information.

Datasheet rules should be printed and exported, but those are easy to source as they 
are clearly referenced by each of the datasheet you are using when building your army.

Finally, the last kind of rule is a whole different difficulty. They are not easy to reference,
relevant on a roster basis only, but should be exported and applied as they are most likely
a source of information assymetry.

Hence, such rules are storred in a dictionnary and picking datasheet or options (Warlord trait,
stratagems, etc...) that would make them apply will print them out.

*/

/*
Rule r structure : 
r.key : the name with which the rule is stored in the array
r.content : the content of the rule
r.source : where to find this rule
r.comment : additional data of the rules needing to be printed out


*/

var rules = [];
var r = {};


/* 
===============================================================================


								ABILITIES SETUP
								
								
===============================================================================
*/

/*

abi.name . name of the ability
abi.content : text of the ability
abi.source : where to find the ability
abi.rules : [] => Specific rules that comes along this ability;
abi.common : bool if the ability is common or exclusive to the datasheet

*/

var abilitiesdict = [];
var abi = {};

function Ability(name, content, source, rules, addDict){
	this.name = name;
	this.content = content;
	this.source = source;
	this.rules = rules;
	if(addDict){
		abilitiesdict[name] = this;
	}
}




/* 
===============================================================================


								STRATAGEMS SETUP
								
								
===============================================================================
*/

/* Structure of a stratagem "st"

st.name : string representing the stratagem name
st.cost : string representing cost in CP
st.faction : keyword that must be shared by at least a detachement of your army to unlock this stratagem. 
			null if available to every faction.
st.when : string telling players when to use this stratagem (eg. end of move phase, pre battle, etc...)
st.restriction : restriction on target faction : eg : Vostroyan stratagem
st.content : text of the stratagem as it appears in the rulebook
st.source : origin of the stratagem. eg : Codex Astra Militarum p96, 25/02/2018 FAQ.
st.rules : special rule that should apply when selecting this stratagem

*/

var stdict = []; //All stratagems array
var st = {}; //Stratagem build var

/* 
===============================================================================


								WEAPONS SETUP
								
								
===============================================================================
*/

/*

A lot of weapons are shared among units of the game. When they divert, it is mostly by cost,
not by profile. GW so far has been consistent in associating a weapon profile per weapon name.
Hence, rather than typing a bolter or frag grenade profile hundred of times, datasheet can 
directly pull weapons profiles from a dictionnary.

*/

var weapondict = []; //All Weapons Array
var w = {}
var wp = {};

function WeaponProfile(name, range, type, s, ap, d, abilities){
	this.name = name;
	this.range = range;
	this.type = type;
	this.s = s;
	this.ap = ap;
	this.d = d;
	this.abilities = abilities;
}

function Weapon(name, p, combi, chooseone, source){
	this.name = name;
	this.p = p;
	this.combi = combi;
	this.chooseone = chooseone;
	this.source = source;
	weapondict[this.name] = this;
}

w = new Weapon('Autocannon',[new WeaponProfile('Autocannon','48"','Heavy 2',7,-1,2,'-')],false, false, '"CODEX ASTRA MILITARUM" p.126');

w = {};
wp = {}
w.name = 'Autogun';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = 'Autogun';
wp.range = '24"';
wp.type = 'Rapid Fire 1';
wp.s = '3';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Bolt pistol';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '12"';
wp.type = 'Pistol 1';
wp.s = '4';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Boltgun';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '24"';
wp.type = 'Rapid Fire 1';
wp.s = '4';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Flamer';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '8"';
wp.type = 'Assault D6';
wp.s = '4';
wp.ap = '0';
wp.d = '1';
wp.abilities = 'This weapon automatically hits its target';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Frag grenade';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '6"';
wp.type = 'Grenade D6';
wp.s = '3';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Grenade launcher';
w.p = [];
w.combi = false;
w.chooseone = true;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = 'Frag grenade';
wp.range = '24"';
wp.type = 'Assault D6';
wp.s = '3';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
wp = {};
wp.name = 'Krak grenade';
wp.range = '24"';
wp.type = 'Assault 1';
wp.s = '6';
wp.ap = '-1';
wp.d = 'D3';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Heavy bolter';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '36"';
wp.type = 'Heavy 3';
wp.s = '5';
wp.ap = '-1';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Heavy flamer';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '8"';
wp.type = 'Heavy D6';
wp.s = '5';
wp.ap = '-1';
wp.d = '1';
wp.abilities = 'This weapon automatically hits its target.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Heavy stubber';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '36"';
wp.type = 'Heavy 3';
wp.s = '4';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'krak grenade';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '6"';
wp.type = 'Grenade 1';
wp.s = '6';
wp.ap = '-1';
wp.d = 'D3';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Lascannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '48"';
wp.type = 'Heavy 1';
wp.s = '9';
wp.ap = '-3';
wp.d = 'D6';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Lasgun';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '24"';
wp.type = 'Rapid Fire 1';
wp.s = '3';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;


w = {};
wp = {}
w.name = 'Laspistol';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '12"';
wp.type = 'Pistol 1';
wp.s = '3';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Meltagun';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '12"';
wp.type = 'Assault 1';
wp.s = '8';
wp.ap = '-4';
wp.d = 'D6';
wp.abilities = 'If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Missile launcher';
w.p = [];
w.combi = false;
w.chooseone = true;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = 'Frag missile';
wp.range = '48"';
wp.type = 'Heavy D6';
wp.s = '4';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
wp = {};
wp.name = 'Krak missile';
wp.range = '48"';
wp.type = 'Heavy 1';
wp.s = '8';
wp.ap = '-2';
wp.d = 'D6';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Multi-melta';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '24"';
wp.type = 'Heavy 1';
wp.s = '8';
wp.ap = '-4';
wp.d = 'D6';
wp.abilities = 'If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Plasma cannon';
w.p = [];
w.combi = false;
w.chooseone = true;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = 'Standard';
wp.range = '36"';
wp.type = 'Heavy D3';
wp.s = '7';
wp.ap = '-3';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
wp = {};
wp.name = 'Supercharge';
wp.range = '36"';
wp.type = 'Heavy D3';
wp.s = '8';
wp.ap = '-3';
wp.d = '2';
wp.abilities = 'On a hit roll of 1, the bearer is slain after all of this weapon’s shots have been resolved.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Plasma gun';
w.p = [];
w.combi = false;
w.chooseone = true;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = 'Standard';
wp.range = '24"';
wp.type = 'Rapid Fire 1';
wp.s = '7';
wp.ap = '-3';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
wp = {};
wp.name = 'Supercharge';
wp.range = '24"';
wp.type = 'Rapid Fire 1';
wp.s = '8';
wp.ap = '-3';
wp.d = '2';
wp.abilities = 'On a hit roll of 1, the bearer is slain after all of this weapon’s shots have been resolved.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Plasma pistol';
w.p = [];
w.combi = false;
w.chooseone = true;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = 'Standard';
wp.range = '12"';
wp.type = 'Pistol 1';
wp.s = '7';
wp.ap = '-3';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
wp = {};
wp.name = 'Supercharge';
wp.range = '12"';
wp.type = 'Pistol 1';
wp.s = '8';
wp.ap = '-3';
wp.d = '2';
wp.abilities = 'On a hit roll of 1, the bearer is slain.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Shotgun';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '12"';
wp.type = 'Assault 2';
wp.s = '3';
wp.ap = '0';
wp.d = '1';
wp.abilities = 'If the target is within half range, add 1 to this weapon’s Strength';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Sniper rifle';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '36"';
wp.type = 'Heavy 1';
wp.s = '4';
wp.ap = '0';
wp.d = '1';
wp.abilities = 'A model firing a sniper weapon can target an enemy CHARACTER even if they are not the closest enemy unit. If you roll a wound roll of 6+ for this weapon, it inflicts a mortal wound in addition to its normal damage';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Storm Bolter';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '24"';
wp.type = 'Rapid Fire 2';
wp.s = '4';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Twin heavy bolter';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '36"';
wp.type = 'Heavy 6';
wp.s = '5';
wp.ap = '-1';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Twin heavy Flamer';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '8"';
wp.type = 'Heavy 2D6';
wp.s = '5';
wp.ap = '-1';
wp.d = '1';
wp.abilities = 'This weapon automatically hits its target.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Vulcan mega-bolter';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '60"';
wp.type = 'Heavy 20';
wp.s = '6';
wp.ap = '-2';
wp.d = '2';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Adamantium tracks';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = 'User';
wp.ap = '-2';
wp.d = 'D3';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Chainsword';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = 'User';
wp.ap = '0';
wp.d = '1';
wp.abilities = 'Each time the bearer fights, it can make 1 additional attack with this weapon';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Force stave';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = '+2';
wp.ap = '-1';
wp.d = 'D3';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Omnissian axe';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = '+1';
wp.ap = '-2';
wp.d = '2';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Power fist';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = 'x2';
wp.ap = '-3';
wp.d = 'D3';
wp.abilities = 'When attacking with this weapon, you must subtract 1 from the hit roll.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Power klaw';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = 'x2';
wp.ap = '-3';
wp.d = 'D3';
wp.abilities = 'When attacking with this weapon, you must subtract 1 from the hit roll.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Power sword';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = 'User';
wp.ap = '-3';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Power maul';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"INDEX: IMPERIUM 2" p.146';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = '+2';
wp.ap = '-1';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Power lance';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"INDEX: IMPERIUM 2" p.146';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = '+2';
wp.ap = '-1';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Power axe';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"INDEX: IMPERIUM 2" p.146';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = '+1';
wp.ap = '-2';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;


w = {};
wp = {}
w.name = 'Servo-arm';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = 'x2';
wp.ap = '-3';
wp.d = '3';
wp.abilities = 'Each servo-arm can only be used to make one attack each time this model fights. When a model attacks with this weapon, you must subtract 1 from the hit roll.';
w.p.push(wp);
weapondict[w.name] = w;

/* 
===============================================================================


								DATASHEET SETUP
								
								
===============================================================================
*/


var sheetdict = []; //All Datasheet Array
var sheet = {}
var modelp = {};




