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
    name: "test",
    school: Schools.NECROMANCER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.NECROMANCER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.NECROMANCER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.NECROMANCER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.NECROMANCER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.NECROMANCER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.NECROMANCER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.NECROMANCER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  // Sigilist.
  {
    name: "test",
    school: Schools.SIGILIST,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SIGILIST,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SIGILIST,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SIGILIST,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SIGILIST,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SIGILIST,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SIGILIST,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SIGILIST,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  // Soothsayer.
  {
    name: "test",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  // Summoner.
  {
    name: "test",
    school: Schools.SUMMONER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SUMMONER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SUMMONER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SUMMONER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SUMMONER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SUMMONER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SUMMONER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.SUMMONER,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  // Thaumaturge.
  {
    name: "test",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.THAUMATURGE,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  // Witch.
  {
    name: "test",
    school: Schools.WITCH,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.WITCH,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.WITCH,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.WITCH,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.WITCH,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.WITCH,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.WITCH,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  },
  {
    name: "test",
    school: Schools.WITCH,
    baseCastingNumber: 10,
    range: [Ranges.AREA],
    description: "Test spell"
  }
];

export const allSpells = allSpellsNoId.map((spell, index) => ({
  ...spell,
  id: index
}));
