/*

This file will add the Codex Astra Militarum rules, stratagems and datasheet to tg army builder


*/

console.log("Loading Astra Militarum Codex...");

/* 
===============================================================================
								FACTION KEYWORDS
===============================================================================
*/

k = {};
k.name = "CADIAN"
k.faction = true;
k.aliases = null;
k.aliasof = "REGIMENT";
kdict["CADIAN"] = k;
kdict["REGIMENT"].aliases.push(k);

k = {};
k.name = "CATACHAN"
k.faction = true;
k.aliases = null;
k.aliasof = "REGIMENT";
kdict["CATACHAN"] = k;
kdict["REGIMENT"].aliases.push(k);

k = {};
k.name = "VALHALLAN"
k.faction = true;
k.aliases = null;
k.aliasof = "REGIMENT";
kdict["VALHALLAN"] = k;
kdict["REGIMENT"].aliases.push(k);


k = {};
k.name = "VOSTROYAN"
k.faction = true;
k.aliases = null;
k.aliasof = "REGIMENT";
kdict["VOSTROYAN"] = k;
kdict["REGIMENT"].aliases.push(k);

k = {};
k.name = "ARMAGEDDON"
k.faction = true;
k.aliases = null;
k.aliasof = "REGIMENT";
kdict["ARMAGEDDON"] = k;
kdict["REGIMENT"].aliases.push(k);

k = {};
k.name = "TALLARN"
k.faction = true;
k.aliases = null;
k.aliasof = "REGIMENT";
kdict["TALLARN"] = k;
kdict["REGIMENT"].aliases.push(k);

k = {};
k.name = "MORDIAN"
k.faction = true;
k.aliases = null;
k.aliasof = "REGIMENT";
kdict["MORDIAN"] = k;
kdict["REGIMENT"].aliases.push(k);

k = {};
k.name = "MILITARUM TEMPESTUS"
k.faction = true;
k.aliases = null;
k.aliasof = "REGIMENT";
kdict["MILITARUM TEMPESTUS"] = k;
//No pushing this as an ovveride alias as <Regiment> units can't be tempestus
//kdict["REGIMENT"].aliases.push(k); 

/* 
===============================================================================
								KEYWORDS
===============================================================================
*/

k = {};
k.name = "OFFICER"
k.faction = false;
k.aliases = null;
k.aliasof = null;
kdict["OFFICER"] = k;

/* 
===============================================================================
								RULES
===============================================================================
*/

r = {};
r.key = "CODEX ASTRA MILITARUM VOICE OF COMMAND ORDERS";
r.source = '"CODEX ASTRA MILITARUM" p.85, p86';
r.content = 'Take Aim! : \t\tRe-roll hit rolls of 1 for all the models in the ordered unit until the end of the phase.\nFirst Rank, Fire! Second Rank, Fire! : \t\tAll lasguns and all hot-shot lasguns in the ordered unit change their Type to Rapid Fire 2 until the end of the phase.\nBring it Down! : \t\tRe-roll wound rolls of 1 for all the models in the ordered unit until the end of the phase.\nForwards, for the Emperor! : \t\tThe ordered unit can shoot this phase even if it Advanced in its Movement phase.\nGet Back in the Fight! : \t\tThe ordered unit can shoot this phase even if it Fell Back in its Movement phase.\nMove! Move! Move! : \t\tInstead of shooting this phase the ordered unit immediately moves as if it were the Movement phase. It must Advance as part of this move, and cannot declare a charge during this turn.\nFix Bayonets! : \t\tThis order can only be issued to units that are within 1" of an enemy unit. The ordered unit immediately fights as if it were the Fight phase.\n\nCatachan => Burn Them Out! : \t\tYou can re-roll the dice when determining the number of attacks the ordered unit can make with flamers and heavy flamers until the end of the phase. In addition, units targeted by models from the ordered unit with these weapons do not gain any bonus to their saving throws for being in cover this phase.\nValhallan => Fire on My Command! : \t\tThe ordered unit can shoot at enemy units that are within 1" of friendly units until the end of the phase, but each time you roll a hit roll of 1 for such an attack, resolve that attack against a friendly unit within 1" of the target unit instead. You may choose which friendly unit is hit. This order may not be issued to a unit which is within 1" of an enemy unit.\nVostroyan => Repel the Enemy! : \t\tUntil the end of the phase, the ordered unit can fire any of its weapons while it is within 1" of the enemy, regardless of the weapon’s type. If they do so, they must target enemy units within 1", even if friendly units are within 1" of these units.\nArmageddon => Mount Up! : \t\tUntil the end of the phase, the ordered unit can shoot and then immediately embark within a friendly ARMAGEDDON TRANSPORT VEHICLE, as long as all models in the unit are within 3" of the vehicle. This order may not be issued to a unit which disembarked in the preceding Movement phase.\nMilitarum Tempestus => Elimination Protocol Sanctioned! : \t\tYou can re-roll failed wound rolls for models from the ordered unit when attacking any enemy VEHICLES or MONSTERS this phase.\nMordian => Form Firing Squad! : \t\tUntil the end of the phase, the ordered unit can target CHARACTERS with their Rapid Fire weapons, even if they are not the closest enemy unit.';
r.comment = 'Voice of Command Orders'
rules[r.key] = r;

