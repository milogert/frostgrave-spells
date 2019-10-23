export const Schools = {
  CHRONOMANCER: 'CHRONOMANCER',
  ELEMENTALIST: 'ELEMENTALIST',
  ENCHANTER: 'ENCHANTER',
  ILLUSIONIST: 'ILLUSIONIST',
  NECROMANCER: 'NECROMANCER',
  SIGILIST: 'SIGILIST',
  SOOTHSAYER: 'SOOTHSAYER',
  SUMMONER: 'SUMMONER',
  THAUMATURGE: 'THAUMATURGE',
  WITCH: 'WITCH',
}

export const Ranges = {
  SELF: "SELF",
  LOS: 'LOS',
  AREA: 'AREA',
  TOUCH: 'TOUCH',
}

const allSpellsNoId = [
  // Chronomancer.
  {
    name: 'Crumble',
    school: Schools.CHRONOMANCER,
    baseCastingNumber: 10,
    range: Ranges.LOS,
    outOfGame: false,
    description: 'This spell only works against man-made structures such as uldings and walls. The spellcaster rapidly speeds up the passing of time in a small area of the structure, causing it to collapse. This can effectively create a doorway-sized hole through any wall, which should be indicated on the table somehow. The spell can also be used to collapse a section of floor beneath a figure standing on a level above the ground. In this case, the figure about to be affected must pass a Will roll versus the casting roll, or fall to the next level down and taking damage appropriately.',
    starred: false,
  },
  // Elementalist.
  {
    name: 'test',
    school: Schools.ELEMENTALIST,
    baseCastingNumber: 10,
    range: Ranges.AREA,
    outOfGame: false,
    description: "Test spell",
  },
  // Enchanter.
  {
    name: 'Call Storm',
    school: Schools.ENCHANTER,
    baseCastingNumber: 12,
    range: Ranges.AREA,
    outOfGame: false,
    description: 'If this spell is successfully cast, all bow and crossbow attack are -1 for the rest of the game. This spell may be cast multiple times (and by multiple spellcasters_, with each additional casting increasing the penalty by a further -1, up to a maximum penalty of -10.',
    starred: false,
  },
  // Illusionist.
  {
    name: 'test',
    school: Schools.ILLUSIONIST,
    baseCastingNumber: 10,
    range: Ranges.AREA,
    outOfGame: false,
    description: "Test spell",
  },
  // Necromancer.
  {
    name: 'test',
    school: Schools.NECROMANCER,
    baseCastingNumber: 10,
    range: Ranges.AREA,
    outOfGame: false,
    description: "Test spell",
  },
  // Sigilist.
  {
    name: 'test',
    school: Schools.SIGILIST,
    baseCastingNumber: 10,
    range: Ranges.AREA,
    outOfGame: false,
    description: "Test spell",
  },
  // Soothsayer.
  {
    name: 'test',
    school: Schools.SOOTHSAYER,
    baseCastingNumber: 10,
    range: Ranges.AREA,
    outOfGame: false,
    description: "Test spell",
  },
  // Summoner.
  {
    name: 'test',
    school: Schools.SUMMONER,
    baseCastingNumber: 10,
    range: Ranges.AREA,
    outOfGame: false,
    description: "Test spell",
  },
  // Thaumaturge.
  {
    name: 'test',
    school: Schools.THAUMATURGE,
    baseCastingNumber: 10,
    range: Ranges.AREA,
    outOfGame: false,
    description: "Test spell",
  },
  // Witch.
  {
    name: 'test',
    school: Schools.WITCH,
    baseCastingNumber: 10,
    range: Ranges.AREA,
    outOfGame: false,
    description: "Test spell",
  },
]

export const allSpells = allSpellsNoId.map((spell, index) => ({...spell, id: index}))

