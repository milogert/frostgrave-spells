export const Schools = {
  CHRONOMANCER: "CHRONOMANCER",
  ELEMENTALIST: "ELEMENTALIST",
  ENCHANTER: "ENCHANTER",
  ILLUSIONIST: "ILLUSIONIST",
  NECROMANCER: "NECROMANCER",
  SIGILIST: "SIGILIST",
  SOOTHSAYER: "SOOTHSAYER",
  SUMMONER: "SUMMONER",
  THAUMATURGE: "THAUMATURGE",
  WITCH: "WITCH"
};

export const Ranges = {
  SELF: "SELF",
  LOS: "LOS",
  AREA: "AREA",
  TOUCH: "TOUCH",
  OUTOFGAME: "OUTOFGAME"
};

const allSpellsNoId = [
  // Chronomancer.
  {
    name: "Crumble",
    school: Schools.CHRONOMANCER,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description:
      "This spell only works against man-made structures such as buildings and walls. The spellcaster rapidly speeds up the passing of time in a small area of the structure, causing it to collapse. This can effectively create a doorway-sized hole through any wall, which should be indicated on the table somehow. The spell can also be used to collapse a section of floor beneath a figure standing on a level above the ground. In this case, the figure about to be affected must pass a Will roll versus the casting roll, or fall to the next level down and taking damage appropriately.",
    starred: false
  },
  {
    name: "Decay",
    school: Schools.CHRONOMANCER,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description:
      "The spellcaster select and attacks a target's weapon, causing it to decay and fall apart, rendering it useless for the rest of the game. This spell has no effect on magic weapons (even those only temporarily enchanted).",
    starred: false
  },
  {
    name: "Fast Act",
    school: Schools.CHRONOMANCER,
    baseCastingNumber: 8,
    range: [Ranges.LOS],
    description:
      "The target figure will act first next turn, in a special phase before either player's wizard phase. If this spell is cast multiple times in the same turn, all figures so affected will act in this special phase, starting with the last figure to have had Fast Act cast upon it, and concluding with the first.",
    starred: false
  },
  {
    name: "Fleet Feet",
    school: Schools.CHRONOMANCER,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description:
      "Target receives +2 Move for the rest of the game. Multiple castings of Fleet Feet on the same target have no effect.",
    starred: false
  },
  {
    name: "Petrify",
    school: Schools.CHRONOMANCER,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description:
      "The target is temporarily frozen solid and may take no actions on its next activation. After the next activation, the figure may move as normal. The target may attempt to resist this spell by succeeding with a Will roll versus the casting roll.",
    starred: false
  },
  {
    name: "Slow",
    school: Schools.CHRONOMANCER,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description:
      "The target must pass a Will roll or be reduced to one action per activation. After each activation, the target may attempt another Will roll versus the original casting roll, in order to shake off the effects of the spell. Otherwise, its effects last until the end of the game. Multiple castings of this spell on the same target have no effect.",
    starred: false
  },
  {
    name: "Time Store",
    school: Schools.CHRONOMANCER,
    baseCastingNumber: 14,
    range: [Ranges.SELF],
    description:
      "The spellcaster captures a fragment of his own present to save for future use. To cast this spell, the spellcaster must be able to take two actions during the turn. He must spend the first action casting Time Store. If successful, the second action is lost. This spellcaster is now considered to have a stored 'extra action' that he may use in a future turn. This action can only be used while the spellcaster is taking his normal actions for the turn, essentially giving him three actions in that turn. A spellcaster may only ever have one stored action at any time.",
    starred: false
  },
  {
    name: "Time Walk",
    school: Schools.CHRONOMANCER,
    baseCastingNumber: 18,
    range: [Ranges.SELF],
    description:
      "The spellcaster is allowed to activate, with the usual two actions, for a second time in the turn - during the soldier phase. If a spellcaster fails to cast this spell, he suffers 2 damage in addition to any other damage for failing to cast the spell. A spellcaster cannot cast Time Walk if he is current using Time Store.",
    starred: false
  },
  // Elementalist.
  {
    name: "Call Storm",
    school: Schools.ELEMENTALIST,
    baseCastingNumber: 12,
    range: [Ranges.AREA],
    description:
      "If this spell is successfully cast, all bow and crossbow attack are -1 for the rest of the game. This spell may be cast multiple times (and by multiple spellcasters_, with each additional casting increasing the penalty by a further -1, up to a maximum penalty of -10.",
    starred: false
  },
  {
    name: "Destructive Sphere",
    school: Schools.ELEMENTALIST,
    baseCastingNumber: 12,
    range: [Ranges.AREA],
    description:
      'Every figure within 3" of the spellcaster suffers a +5 attack.'
  },
  {
    name: "Elemental Ball",
    school: Schools.ELEMENTALIST,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description:
      'The spellcaster chooses an enemy figure within 24" and line of sight and hurls a ball of destructive elemental energy at it. The target, and every figure (including friendly ones) within 1.5" and line of sight of the target, immediately suffers a +5 shooting attack (roll for each attack separately). This spell may not target an enemy figure that is even partially obscured by another figure.'
  },
  {
    name: "Elemental Bolt",
    school: Schools.ELEMENTALIST,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description:
      "The spellcaster may make an immediate +8 shooting attack against any figure in line of sight."
  },
  {
    name: "Elemental Hammer",
    school: Schools.ELEMENTALIST,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description:
      "This spell is cast upon a weapon. The next time this weapon causes at least 1 point of damage, it inflicts an additional 5 points of damage."
  },
  {
    name: "Elemental Shield",
    school: Schools.ELEMENTALIST,
    baseCastingNumber: 10,
    range: [Ranges.SELF],
    description:
      "The spellcaster forms a floating shield to protect himself. This shield absorbs the next 3 points of damage against the spellcaster from any source. Once 3 points have been absorbed the shield vanishes. A spellcaster may only have on Elemental Shield active at any time."
  },
  {
    name: "Scatter Shot",
    school: Schools.ELEMENTALIST,
    baseCastingNumber: 12,
    range: [Ranges.AREA],
    description:
      'The spellcaster may make one +0 attack against every enemy figure (either from an opposing warband or a creature) within 12". This may include enemy figures in combat, although the normal rules for shooting into combat are followed in this case.'
  },
  {
    name: "Wall",
    school: Schools.ELEMENTALIST,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description:
      'This spell creates an impenetrable 6"-long, 3"-high wall within 6" of the spellcaster. At the end of each following turn, roll a d20 - on a 17+ the wall vanishes.'
  },
  // Enchanter.
  {
    name: "Animate Construct",
    school: Schools.ENCHANTER,
    baseCastingNumber: 8,
    range: [Ranges.OUTOFGAME],
    description:
      "It is assumed that the spellcaster has built a construct prior to using this spell to animate it. If the spell is successfully cast, the construct immediately becomes a member of the warband, taking the place of a soldier. A spellcaster may declare that he is attempting to animate a construct of any size (Small, Medium, or Large - see Chapter 6: Bestiary), but the larger the construct, the harder it is to animate, so the following modifiers are applied to his roll to cast the spell: Small -0, Medium -3, Large -6.",
    starred: false
  },
  {
    name: "Control Construct",
    school: Schools.ENCHANTER,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description:
      "If successfully cast, the target construct must make an immediate Will roll versus the casting roll. If the roll fails, the spellcaster gains control of the construct for the rest of the game. A spellcaster may only control one construct at a time.",
    starred: false
  },
  {
    name: "Embed Enchantment",
    school: Schools.ENCHANTER,
    baseCastingNumber: 12,
    range: [Ranges.OUTOFGAME],
    description:
      "This spell causes any Enchant Armor or Enchant Weapon spell that is still active at the end of a game to become permanent, and the weapon or armour in question to become a magic item. Alternatively, a spellcaster may cast either of those spells after a game (even though neither are usually an Out of Game spell), immediately followed by Embed Enchantment. If both spells are successful, the item becomes permanently enchanted.",
    starred: false
  },
  {
    name: "Enchant Armour",
    school: Schools.ENCHANTER,
    baseCastingNumber: 8,
    range: [Ranges.LOS],
    description:
      "The armour worn by the target now counts as magic armour and grants a +1 to Armour for the rest of the game. Multiple castings of this spell on the same target have no effect.1`",
    starred: false
  },
  {
    name: "Enchant Weapon",
    school: Schools.ENCHANTER,
    baseCastingNumber: 8,
    range: [Ranges.LOS],
    description:
      "A target weapon is given a temporary magic boost by the spellcaster. Mêlée weapons affected by this spell count as magic weapons and give their users +1 fight for the rest of game. Bows and crossbows targets by the spell give +1 Shoot instead, but do not count as magic weapons. Multiple castings of this spell on the same weapon have no effect. Alternatively the spell can be used to enchant one arrow or quarrel. This gives +1 Shoot and counts as a magic weapon, but only for the next shot. A bow or crossbow boosted by Enchant Weapon may be used to fire arrows or quarrels similarly enchanted, and the bonuses stack.",
    starred: false
  },
  {
    name: "Grenade",
    school: Schools.ENCHANTER,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description:
      'The spellcaster takes an object, commonly a single rock, imbues it with magic energy, and throws it at his target, whereupon it explodes into hundreds of fragments. The caster picks a target point within 12". Every figure, including allies, within 1.5" of that point immediately suffers a +3 shooting attack.',
    starred: false
  },
  {
    name: "Strength",
    school: Schools.ENCHANTER,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description:
      "The target receives +2 Fight for the rest of the game. Multiple strength spells on the same target have no effect.",
    starred: false
  },
  {
    name: "Telekinesis",
    school: Schools.ENCHANTER,
    baseCastingNumber: 8,
    range: [Ranges.LOS],
    description:
      'The spellcaster may move any currently unclaimed treasure within 24" by up to 6" in any direction. As long as he can maintain line of sight to the treasure, he can move it over any terrain or obstacle. If the treasure moves out of line of sight, it immediately falls straight to the ground.',
    starred: false
  },
  // Illusionist.
  {
    name: "Beauty",
    school: Schools.ILLUSIONIST,
    baseCastingNumber: 10,
    range: [Ranges.SELF],
    description:
      "This spell causes all humans (i.e. anything not found in Chapter 6: Bestiary) who look at the spellcaster to see a paragon of beauty. Anyone wishing to attack the spellcaster must first pass a Will roll versus the casting roll. Failing this Will roll does not cause the would-be attack to lose an action. Any model magically compelled to fight the target must also pass a Will roll or suffer -1 to its Fight stat."
  },
  {
    name: "Fool's Gold",
    school: Schools.ILLUSIONIST,
    baseCastingNumber: 8,
    range: [Ranges.OUTOFGAME],
    description:
      "This spell allows the spellcaster to place one additional treasure token before the start of the game. However, he must also secretly not down which of the treasures he has placed is the Fool's Gold. When any figure comes into contact with the Fool's Gold, the treasure token immediately vanishes and is removed from the game."
  },
  {
    name: "Glow",
    school: Schools.ILLUSIONIST,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description:
      "A brightly glowing light surrounds the target figure. For the rest of the game, all shooting attacks against this figure are at +3. Multiple Glow spells on the same target have no effect.",
    multipleEffective: false
  },
  {
    name: "Illusionary Soldier",
    school: Schools.ILLUSIONIST,
    baseCastingNumber: 12,
    range: [Ranges.OUTOFGAME],
    description:
      "Causes an illusionary soldier to join the warband for the next battle. This soldier can be of any type. This soldier cannot pick up treasure, nor can it deal damage. If the soldier ever suffers damage of any type, it is removed. A warband may only have one illusionary soldier at any given time."
  },
  {
    name: "Invisibility",
    school: Schools.ILLUSIONIST,
    baseCastingNumber: 12,
    range: [Ranges.TOUCH],
    description:
      "The target figure becomes invisible and may not be attacked or targeted by spells (although he may still be affect by area effects, such as the blast radius of a Grenade spell). The effects of this spell last until the target attacks, casts a spell, or picks up an item of treasure. The spell can be cast on a figure already carrying treasure, rendering both invisible."
  },
  {
    name: "Monstrous Form",
    school: Schools.ILLUSIONIST,
    baseCastingNumber: 8,
    range: [Ranges.SELF],
    description:
      "Any figure wishing to move into contact with the spellcaster must make an immediate Will roll versus the casting roll. If failed, the figure sees a hideous creature instead of the spellcaster and is too scared to attack - he may only make a move that takes him further away. A spellcaster may not have Beauty and Monstrous Form cast at the same time. Undead, constructs, and demons are immune to Monstrous Form."
  },
  {
    name: "Teleport",
    school: Schools.ILLUSIONIST,
    baseCastingNumber: 10,
    range: [Ranges.SELF],
    description:
      "The spellcaster immediately moves to any location within line of sight, but may take no other action this turn. This spell may not be used to enter combat."
  },
  {
    name: "Transpose",
    school: Schools.ILLUSIONIST,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description:
      'This spell switches the position of the two figures on the board. The two figures being transposed must be within 10" of each other and both must be within line of sight of the spellcaster. The spellcaster may cast Transpose to switch himself with another figure. If he attempts to transpose an enemy figure (either a creature or a member of a rival warband), they may each make a Will roll versus the casting roll. If even one succeeds with this Will roll, the spell fails. This spell may target figures in combat.'
  },
  // Necromancer.
  {
    name: "Bone Dart",
    school: Schools.NECROMANCER,
    baseCastingNumber: 8,
    range: [Ranges.LOS],
    description: "This spell fires a small, sharp shard of bone at a target. The spellcaster may make an immediate +5 shooting attack against any figure in line of sight. This does not count as a magic attack."
  },
  {
    name: "Bones of the Earth",
    school: Schools.NECROMANCER,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description: "A skeletal hand reaches out of the ground and grabs the target's ankle. The target is held fast and may not move. Any magic form of movement will allow the target to escape the hand. Otherwise, the only way to escape the hand is to fight. The hand has Fight +0 and Health 1. If the hand is damaged, it vanishes, and the target is free. The spell may only be cast against a target that is standing on ground level. The maximum range for this spell is 18\"."
  },
  {
    name: "Control Undead",
    school: Schools.NECROMANCER,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description: "If successfully cast, the target undead creature must make an immediate Will roll versus the casting roll. If the roll fails, the spellcaster gains control of the undead creature for the rest of the game. A spellcaster may only control one undead creature at a time."
  },
  {
    name: "Raise Zombie",
    school: Schools.NECROMANCER,
    baseCastingNumber: 8,
    range: [Ranges.OUTOFGAME, Ranges.TOUCH],
    description: "This spell can be used both 'Out of Game' and during the game. If successful, the spellcaster adds one zombie to his warband (see Chapter 6: Bestiary). If the spell is cast before the game, the zombie can be deployed normally. If it is cast during a game, the zombie appears in base contact with the spellcaster. A warband may only have one raised zombie at any one time. If the zombie is killed during a game, Raise Zombie can be cast again to create another. A raised zombie does not count towards the warband size limit and remains with a warband until the end of the game, at which point it crumbles into dust."
  },
  {
    name: "Reveal Death",
    school: Schools.NECROMANCER,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description: "This spell causes the target to see a vision of his own death. The target must make an immediate Will roll versus the casting roll. If the target fails, he loses his next activation."
  },
  {
    name: "Spell Eater",
    school: Schools.NECROMANCER,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description: "This spell cancels the effects of any one spell currently in play, and the spellcaster immediately takes 1 point of damage. It cannot unsummon a creature but it can cancel the control of a creature."
  },
  {
    name: "Steal Health",
    school: Schools.NECROMANCER,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description: "The target must make an immediate Will roll versus the casting roll. If failed, the target immediately loses 3 Health and the spellcaster regains 3 Health. This may not take the spellcaster above his starting health. The spell has no effect on undead, constructs, or demons. A spellcaster may target a member of his own warband - if he does, however, the target will immediately 9and permanently) leave the warband and will move as quickly as possible off the board."
  },
  {
    name: "Strike Dead",
    school: Schools.NECROMANCER,
    baseCastingNumber: 18,
    range: [Ranges.LOS],
    description: "This spell may target a figure within 8\". The target must make a Will roll versus the casting roll or be immediately reduced to 0 Health. All figures may empower their Will roll to resist this spell, even non-spellcasters. The spellcaster immediately loses 1 Health upon attempting this spell (even if it is cast successfully), plus any additional loss incurred by failure or empowerment."
  },
  // Sigilist.
  {
    name: "Absorb Knowledge",
    school: Schools.SIGILIST,
    baseCastingNumber: 8,
    range: [Ranges.OUTOFGAME],
    description: "This spell can only be cast by a wizard, and allows him to absorb the knowledge from a written work without having to read it. A wizard immediately gains 50 experience points for casting this spell to represent the speed with which he can gain knowledge. This spell may only be cast after a game in which the wizard was not reduced to 0 Health."
  },
  {
    name: "Create Grimoire",
    school: Schools.SIGILIST,
    baseCastingNumber: 12,
    range: [Ranges.OUTOFGAME],
    description: "This spell allows a spellcaster to create a grimoire containing one spell that he already knows. In order to create a grimoire, the spellcaster must first cast Create Grimoire, and then the spell he wishes to place into the grimoire (even if it is not usually and Out of Game spell). If both are successfully cast, the grimoire is create and the wizard may then sell it."
  },
  {
    name: "Draining Word",
    school: Schools.SIGILIST,
    baseCastingNumber: 14,
    range: [Ranges.AREA],
    description: "This spell draws a bright rune of power in the sky. The spellcaster may choose one spell for the Draining Word to affect. All rolls to attempt to cast that particular spell are at -3 for the rest of the game. A spellcaster may only have one Draining Word spell in effect at any given time."
  },
  {
    name: "Explosive Rune",
    school: Schools.SIGILIST,
    baseCastingNumber: 10,
    range: [Ranges.TOUCH],
    description: "The spellcaster draws a bright, flowing rune of power on the ground or a wall. A marker should be placed on the table to represent the rune. If any character or creature that was not part of the spellcaster's warband at the start of the game comes within 1\" of the run, it explodes, and every figure, friend or foe, within 2\" suffers an immediate +5 shooting attack. A spellcaster may have up to three such runes in play any time. At the end of any turn, he may choose to cancel any one of his runes. If the spellcaster is removed from play any runes he placed are also removed."
  },
  {
    name: "Furious Quill",
    school: Schools.SIGILIST,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description: "The target is attacked by a sharp animated quill. Although the quill does no damage, it is highly irritating and extremely distracting. While under attack, the target suffers -1 Move, -2 Fight, -4 Shoot, and -2 to any casting rolls. At the start of the target's activation each turn, he may make a Will roll versus the casting roll - if successful, the quill is caught and destroyed. Multiple castings of Furious Quill against the same target have no effect. This spell may be cast against a figure in combat with no penalty."
  },
  {
    name: "Power Word",
    school: Schools.SIGILIST,
    baseCastingNumber: 14,
    range: [Ranges.AREA],
    description: "This spell draws a bright rune of power in the sky. The spellcaster may pick one spell for the Power Word to affect. All rolls to cast that particular spell are at +3 for every spellcaster for the rest of the game. Each spellcaster may have only one Power Word in effect at any given time."
  },
  {
    name: "Push",
    school: Schools.SIGILIST,
    baseCastingNumber: 8,
    range: [Ranges.LOS],
    description: "The target suffers an immediate +10 attack. Instead of taking damage from this attack, the target is moved 1\" directly away from the spellcaster for every point of damage he would have taken. If this pushes the target into a piece of terrain or the edge of the board, he stops immediately. Other figures to not stop (or get hit by) a pushed figure - they are assumed to step out of the way. If the target is pushed off a height, he suffers falling damage as normal."
  },
  {
    name: "Write Scroll",
    school: Schools.SIGILIST,
    baseCastingNumber: 12,
    range: [Ranges.OUTOFGAME],
    description: "A spellcaster may attempt to cast this spell once after every game. If successful, one scroll is create. The scroll must be of a spell that the spellcaster knows."
  },
  // Soothsayer.
  {
    name: "Awareness",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 8,
    range: [Ranges.SELF],
    description: "This spell allows the spellcaster to add +1 to his warband's initiative rolls for the rest of the game. Multiple Castings of this spell have no effect, but it may be cast again if the original spellcaster is removed from play."
  },
  {
    name: "Combat Awareness",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 12,
    range: [Ranges.TOUCH],
    description: "This spell gives the target a magic insight into the moves his opponent will attempt in a fight. It gives the target a +2 Fight stat for the remainder of the game. Multiple castings of this spell on the same target have no effect."
  },
  {
    name: "Forget Spell",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description: "‘The spellcaster picks one spell known by the target and causes him to temporarily forget how to cast it. The target may make a Will roll to attempt resist the effects of this spell — if unsuccessful, the he may not cast that spell for the remainder of the game."
  },
  {
    name: "Mind Control",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description: "This spell only affects soldiers and creatures. If the target fails a Will roll against the casting roll, he temporarily joins the spellcaster's warband and can be activated as normal during the soldier phase of the spellcaster's turn. After each activation, the TODO may make a Will roll versus the casting roll to shake off spell's effects. A spellcaster may only have one active Mind Control spell at a time."
  },
  {
    name: "Reveal Invisible",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 8,
    range: [Ranges.AREA],
    description: "This spell cancels all Invisibility spells within 24\" of the caster."
  },
  {
    name: "Reveal Secret",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 12,
    range: [Ranges.OUTOFGAME],
    description: "This spell reveals the location of secret treasure, and may be cast immediately before a game. If successful, the spellcaster's warband may place one additional treasure token within 6\" of their deployment area. Only one extra treasure per warband may be placed in this way each game."
  },
  {
    name: "Will Power",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description: "Target gains +3 Will for the rest of the game. Multiple Will Power spells on the same target have no effect."
  },
  {
    name: "Wizard Eye",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 8,
    range: [Ranges.LOS],
    description: "This spell may be cast on any terrain feature within 12\" that has a flat side, such as most ruins. Place a token next to the terrain feature to represent the Wizard Eye. For the rest of the game, the spellcaster may choose to draw line of sight from the Wizard Eye instead of from his figure when casting spells. The Wizard Eye has 180-degree field of vision. A spellcaster may only maintain one Wizard Eye at a time."
  },
  // Summoner.
  {
    name: "Bind Demon",
    school: Schools.SUMMONER,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description: "The target demon must make an immediate Will roll versus the Casting roll. If it fails, the spellcaster gains control of the demon for the rest of the game. A spellcaster may only have one bound demon at a time."
  },
  {
    name: "Imp",
    school: Schools.SUMMONER,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description: "An imp immediately appears, anywhere within the spellcaster's line of sight, but no closer than 3\" to another figure. The imp follows the normal rules for creatures and will act in the next creature phase. If the same spellcaster casts this spell a second time, the first imp will immediately vanish."
  },
  {
    name: "Leap",
    school: Schools.SUMMONER,
    baseCastingNumber: 8,
    range: [Ranges.LOS],
    description: "The target makes an immediate 10\" move in any direction, including vertically. This move is not hindered by any terrain unless that terrain is over 10\" high. Target may take no other action this turn. This spell cannot be used to move a figure into combat."
  },
  {
    name: "Plague of Insects",
    school: Schools.SUMMONER,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description: "The target figure is attacked by a cloud of stinging or biting insects that irritate and distract. The cloud of insects has a 1\" radius centred on, and moving with, the target figure. It affects all figures, including the target figure, fully or partially within this radius. While being pestered by the insects, a figure has -4 Fight and -4 Shoot. The target figure must pass a Will roll TODO vs the original casting roll at the start of his activation in order to beat off all the insects. Other figures within the radius may move away to escape. A figure may only ever be affected by one Plague of Insects, whether as a target or by virtue of being within the 1\" radius."
  },
  {
    name: "Planar Tear",
    school: Schools.SUMMONER,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description: "The spellcaster creates a small tear in the fabric of the universe. This rift is painful to humans and creatures, but lethal to demons. The spellcaster selects a target point. All figures within 2\" of that point must make a Will roll versus the casting toll or suffer 2 points of damage. Demons that fail the Will roll take damage equal to the casting roll."
  },
  {
    name: "Plane Walk",
    school: Schools.SUMMONER,
    baseCastingNumber: 14,
    range: [Ranges.SELF],
    description: "Although the spellcaster remains in the same physical location, he briefly moves between planes. Until his next activation, he can ignore all terrain when moving, walking through walls and across chasms. He may not be the target of any shooting attacks or spells. The spellcaster will never be considered in combat during the tum, nor can he be attacked by any figure. However, he also may not pick up treasure, OF any way affect other characters or terrain on the board. If he is carrying treasure, he drops it. It is incredibly draining to move between planes of existence, so if a spellcaster attempts to cast this spell in a second consecutive turn, he suffers a -5 modifier. He suffers a -10 modifier if he attempts it three turns in a row and -15 on the fourth turn and beyond."
  },
  {
    name: "Possess",
    school: Schools.SUMMONER,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description: "This spell may only be cast on a member of the spellcaster's own warband. The target is possessed by a demon and gains +2 Fight, +2 Armour, and +2 Will for the remainder of the battle and counts as a demon for all intents and purposes (e.g. Banish, Bind Demon). If removed from the game for any reason (such as being hit by a Banish spell), check for the character's survival as normal. A spellcaster may only have one Possess spell active at a time."
  },
  {
    name: "Summon Demon",
    school: Schools.SUMMONER,
    baseCastingNumber: 12,
    range: [Ranges.TOUCH],
    description: "If successfully cast, a demon is immediately placed on the table within 1\" of the spellcaster. It may not be placed straight into combat. The demon is treated as though it is already subject to a Bind Demon spell. A spellcaster may only have one bound demon at a time. The type of demon summoned depends on the amount by which the spellcaster succeeded on his casting roll: 1-5 Imp, 6-12 Minor Demon, 13+ Major Demon (see Chapter 6: Bestiary). If a spellcaster rolls a 1 while attempting to cast this spell, a demon is placed on the table and immediately attacks the summoner. The type of demon is determined by using the same chart as above, but using the amount by which the casting roll was failed."
  },
  // Thaumaturge.
  {
    name: "Banish",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description: "If successfully cast, all demons within line of sight of the spellcaster must pass an immediate Will roll versus the casting roll or be removed from the game."
  },
  {
    name: "Blinding Light",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description: "The target must make an immediate Will roll versus the casting roll. If he fails, he may not attack, shoot, or cast Line of Sight spells. His Fight stat is reduced to +0 and Move to 1. At the start of each turn, the figure may attempt to break the spell by making another Will roll against the same target, otherwise the effects last until the end of the game."
  },
  {
    name: "Circle of Protection",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 12,
    range: [Ranges.TOUCH],
    description: "Creates a circle with a 3\" diameter that no demon can enter or pass through. This spell has no effect on a possessed individual. A spellcaster may only have one active circle of protection at a time, but he does not have to remain within it."
  },
  {
    name: "Dispel",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description: "Immediately cancels the ongoing effect of any one spell. It cannot unsummon a creature, but it can cancel the control of a creature."
  },
  {
    name: "Heal",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 8,
    range: [Ranges.TOUCH],
    description: "This spell restores 5 points of Health to the target model. This Spell cannot take a model above its starting health."
  },
  {
    name: "Miraculous Cure",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 12,
    range: [Ranges.OUTOFGAME],
    description: "This spell removes all of the effects of one type of Permanent Injury. For example, a wizard suffering from Lost Fingers regrows all his missing digits, regardless of how many times he has suffered that particular injury."
  },
  {
    name: "Restore Life",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 20,
    range: [Ranges.OUTOFGAME],
    description: "This spell can only be cast by a wizard. A wizard may cast this immediately after a game in which a member of his warband has died. If successful, that figure is brought back to may return to action in the very next game."
  },
  {
    name: "Shield",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description: "The target receives +2 Armour for the rest of the game. Multiple Shield spells on the same target have no effect."
  },
  // Witch.
  {
    name: "Animal Companion",
    school: Schools.WITCH,
    baseCastingNumber: 8,
    range: [Ranges.OUTOFGAME],
    description: "The spellcaster summons an animal companion of his choice from the following options to join his warband: Bear, Wolf, Snow Leopard, Ice Toad (see Chapter 6: Bestiary). The animal takes the place of a soldier for the purposes of maximum warband size. Animal companions may not collect treasure or carry items. They may be controlled by another spellcaster using the Control Animal spell, although they will re-join their original warband after the game. Animal companions are more strong-willed than wild examples of their species — give them +2 to the Will stat found in the appropriate Bestiary entry. A spellcaster may only have one animal companion at any time."
  },
  {
    name: "Brew Potion",
    school: Schools.WITCH,
    baseCastingNumber: 12,
    range: [Ranges.OUTOFGAME],
    description: "A spellcaster may attempt to cast this spell before the game. If successful, he gains one potion of any type (except Elixir of Life). This potion may be given to any member of his warband."
  },
  {
    name: "Control Animal",
    school: Schools.WITCH,
    baseCastingNumber: 12,
    range: [Ranges.LOS],
    description: "If successfully cast, the target animal must make an immediate Will roll versus the casting roll. If the roll fails, the spellcaster gains control of the animal for the rest of the game. A spellcaster can only control one animal at a time."
  },
  {
    name: "Curse",
    school: Schools.WITCH,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description: "The target must pass a Will roll versus the casting roll or suffer -1 to its Fight, Shoot, and Will stats for the rest of the game. This spell may be cast on the same target up to five times, for a maximum of -5 to each of the three stats."
  },
  {
    name: "Familiar",
    school: Schools.WITCH,
    baseCastingNumber: 8,
    range: [Ranges.OUTOFGAME],
    description: "A spellcaster may attempt to cast this spell before any game. If successful, he gains a familiar in the form of a small creature of his choosing. A spellcaster with a familiar gains +2 Health (write as a split stat). If the spellcaster is ever reduced to his last point of health, the familiar is destroyed. At the start of the next game, the spellcaster will revert to his normal health, unless another Familiar spell is successfully cast. This additional health may take a spellcaster over his usual maximum for the stat."
  },
  {
    name: "Fog",
    school: Schools.WITCH,
    baseCastingNumber: 8,
    range: [Ranges.LOS],
    description: "A line of fog, 6\" long, 3\" high and 1\" thick settles across the battlefield within line of sight of the caster (use cotton or paper to mark the patch of fog). Figures can move through the fog with no difficulty, but no-one may draw line of sight through it. At the start of each new turn, roll a d20. On a result of 19 or 20 the fog dissipates and is removed from the table."
  },
  {
    name: "Mud",
    school: Schools.WITCH,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description: "All ground within a 3\" radius for a target point becomes rough ground for the rest of the game."
  },
  {
    name: "Poison Dart",
    school: Schools.WITCH,
    baseCastingNumber: 10,
    range: [Ranges.LOS],
    description: "The spellcaster flings a small dart coated in a potent poison. The spellcaster makes an immediate +5 shooting attack against any figure in line of sight. If the attack beats the target's Armour it causes no damage, but he loses standard actions per activation for the rest of the game, or until healed by either a Heal spell or a Healing Potion. The remaining action does not have to be the otherwise compulsory movement. Multiple Poison Darts against the same figure have no effect."
  }
];

export const allSpells = allSpellsNoId.map((spell, index) => ({
  ...spell,
  id: index
}));