r = {};
r.key = "CODEX ASTRA MILITARUM TANK ORDERS";
r.source = '"CODEX ASTRA MILITARUM" p.86, P88';
r.content = 'Full Throttle! : \t\tInstead of shooting this phase the ordered model immediately moves as if it were the Movement phase. It must Advance as part of this move, and cannot declare a charge during this turn.\nGunners, Kill on Sight! : \t\tRe-roll hit rolls of 1 for the ordered model until the end of the phase.\nStrike and Shroud! : \t\tThis order can only be issued to a model that has not yet used its smoke launchers during the battle. The ordered model can shoot its weapons and launch its smoke launchers during this phase\nCadian => Pound Them to Dust! : \t\tFor the duration of this phase, you can re-roll the dice when determining the number of attacks the ordered model can make with turret weapons (as described in the Grinding Advance ability above) that use a randomly determined number (e.g. Heavy D6).\nTallarn => Get Around Behind Them! : \t\tThe ordered model can move up to 6" in this phase, either before or after it shoots, as if it were the Movement phase. This does not affect how far the vehicle has moved for the purposes of determining how many times it can fire its turret weapon (as described in the Grinding Advance ability above).';
rules[r.key] = r;

r = {};
r.key = "CODEX ASTRA MILITARUM REGIMENTAL ORDERS";
r.source = '"CODEX ASTRA MILITARUM" p.86';
r.content = 'Many Astra Militarum regiments maintain specialised training regimes, tactics and even entire battlefield languages to direct their troops. The table below contains additional orders for use with the Voice of Command ability which may be used by officers with the appropriate regiment keyword. For example, CATACHAN officers may issue the Catachan ‘Burn them out!’ order in addition to any of the standard orders from the list on the previous page. Some of the orders below are noted as being Tank Orders. These may only be issued by a TANK COMMANDER with the appropriate <REGIMENT> keyword, in addition to those listed on their datasheet and using the rules for Tank Orders as described on their datasheet.';
r.comment = 'Already included in relevant tables';
rules[r.key] = r;

r = {};
r.key = "CODEX ASTRA MILITARUM STRATAGEMS";
r.source = '"CODEX ASTRA MILITARUM" p.134';
r.content = 'If your army is Battle-forged and includes any ASTRA MILITARUM Detachments (excluding Auxiliary Support Detachments), you have access to the Stratagems shown below, meaning you can spend Command Points to activate them. These help to reflect the unique tactics and strategies used by the Imperial Guard on the battlefield.';
r.comment = 'All stratagems with "CODEX ASTRA MILITARUM" p.134 to p.136 as Source';
rules[r.key] = r;

r = {};
r.key = "ASTRA MILITARUM WARGEAR RANGED WEAPONS";
r.source = '"CODEX ASTRA MILITARUM" p.85, "INDEX: IMPERIUM 2" p.11';
r.content = 'Bolt Pistol\nBoltgun\nPlasma Pistol';
r.comment = '';
rules[r.key] = r;

r = {};
r.key = "ASTRA MILITARUM WARGEAR MELEE WEAPONS";
r.source = '"CODEX ASTRA MILITARUM" p.85, "INDEX: IMPERIUM 2" p.11';
r.content = 'Power sword\nPower fist\nPower axe (index)\nPower maul (index)';
r.comment = '';
rules[r.key] = r;

r = {};
r.key = "ASTRA MILITARUM WARGEAR SPECIAL WEAPONS";
r.source = '"CODEX ASTRA MILITARUM" p.85, "INDEX: IMPERIUM 2" p.11';
r.content = 'Sniper Rifle\nFlamer\nGrenade launcher\nMeltagun\nPlasma gun';
r.comment = 'Sniper Rifles cannot be taken by Rough Riders';
rules[r.key] = r;

r = {};
r.key = "ASTRA MILITARUM WARGEAR HEAVY WEAPONS";
r.source = '"CODEX ASTRA MILITARUM" p.85, "INDEX: IMPERIUM 2" p.11';
r.content = 'Mortar\nAutocannon\nHeavy bolter\nMissile launcher\nLascannon';
r.comment = '';
rules[r.key] = r;

