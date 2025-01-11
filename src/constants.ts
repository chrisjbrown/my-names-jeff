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
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.Ahblwav3O2D2YGOA'
          },
        ]
      },
      {
        label: 'Dwarf',
        names: [
          {
            label: 'Dwarf first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.ch5Q9eDia25s4U3q'
          },
          {
            label: 'Dwarf last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.AQBywLCajYDmBTay'
          }
        ]
      },
      {
        label: 'Elf',
        names: [
          {
            label: 'Elf first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.pI9rMxXDiru1VHKA'
          },
          {
            label: 'Elf last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.URgEZSF5K5ymnMFv'
          }
        ]
      },
      {
        label: 'Gnome',
        names: [
          {
            label: 'Gnome first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.pu23RxNtwvOxff80'
          },
          {
            label: 'Gnome last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.CWxxFZUl7zxLW7FG'
          }
        ]
      },
      {
        label: 'Goblin',
        names: [
          {
            label: 'Goblin first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.2aEBh73vpcXVS6dP'
          },
          {
            label: 'Goblin last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.QL1RE50ZUs0k6yfv'
          }
        ]
      },
      {
        label: 'Halfling',
        names: [
          {
            label: 'Halfling first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.QIgjNxaYpe2zLa4q'
          },
          {
            label: 'Halfling last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.HjKWeUdSSVLvskj6'
          }
        ]
      },
      {
        label: 'Human',
        names: [
          {
            label: 'Human first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.b1UKEsT1IZREtBqt'
          },
          {
            label: 'Human last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.hlSrvW0A8fpUtlya'
          }
        ]
      },
      {
        label: 'Orc',
        names: [
          {
            label: 'Orc first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.JDToupRQAQv7wRei'
          },
          {
            label: 'Orc last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.xShWEo6uULMnplxG'
          }
        ]
      },
      {
        label: 'Tiefling',
        names: [
          {
            label: 'Tiefling first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.Dr2JJWS3tdlzBraR'
          },
          {
            label: 'Tiefling last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.r9Q2AS9SuP9w9P1J'
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
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.J0VtTOTnCcFqf5r4'
          }
        ]
      },
      {
        label: 'Azarketi',
        names: [
          {
            label: 'Azarketi name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.WzWAInljREXRwkB9'
          }
        ]
      },
      {
        label: 'Catfolk',
        names: [
          {
            label: 'Catfolk name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.FkQWxv2IAUWzNdP5'
          }
        ]
      },
      {
        label: 'Centaur',
        names: [
          {
            label: 'Centaur name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.eW5eovuAhTNotLKC'
          }
        ]
      },
      {
        label: 'Dwarf',
        names: [
          {
            label: 'Dwarf first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.ch5Q9eDia25s4U3q'
          },
          {
            label: 'Dwarf last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.AQBywLCajYDmBTay'
          }
        ]
      },
      {
        label: 'Elf',
        names: [
          {
            label: 'Elf first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.pI9rMxXDiru1VHKA'
          },
          {
            label: 'Elf last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.URgEZSF5K5ymnMFv'
          }
        ]
      },
      {
        label: 'Fetchling',
        names: [
          {
            label: 'Fetchling name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.YEFd28RuKseuPa1K'
          }
        ]
      },
      {
        label: 'Hobgoblin',
        names: [
          {
            label: 'Hobgoblin name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.C89qZBSrjZD0eApH'
          }
        ]
      },
      {
        label: 'Kholo',
        names: [
          {
            label: 'Kholo name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.llfjFdESQOrLgVvm'
          }
        ]
      },
      {
        label: 'Kitsune',
        names: [
          {
            label: 'Kitsune name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.rKTLYsY9XiIUUGch'
          }
        ]
      },
      {
        label: 'Kobold',
        names: [
          {
            label: 'Kobold name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.irukMRzncAhXZKpH'
          }
        ]
      },
      {
        label: 'Lizardfolk',
        names: [
          {
            label: 'Lizardfolk name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.r5dUIhZeWavViHG4'
          }
        ]
      },
      {
        label: 'Merfolk',
        names: [
          {
            label: 'Merfolk name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.nvjS17AUqrdldspF'
          }
        ]
      },
      {
        label: 'Minotaur',
        names: [
          {
            label: 'Minotaur name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.x5nk8UmFvAM71Msf'
          }
        ]
      },
      {
        label: 'Nagaji',
        names: [
          {
            label: 'Nagaji name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.ZYCRwwXFxPRPonWA'
          }
        ]
      },
      {
        label: 'Ratfolk',
        names: [
          {
            label: 'Ratfolk name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.Jmwr3EKUkhVYhQyf'
          }
        ]
      },
      {
        label: 'Samsaran',
        names: [
          {
            label: 'Samsaran first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.oba2jykyH205SDyR'
          },
          {
            label: 'Samsaran last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.PMLzNWZ8oBLK4P9h'
          }
        ]
      },
      {
        label: 'Tanuki',
        names: [
          {
            label: 'Tanuki name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.j8RieCfeoa2zBLyF'
          },
        ]
      },
      {
        label: 'Tengu',
        names: [
          {
            label: 'Tengu name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.XDgwbebqWMxS9G4V'
          },
        ]
      },
      {
        label: 'Tripkee',
        names: [
          {
            label: 'Tripkee name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.nbdZ5h8XinvjieAN'
          },
        ]
      },
      {
        label: 'Vanara',
        names: [
          {
            label: 'Vanara name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.2GPhMSEen5hRlaGF'
          },
        ]
      },
      {
        label: 'Wayang',
        names: [
          {
            label: 'Wayang name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.TYRc9Kp1qjdJLv2E'
          },
        ]
      },
      {
        label: 'Gnome',
        names: [
          {
            label: 'Gnome first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.pu23RxNtwvOxff80'
          },
          {
            label: 'Gnome last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.CWxxFZUl7zxLW7FG'
          }
        ]
      },
      {
        label: 'Goblin',
        names: [
          {
            label: 'Goblin first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.2aEBh73vpcXVS6dP'
          },
          {
            label: 'Goblin last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.QL1RE50ZUs0k6yfv'
          }
        ]
      },
      {
        label: 'Halfling',
        names: [
          {
            label: 'Halfling first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.QIgjNxaYpe2zLa4q'
          },
          {
            label: 'Halfling last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.HjKWeUdSSVLvskj6'
          }
        ]
      },
      {
        label: 'Human',
        names: [
          {
            label: 'Human first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.b1UKEsT1IZREtBqt'
          },
          {
            label: 'Human last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.hlSrvW0A8fpUtlya'
          }
        ]
      },
      {
        label: 'Leshy',
        names: [
          {
            label: 'Leshy name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.PRaq4sxk1PtxA2Eq'
          }
        ]
      },
      {
        label: 'Orc',
        names: [
          {
            label: 'Orc first name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.JDToupRQAQv7wRei'
          },
          {
            label: 'Orc last name',
            uuid: 'Compendium.my-names-jeff.person-names.RollTable.xShWEo6uULMnplxG'
          }
        ]
      }
    ]
  }
};

export { premades, constants, sessionConstants, settings };

