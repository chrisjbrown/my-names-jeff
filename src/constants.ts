/**
 * Defines the main constants for module name and label.
 *
 * @type {{moduleId: string, moduleLabel: string}}
 */
const constants = {
  moduleId: 'my-names-jeff',
  moduleLabel: `My names jeff`
};

/**
 * @type {ESSettingConstants} Defines the Foundry game setting keys.
 */
const settings = {
  types: 'types',
  premades: 'premades',
  enabledPremades: 'enabledPremades',
};

/**
 * @type {ESSessionConstants} Defines all the module session storage static constants.
 */
const sessionConstants = {
  types: `${constants.moduleId}.${settings.types}`,
  premades: `${constants.moduleId}.${settings.premades}`,
  enabledPremades: `${constants.moduleId}.${settings.enabledPremades}`,
};

const premades = {
  dnd: {
    label: 'D&D5e',
    types: [
      {
        label: 'Dragon',
        names: [
          {
            label: 'Dragon name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.rlWetH2LKYBuUm4Q'
          },
        ]
      },
      {
        label: 'Dwarf',
        names: [
          {
            label: 'Dwarf first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.la7lALKjYDJBByP0'
          },
          {
            label: 'Dwarf last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.SAs678VQ57jIwPv3'
          }
        ]
      },
      {
        label: 'Elf',
        names: [
          {
            label: 'Elf first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.UAHqXGedhTpYUbOx'
          },
          {
            label: 'Elf last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.yC31uFuuJbZZTvO3'
          }
        ]
      },
      {
        label: 'Gnome',
        names: [
          {
            label: 'Gnome first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.rK0rsKlFMbKrZFxG'
          },
          {
            label: 'Gnome last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.byH0ERUbUoSWXSBH'
          }
        ]
      },
      {
        label: 'Goblin',
        names: [
          {
            label: 'Goblin first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.YXhiK7Lv1rMIJkS3'
          },
          {
            label: 'Goblin last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.Tnk02tvaJEKO1LLs'
          }
        ]
      },
      {
        label: 'Halfling',
        names: [
          {
            label: 'Halfling first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.Hv7BOnQ9ekb3PzJn'
          },
          {
            label: 'Halfling last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.r49pqu5o0pPD3sJO'
          }
        ]
      },
      {
        label: 'Human',
        names: [
          {
            label: 'Human first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.0NsmJ0UkEnBeXmih'
          },
          {
            label: 'Human last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.rwVx4dIX6iXHmcIu'
          }
        ]
      },
      {
        label: 'Orc',
        names: [
          {
            label: 'Orc first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.iAkHl8Kf7VVvgfoZ'
          },
          {
            label: 'Orc last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.BILtCKXAcTbACyB8'
          }
        ]
      },
      {
        label: 'Tiefling',
        names: [
          {
            label: 'Tiefling first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.R1hHQvobWuANpLCo'
          },
          {
            label: 'Tiefling last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.uL7nDaaorp1hga3a'
          }
        ]
      }
    ]
  },
  alien: {
    label: "AlienRPG",
    types: [
      {
        label: 'Android',
        names: [
          {
            label: 'Android',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.dBvxeWBH4oskiJQn'
          },
        ]
      },
      {
        label: 'Human',
        names: [
          {
            label: 'Human first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.8rUbEtIpuDyBABP6'
          },
          {
            label: 'Human last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.OOREJSGRfOKKdAdv'
          },
        ]
      }
    ]
  },
  pf2e: {
    label: "Pathfinder2e",
    types: [
      {
        label: 'Athamaru',
        names: [
          {
            label: 'Athamaru name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.RZGUBTTEekd7ZG8L'
          }
        ]
      },
      {
        label: 'Azarketi',
        names: [
          {
            label: 'Azarketi name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.uRjH4NxpG68M7dTL'
          }
        ]
      },
      {
        label: 'Catfolk',
        names: [
          {
            label: 'Catfolk name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.NGt2JJRXedOHV1r1'
          }
        ]
      },
      {
        label: 'Centaur',
        names: [
          {
            label: 'Centaur name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.lpvGtFnBRWFdoRwq'
          }
        ]
      },
      {
        label: 'Dwarf',
        names: [
          {
            label: 'Dwarf first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.la7lALKjYDJBByP0'
          },
          {
            label: 'Dwarf last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.SAs678VQ57jIwPv3'
          }
        ]
      },
      {
        label: 'Elf',
        names: [
          {
            label: 'Elf first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.UAHqXGedhTpYUbOx'
          },
          {
            label: 'Elf last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.yC31uFuuJbZZTvO3'
          }
        ]
      },
      {
        label: 'Fetchling',
        names: [
          {
            label: 'Fetchling name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.JIoBoHJji0gH42Sx'
          }
        ]
      },
      {
        label: 'Hobgoblin',
        names: [
          {
            label: 'Hobgoblin name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.iQk73TkVjjqy1EqL'
          }
        ]
      },
      {
        label: 'Kholo',
        names: [
          {
            label: 'Kholo name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.OqnFnDsL8JGTgMfk'
          }
        ]
      },
      {
        label: 'Kitsune',
        names: [
          {
            label: 'Kitsune name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.XLdsCDY8JxQ54WJ6'
          }
        ]
      },
      {
        label: 'Kobold',
        names: [
          {
            label: 'Kobold name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.fVUpQjDXdV1j9NQW'
          }
        ]
      },
      {
        label: 'Lizardfolk',
        names: [
          {
            label: 'Lizardfolk name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.eV3ydwAEGrj2iJmu'
          }
        ]
      },
      {
        label: 'Merfolk',
        names: [
          {
            label: 'Merfolk name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.uokSBQG8hwiPXlTx'
          }
        ]
      },
      {
        label: 'Minotaur',
        names: [
          {
            label: 'Minotaur name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.CHE9wmW1Uio1k3yY'
          }
        ]
      },
      {
        label: 'Nagaji',
        names: [
          {
            label: 'Nagaji name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.PIwRHGr3lPtsBl6a'
          }
        ]
      },
      {
        label: 'Ratfolk',
        names: [
          {
            label: 'Ratfolk name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.FvtKjVqcJkBhBJ9t'
          }
        ]
      },
      {
        label: 'Samsaran',
        names: [
          {
            label: 'Samsaran first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.a5W4tJ9VlcC8u91S'
          },
          {
            label: 'Samsaran last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.xtjjILcvCK4TJi02'
          }
        ]
      },
      {
        label: 'Tanuki',
        names: [
          {
            label: 'Tanuki name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.8jT0MdZ5oNNabL1u'
          },
        ]
      },
      {
        label: 'Tengu',
        names: [
          {
            label: 'Tengu name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.zRC0OK343HxCuibJ'
          },
        ]
      },
      {
        label: 'Tripkee',
        names: [
          {
            label: 'Tripkee name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.vpCvBOB6Y4Lko7Td'
          },
        ]
      },
      {
        label: 'Vanara',
        names: [
          {
            label: 'Vanara name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.lKLXsP392AV2vj2L'
          },
        ]
      },
      {
        label: 'Wayang',
        names: [
          {
            label: 'Wayang name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.jxBezjEU9FAXyStF'
          },
        ]
      },
      {
        label: 'Gnome',
        names: [
          {
            label: 'Gnome first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.rK0rsKlFMbKrZFxG'
          },
          {
            label: 'Gnome last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.byH0ERUbUoSWXSBH'
          }
        ]
      },
      {
        label: 'Goblin',
        names: [
          {
            label: 'Goblin first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.YXhiK7Lv1rMIJkS3'
          },
          {
            label: 'Goblin last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.Tnk02tvaJEKO1LLs'
          }
        ]
      },
      {
        label: 'Halfling',
        names: [
          {
            label: 'Halfling first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.Hv7BOnQ9ekb3PzJn'
          },
          {
            label: 'Halfling last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.r49pqu5o0pPD3sJO'
          }
        ]
      },
      {
        label: 'Human',
        names: [
          {
            label: 'Human first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.0NsmJ0UkEnBeXmih'
          },
          {
            label: 'Human last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.rwVx4dIX6iXHmcIu'
          }
        ]
      },
      {
        label: 'Leshy',
        names: [
          {
            label: 'Leshy name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.euXHHehI3T9FvVJU'
          }
        ]
      },
      {
        label: 'Orc',
        names: [
          {
            label: 'Orc first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.iAkHl8Kf7VVvgfoZ'
          },
          {
            label: 'Orc last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.BILtCKXAcTbACyB8'
          }
        ]
      }
    ]
  }
};

export { premades, constants, sessionConstants, settings };