r = {};
r.key = "ASTRA MILITARUM WARGEAR VEHICLE EQUIPMENT";
r.source = '"CODEX ASTRA MILITARUM" p.85';
r.content = 'Augur array\nDozer blade\nHeavy Stubber\nHunter-killer missile\nStorm bolter\nTrack guards';
r.comment = 'A vehicle cannot have both a heavy stubber and a storm bolter';
rules[r.key] = r;


/* 
===============================================================================
								ABILITIES
===============================================================================
*/

abi = new Ability(
	'Voice of Command',
	'This unit may issue one order per turn to the soldiers under their command at the start of their Shooting phase. Orders may only be issued to INFANTRY units within 6" of this unit that have the same <REGIMENT> keyword as this unit. To issue an order, pick a target unit and choose which order you wish to issue from the table below. A unit may only be affected by one order per turn.',
	'"CODEX ASTRA MILITARUM" p.86',
	["CODEX ASTRA MILITARUM VOICE OF COMMAND ORDERS", "CODEX ASTRA MILITARUM REGIMENTAL ORDERS"],
	true
);

abi = new Ability(
	'Augur array',
	'Once per battle, in the Shooting phase, you can re-roll a single failed hit roll for a vehicle with an augur array',
	'"CODEX ASTRA MILITARUM" p.129, "CODEX: ASTRA MILITARUM" Errata 1.2',
	[],
	true
);

abi = {};
abi.name = 'Dozer blade';
abi.content = 'If a vehicle with a dozer blade charges in the Charge phase, add 1 to hit rolls made for it until the end of the ensuing Fight phase';
abi.source = '"CODEX ASTRA MILITARUM" p.129';
abi.rules = [];
abilitiesdict[abi.name] = abi;

abi = {};
abi.name = 'Track Guards';
abi.content = 'A vehicle with track guards always counts as having its starting number of Wounds when determining its Move characteristic (i.e. its Move characteristic does not decrease as it suffers wounds).';
abi.source = '"CODEX ASTRA MILITARUM" p.129';
abi.rules = [];
abilitiesdict[abi.name] = abi;


/* 
===============================================================================
								WEAPONS
===============================================================================
*/

w = {};
wp = {};
w.name = 'Artillery barrage';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '100"';
wp.type = 'Heavy D6';
wp.s = '8';
wp.ap = '-2';
wp.d = 'D3';
wp.abilities = 'This weapon can only be fired once per battle, and cannot be used if the bearer moves. This weapon can target units that are not visible to the bearer (when doing so, subtract 1 from the hit rolls). You may only use one artillery barrage per turn, regardless of how many Masters of Ordnance you have in your army.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {};
w.name = 'Bale Eye';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '6"';
wp.type = 'Pistol 1';
wp.s = '3';
wp.ap = '-2';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {};
w.name = 'Baneblade cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '72"';
wp.type = 'Heavy 3D6';
wp.s = '9';
wp.ap = '-3';
wp.d = '3';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {};
w.name = 'Battle cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '72"';
wp.type = 'Heavy D6';
wp.s = '8';
wp.ap = '-2';
wp.d = 'D3';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {};
w.name = 'Chem cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '8"';
wp.type = 'Heavy D6';
wp.s = '*';
wp.ap = '-3';
wp.d = 'D1';
wp.abilities = 'This weapon automatically hits its target. In addition, it wounds on a 2+, unless it is targeting a VEHICLE, in which case it wounds on a 6+.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {};
w.name = 'Deathstrike missile';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '200"';
wp.type = 'Heavy 3D6';
wp.s = '*';
wp.ap = '*';
wp.d = '*';
wp.abilities = 'This weapon can only be fired once per battle. This weapon can target units that are not visible to the bearer. Each time you hit the target with this weapon it suffers a mortal wound. After resolving all damage on the unit, roll a D6 for every other unit within 6" of the target unit – on a 4+ that unit also suffers D3 mortal wounds';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {};
w.name = 'Demolisher cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '24"';
wp.type = 'Heavy D3';
wp.s = '10';
wp.ap = '-3';
wp.d = 'D6';
wp.abilities = 'When attacking units with 5 or more models, change this weapon’s Type to Heavy D6.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {};
w.name = 'Earthshaker cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '240"';
wp.type = 'Heavy D6';
wp.s = '9';
wp.ap = '-3';
wp.d = 'D3';
wp.abilities = 'Roll two dice for the number of attacks when firing this weapon and discard the lowest result. Thisweapon can target units that are not visible to the bearer.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {};
w.name = 'Eradicator nova cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '36"';
wp.type = 'Heavy D6';
wp.s = '6';
wp.ap = '-2';
wp.d = 'D3';
wp.abilities = 'Units attacked by this weapon do not gain any bonus to their saving throws for being in cover';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Executioner plasma cannon';
w.p = [];
w.combi = false;
w.chooseone = true;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = 'Standard';
wp.range = '36"';
wp.type = 'Heavy D6';
wp.s = '7';
wp.ap = '-3';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
wp = {};
wp.name = 'Supercharge';
wp.range = '36"';
wp.type = 'Heavy D6';
wp.s = '8';
wp.ap = '-3';
wp.d = '2';
wp.abilities = 'For each hit roll of 1, the bearer suffers 1 mortal wound after all of this weapon’s shots have been resolved.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {};
w.name = 'Exterminator autocannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '48"';
wp.type = 'Heavy 4';
wp.s = '7';
wp.ap = '-1';
wp.d = '2';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;


