export const SCHOOL_ENCHANT = 'SCHOOL_ENCHANT'
export const SCHOOL_EVOKE = 'SCHOOL_EVOKE'
export const Schools = {
  CHRONOMANCER: 'Chronomancer',
  ELEMENTALIST: 'Elementalist',
  ENCHANTER: 'Enchanter',
  ILLUSIONIST: 'Illusionist',
  NECROMANCER: 'Necromancer',
  SIGILIST: 'Sigilist',
  SOOTHSAYER: 'Soothsayer',
  SUMMONER: 'Summoner',
  THAUMATURGE: 'Thaumaturge',
  WITCH: 'Witch',
}

export const Ranges = {
  SELF: 'Self Only',
  LOS: 'Line of Sight',
  AREA: 'Area Effect',
  TOUCH: 'Touch',
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
]

export const allSpells = allSpellsNoId.map((spell, index) => ({...spell, id: index}))