w = {};
wp = {}
w.name = 'Frag bomb';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '6"';
wp.type = 'Grenade D6';
wp.s = '4';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Grenadier gauntlet';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '12"';
wp.type = 'Assault D6';
wp.s = '4';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {};
w.name = 'Hellhammer cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '36"';
wp.type = 'Heavy 3D6';
wp.s = '10';
wp.ap = '-4';
wp.d = '3';
wp.abilities = 'Units attacked by this weapon do not gain any bonus to their saving throws for being in cover';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {};
w.name = 'Hellstrike missiles';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '72"';
wp.type = 'Heavy 1';
wp.s = '8';
wp.ap = '-2';
wp.d = 'D6';
wp.abilities = 'Roll two dice when inflicting damage with this weapon and discard the lowest result.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Hot-shot lasgun';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '24"';
wp.type = 'Rapid Fire 1';
wp.s = '3';
wp.ap = '-2';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Hot-shot laspistol';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '6"';
wp.type = 'Pistol 1';
wp.s = '3';
wp.ap = '-2';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Hot-shot volley gun';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '24"';
wp.type = 'Heavy 4';
wp.s = '4';
wp.ap = '-2';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Hunter-Killer missile';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.126';
wp.name = w.name;
wp.range = '48"';
wp.type = 'Heavy 1';
wp.s = '8';
wp.ap = '-2';
wp.d = 'D6';
wp.abilities = 'Each hunter-killer missile can only be fired once per battle.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Hydra quad autocannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '72"';
wp.type = 'Heavy 8';
wp.s = '7';
wp.ap = '-1';
wp.d = '2';
wp.abilities = 'Add 1 to all hit rolls made for this weapon against targets that can FLY. Subtract 1 from the hit rolls made for this weapon against all other targets';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Inferno cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '16"';
wp.type = 'Heavy 2D6';
wp.s = '6';
wp.ap = '-1';
wp.d = '1';
wp.abilities = 'This weapon automatically hits its target';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Lasgun array';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '24"';
wp.type = 'Rapid Fire 3';
wp.s = '3';
wp.ap = '0';
wp.d = '1';
wp.abilities = 'This weapon can only be fired if a unit is embarked upon the vehicle equipped with it';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Magma cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '60"';
wp.type = 'Heavy 2D6';
wp.s = '10';
wp.ap = '-5';
wp.d = 'D6';
wp.abilities = 'If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Melta cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '24"';
wp.type = 'Assault D3';
wp.s = '8';
wp.ap = '-4';
wp.d = 'D6';
wp.abilities = 'If the target is within half range of this weapon, roll two dice when inflicting damage with it and discard the lowest result';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Mortar';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '48"';
wp.type = 'Heavy D6';
wp.s = '4';
wp.ap = '0';
wp.d = '1';
wp.abilities = 'This weapon can target units that are not visible to the bearer';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Multi-laser';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '36"';
wp.type = 'Heavy 3';
wp.s = '6';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Multiple rocket pod';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '36"';
wp.type = 'Assault D6';
wp.s = '5';
wp.ap = '-1';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Payback';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '36"';
wp.type = 'Assault 3';
wp.s = '5';
wp.ap = '-2';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Punisher gatling canon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '24"';
wp.type = 'Heavy 20';
wp.s = '5';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Quake cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '140"';
wp.type = 'Heavy 2D6';
wp.s = '14';
wp.ap = '-4';
wp.d = 'D6';
wp.abilities = 'When rolling for this weapon’s damage, treat any rolls of 1 or 2 as 3 instead.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Ripper gun (shooting)';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.127';
wp.name = w.name;
wp.range = '12"';
wp.type = 'Assault 3';
wp.s = '5';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Storm eagle rocket';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '120"';
wp.type = 'Heavy 2D6';
wp.s = '10';
wp.ap = '-2';
wp.d = 'D3';
wp.abilities = 'This weapon can target units that are not visible to the bearer. A model can only fire a single storm eagle rocket per turn. Each storm eagle rocket can only be fired once per battle';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Stormsword siege cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '36"';
wp.type = 'Heavy 2D6';
wp.s = '10';
wp.ap = '-4';
wp.d = 'D6';
wp.abilities = 'Units attacked by this weapon do not gain any bonus to their saving throws for being in cover. Re-roll damage rolls of 1 for this weapon';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Taurox battle cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '48"';
wp.type = 'Heavy D6';
wp.s = '7';
wp.ap = '-1';
wp.d = 'D3';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Taurox gatling cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '24"';
wp.type = 'Heavy 20';
wp.s = '4';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Taurox missile launcher';
w.p = [];
w.combi = false;
w.chooseone = true;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = 'Frag missile';
wp.range = '48"';
wp.type = 'Heavy 2D6';
wp.s = '4';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
wp = {};
wp.name = 'Krak missile';
wp.range = '48"';
wp.type = 'Heavy 2';
wp.s = '8';
wp.ap = '-2';
wp.d = 'D6';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;


w = {};
wp = {}
w.name = 'Tremor cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '60"';
wp.type = 'Heavy 3D6';
wp.s = '8';
wp.ap = '-2';
wp.d = '3';
wp.abilities = 'If a unit is hit by this weapon, in their following Movement phase they must halve their Move characteristic and cannot Advance.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Vanquisher battle cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '72"';
wp.type = 'Heavy 1';
wp.s = '8';
wp.ap = '-3';
wp.d = 'D6';
wp.abilities = 'Roll two dice when inflicting damage with this weapon and discard the lowest result.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Volcano cannon';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '120"';
wp.type = 'Heavy 3D3';
wp.s = '16';
wp.ap = '-5';
wp.d = '2D6';
wp.abilities = 'You can re-roll failed wound rolls when targeting TITANIC units with this weapon.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Wyvern quad stormshard mortar';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.128';
wp.name = w.name;
wp.range = '48"';
wp.type = 'Heavy 4D6';
wp.s = '4';
wp.ap = '0';
wp.d = '1';
wp.abilities = 'This weapon can target units that are not visible to the bearer. You can re-roll failed wound rolls for this weapon';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Bionic arm with devil’s claw';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = 'User';
wp.ap = '-1';
wp.d = '2';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Bullgryn maul';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = '+2';
wp.ap = '-1';
wp.d = '2';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Huge Knife';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = 'User';
wp.ap = '-1';
wp.d = '2';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Ripper gun (melee)';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = 'User';
wp.ap = '-1';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Sentinel chainsaw';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = 'User';
wp.ap = '-1';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Telepathica stave';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = '+1';
wp.ap = '0';
wp.d = 'D3';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Thunderous headbutt';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = '+3';
wp.ap = '-2';
wp.d = 'D3';
wp.abilities = 'Nork can only make a single thunderous headbutt attack each time he fights.';
w.p.push(wp);
weapondict[w.name] = w;

w = {};
wp = {}
w.name = 'Wyrdvane stave';
w.p = [];
w.combi = false;
w.chooseone = false;
w.source = '"CODEX ASTRA MILITARUM" p.129';
wp.name = w.name;
wp.range = 'Melee';
wp.type = 'Melee';
wp.s = '+1';
wp.ap = '0';
wp.d = '1';
wp.abilities = '-';
w.p.push(wp);
weapondict[w.name] = w;

/* 
===============================================================================
								STRATAGEMS
===============================================================================
*/


st = {}; 
st.name = 'VORTEX MISSILE';
st.cost = '3CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem before you fire a Deathstrike missile.';
st.content = 'You can re-roll failed hit rolls for this shot. In addition, add 1 to the roll made to determine whether other units within 6" are hit. If a model is wounded but not slain by the attack, roll another dice; on a 6, the model suffers a further D6 mortal wounds.';
st.source = '"CODEX ASTRA MILITARUM" p.134';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'FIRE ON MY POSITION';
st.cost = '3CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem when the last model is slain from an ASTRA MILITARUM unit from your army equipped with a vox-caster.';
st.content = 'Before removing the model, roll a D6 for each unit within 3" of it. On a 4+ that unit suffers D3 mortal wounds.';
st.source = '"CODEX ASTRA MILITARUM" p.134';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'CRUSH THEM';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem at the start of your Charge phase.';
st.content = 'Select an ASTRA MILITARUM VEHICLE unit from your army. This unit can charge even if it Advanced this turn. In the following Fight phase, attacks made by this unit hit on a 2+.';
st.source = '"CODEX ASTRA MILITARUM" p.134,  "CODEX: ASTRA MILITARUM" Errata 1.2';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'AERIAL SPOTTER';
st.cost = '2CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem at the start of the Shooting phase.';
st.content = 'Select a Basilisk or Wyvern model from your army. You can re-roll failed hit rolls for this unit in this phase.';
st.source = '"CODEX ASTRA MILITARUM" p.134, "CODEX: ASTRA MILITARUM" Errata 1.2';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'JURY RIGGING';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem at the start of your turn.';
st.content = 'Select an ASTRA MILITARUM VEHICLE from your army. It cannot move, charge or pile in this turn, but immediately heals 1 wound. You can only use this Stratagem once per turn.';
st.source = '"CODEX ASTRA MILITARUM" p.134, "CODEX: ASTRA MILITARUM" Errata 1.2';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'CONSOLIDATE SQUADS';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem at the end of your Movement phase.';
st.content = 'Choose an Infantry Squad (pg 93) from your army that is within 2" of another of your Infantry Squads from the same <REGIMENT>. You can merge these squads into a single unit and they are treated as such for the rest of the battle.';
st.source = '"CODEX ASTRA MILITARUM" p.134';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'IMPERIAL COMMANDER’S ARMOURY';
st.cost = '1CP/3CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem before the battle.';
st.content = 'Your army can have one extra relic from the Heirlooms of Conquest for 1 CP, or two extra relics for 3 CPs. All of the relics that you include must be different and be given to different ASTRA MILITARUM CHARACTERS. You can only use this Stratagem once per battle.';
st.source = '"CODEX ASTRA MILITARUM" p.134';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 


st = {}; 
st.name = 'IMPERIAL COMMANDER’S ARMOURY';
st.cost = '1CP/3CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem before the battle.';
st.content = 'Your army can have one extra relic from the Heirlooms of Conquest for 1 CP, or two extra relics for 3 CPs. All of the relics that you include must be different and be given to different ASTRA MILITARUM CHARACTERS. You can only use this Stratagem once per battle.';
st.source = '"CODEX ASTRA MILITARUM" p.134';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'OFFICIO PREFECTUS COMMAND TANK';
st.cost = '2CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem at the start of the first battle round, before the first turn begins.';
st.content = 'Select a LEMAN RUSS from your army. All friendly ASTRA MILITARUM units have a Leadership characteristic of 9 (unless it would otherwise be higher) whilst they are within 6" of this vehicle.';
st.source = '"CODEX ASTRA MILITARUM" p.134';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'MOBILE COMMAND VEHICLE';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem at the start of any turn.';
st.content = 'Choose a Chimera from your army. Until the end of the turn, an OFFICER from your army with the Voice of Command ability may still issue orders whilst embarked within that Chimera (measuring ranges from any point on the vehicle), and is treated as being within 3" of a vox-caster.';
st.source = '"CODEX ASTRA MILITARUM" p.135';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'PRELIMINARY BOMBARDMENT';
st.cost = '2CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem after both sides have deployed, but before the first battle round begins.';
st.content = 'Roll a dice for each enemy unit on the battlefield. On a 6, that unit suffers 1 mortal wound. You can only use this Stratagem once per battle.';
st.source = '"CODEX ASTRA MILITARUM" p.135';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'INSPIRED TACTICS';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem after an OFFICER from your army has issued an order or tank order.';
st.content = 'That officermay immediately issue an additional order.';
st.source = '"CODEX ASTRA MILITARUM" p.135';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 


st = {}; 
st.name = 'DEFENSIVE GUNNERS';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem when a charge is declared against one of your ASTRA MILITARUM VEHICLE units.';
st.content = 'When that unit fires Overwatch this phase, they successfully hit on a roll of 5 or 6, instead of only 6.';
st.source = '"CODEX ASTRA MILITARUM" p.135';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'TAKE COVER!';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem in your opponent’s Shooting phase when your opponent selects one of your ASTRA MILITARUM INFANTRY units as a target.';
st.content = 'You can add 1 to armour saving throws you make for this unit until the end of the phase';
st.source = '"CODEX ASTRA MILITARUM" p.135, "CODEX: ASTRA MILITARUM" Errata 1.2';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'GRENADIERS';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem before an ASTRA MILITARUM INFANTRY unit from your army shoots or fires Overwatch.';
st.content = 'Up to ten models in the unit that are armed with grenades can throw a grenade this phase, instead of only one model being able to do so.';
st.source = '"CODEX ASTRA MILITARUM" p.135';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'FIGHT TO THE DEATH';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem at the start of the Morale phase.';
st.content = 'Pick an ASTRA MILITARUM INFANTRY unit from your army that is required to take a Morale test. You can roll a D3 for the unit, rather than a D6, when taking this test.';
st.source = '"CODEX ASTRA MILITARUM" p.135';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'GO! RECON!';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem at the start of your Shooting phase.';
st.content = 'Select a unit of Scout Sentinels from your army. This unit can immediately move 2D6" but cannot shoot or charge this turn.';
st.source = '"CODEX ASTRA MILITARUM" p.135';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'VENGEANCE FOR CADIA!';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Astra Militarum Stratagem';
st.when = 'Use this Stratagem when you select one of your ASTRA MILITARUM units to shoot or fire Overwatch.';
st.content = 'Re-roll failed hit and wound rolls for models in this unit that target Chaos units until the end of the phase.';
st.source = '"CODEX ASTRA MILITARUM" p.135';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'VOLLEY FIRE';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Mordian Stratagem';
st.when = 'Use this Stratagem before a MORDIAN INFANTRY unit from your army shoots in the Shooting phase.';
st.content = 'Each time you make a hit roll of 6+ for a model in that unit, that model can immediately shoot again with the same weapon at the same target (these bonus attacks cannot themselves generate any further attacks).';
st.source = '"CODEX ASTRA MILITARUM" p.136';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 
 
st = {}; 
st.name = 'OVERLAPPING FIELDS OF FIRE';
st.cost = '2CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Cadian Stratagem';
st.when = 'Use this Stratagem after a CADIAN unit from your army has attacked an enemy unit in the Shooting phase and the attack resulted in the enemy unit losing one or more wounds. ';
st.content = 'That officermay immediately issue an additional order.';
st.source = '"CODEX ASTRA MILITARUM" p.136, "CODEX: ASTRA MILITARUM" Errata 1.2';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'SEND IN THE NEXT WAVE!';
st.cost = '2CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Valhallan Stratagem';
st.when = 'Use this Stratagem at the end of your Movement phase.';
st.content = 'Select a VALHALLAN INFANTRY unit from your army (excluding CHARACTERS and Infantry Squads that have used the Combined Squads Stratagem) that was destroyed earlier in the battle. Set up this unit wholly within your deployment zone, within 6" of the edge of the battlefield and more than 9" from any enemy models. This unit costs reinforcement points in a matched play game.';
st.source = '"CODEX ASTRA MILITARUM" p.136, "CODEX: ASTRA MILITARUM" Errata 1.2';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'FIRSTBORN PRIDE';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Vostroyan Stratagem';
st.when = 'Use this Stratagem at the start of your Shooting phase.';
st.content = 'Select a VOSTROYAN unit from your army. You can add 1 to hit rolls made for this unit until the end of the phase.';
st.source = '"CODEX ASTRA MILITARUM" p.136';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'SUPERIOR INTELLIGENCE';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Militarum Tempestus Stratagem';
st.when = 'Use this Stratagem immediately after your opponent sets up a unit that is arriving on the battlefield as reinforcements within 12" of one of your MILITARUM TEMPESTUS INFANTRY units.';
st.content = 'Your unit can immediately shoot at that enemy unit as if it were the Shooting phase, but you must subtract 1 from all the resulting hit rolls.';
st.source = '"CODEX ASTRA MILITARUM" p.136';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'AMBUSH';
st.cost = '3CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Tallarn Stratagem';
st.when = 'Use this Stratagem during deployment.';
st.content = 'Choose up to three TALLARN units to be set up in ambush instead of placing them on the battlefield (only one of these units can have the VEHICLE keyword). At the end of any of your Movement phases these units can strike from hiding – set each of them up wholly within 7" of any battlefield edge and more than 9" from any enemy models.';
st.source = '"CODEX ASTRA MILITARUM" p.136, "CODEX: ASTRA MILITARUM" Errata 1.2';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'ARMOURED FIST';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Armageddon Stratagem';
st.when = 'Use this Stratagem at the start of your Shooting phase.';
st.content = 'Select an ARMAGEDDON INFANTRY unit from your army that disembarked from an ARMAGEDDON TRANSPORT VEHICLE this turn. You can re-roll hit rolls of 1 for that unit until the end of the phase.';
st.source = '"CODEX ASTRA MILITARUM" p.136';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 

st = {}; 
st.name = 'VICIOUS TRAPS';
st.cost = '1CP';
st.faction = 'ASTRA MILITARUM';
st.restriction = 'Catachan Stratagem';
st.when = 'Use this Stratagem when an enemy unit finishes a charge move within 1" of a CATACHAN unit from your army that is wholly on or within a terrain feature.';
st.content = 'Roll a dice; on a 4+ that enemy unit suffers D3 mortal wounds.';
st.source = '"CODEX ASTRA MILITARUM" p.136';
st.rules = ["CODEX ASTRA MILITARUM STRATAGEMS"];
stdict.push(st); 



/* 
===============================================================================
								DATASHEETS
===============================================================================
*/

/* Instanced unit :

Iu.datasheet
Iu.name
Iu.options
Iu.cost


*/

//var sheetdict = []; //All Datasheet Array
//var sheet = {}
//var modelp = {};

function ModelProfile(name, m, ws, bs, s, t, w, a, ld, sv, degrading){
	this.name = name;
	this.m = m;
	this.ws = ws;
	this.bs = bs;
	this.s = s;
	this.t = t;
	this.w = w;
	this.a = a;
	this.ld = ld;
	this.sv = sv;
	this.degrading = degrading;
}

function DatasheetOptions (name, type, costing, onAdd, onRemove){
}

//Infantry Squad
function Datasheet(name, PL, role, profiles, weapons, wargeartext, wargearoptionstext, abilities, factionkeywords, keywords, rulekeys){
	this.name = name;
	this.PL = PL;
	this.role = role;
	this.profiles = profiles;
	this.weapons = weapons;
	this.wargeartext = wargeartext;
	this.wargearoptionstext = wargearoptionstext;
	this.abilities = abilities;
	this.factionkeywords = factionkeywords;
	this.keywords = keywords;
	this.rulekeys = rulekeys;
	for(i=0; i<this.abilities.length;i++){
		this.rulekeys = this.rulekeys.concat(abilities[i].rules);
	}
	sheetdict[name] = this;
}

sheet = new Datasheet(
	//Name
	'Infantry Squad',
	//PL
	3,
	"troop"
	,
	//Profiles
	[
		new ModelProfile('Guardsman', '6"', '4+', '4+', 3, 3, 1, 1, 6, '5+', null),
		new ModelProfile('Sergeant', '6"', '4+', '4+', 3, 3, 1, 2, 7, '5+', null),
		new ModelProfile('Heavy Weapon Team', '6"', '4+', '4+', 3, 3, 2, 2, 6, '5+', null)
	],
	//Weapons
	[
		weapondict["Lasgun"],
		weapondict["Laspistol"],
		weapondict["Chainsword"],
		weapondict["Power sword"],
		weapondict["Power axe"],
		weapondict["Power maul"],	
		weapondict["Bolt pistol"],
		weapondict["Boltgun"],
		weapondict["Plasma pistol"],
		weapondict["Sniper rifle"],
		weapondict["Flamer"],
		weapondict["Grenade launcher"],
		weapondict["Meltagun"],
		weapondict["Plasma gun"],
		weapondict["Mortar"],
		weapondict["Autocannon"],
		weapondict["Heavy bolter"],
		weapondict["Missile launcher"],
		weapondict["Lascannon"]
	]
	,
	//Wargear text
	'This units contains 1 Sergeant and 9 Guardsmen.\n•Each Guardsman is armed with a lasgun and frag grenades\n•The Sergeant is armed with a laspistol and frag grenades',
	//Wargear options text
	'•One Guardsman may take a vox-caster\n•Two other Guardsmen may form a Heavy Weapons Team who must take an item from the Heavy Weapons list.\n•One other Guardsman may replace his lasgun with an item from the Special Weapons list.\n•The Sergeant may replace their laspistol with an item from the Ranged Weapons list.\n•The Sergeant may take a chainsword or a power sword.\n•(INDEX) The Sergeant may replace their chainsword with a power axe, power maul or power sword.',
	//Abilities
	[
	new Ability(
		'Vox-Caster',
		'If a friendly OFFICER is within 3" of a unit with a vox-caster when using their Voice of Command ability, you may extend the range of the order to 18" if the target unit also contains a vox-caster.',
		'"CODEX ASTRA MILITARUM" p.93',
		[],
		false
	)
	],
	//Faction Keywords
	[
		kdict["IMPERIUM"],
		kdict["ASTRA MILITARUM"],
		kdict["REGIMENT"],
	],
	//Keywords
	[
		kdict["INFANTRY"],
		new Keyword("INFANTRY SQUAD",false, null, null)
	],
	//Rules
	[
		'ASTRA MILITARUM WARGEAR RANGED WEAPONS',
		'ASTRA MILITARUM WARGEAR SPECIAL WEAPONS',
		'ASTRA MILITARUM WARGEAR HEAVY WEAPONS'
	]
	
	

);