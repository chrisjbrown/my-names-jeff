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
            label: 'Dragon',
            uuid: 'Compendium.trl-test.person-names.RollTable.Ahblwav3O2D2YGOA'
          },
        ]
      },
      {
        label: 'Dwarf',
        names: [
          {
            label: 'Dwarf first name',
            uuid: 'Compendium.trl-test.person-names.RollTable.ch5Q9eDia25s4U3q'
          },
          {
            label: 'Dwarf last name',
            uuid: 'Compendium.trl-test.person-names.RollTable.AQBywLCajYDmBTay'
          }
        ]
      },
      {
        label: 'Elf',
        names: [
          {
            label: 'Elf first name',
            uuid: 'Compendium.trl-test.person-names.RollTable.pI9rMxXDiru1VHKA'
          },
          {
            label: 'Elf last name',
            uuid: 'Compendium.trl-test.person-names.RollTable.URgEZSF5K5ymnMFv'
          }
        ]
      },
      {
        label: 'Gnome',
        names: [
          {
            label: 'Gnome first name',
            uuid: 'Compendium.trl-test.person-names.RollTable.pu23RxNtwvOxff80'
          },
          {
            label: 'Gnome last name',
            uuid: 'Compendium.trl-test.person-names.RollTable.CWxxFZUl7zxLW7FG'
          }
        ]
      },
      {
        label: 'Goblin',
        names: [
          {
            label: 'Goblin first name',
            uuid: 'Compendium.trl-test.person-names.RollTable.2aEBh73vpcXVS6dP'
          },
          {
            label: 'Goblin last name',
            uuid: 'Compendium.trl-test.person-names.RollTable.QL1RE50ZUs0k6yfv'
          }
        ]
      },
      {
        label: 'Halfling',
        names: [
          {
            label: 'Halfling first name',
            uuid: 'Compendium.trl-test.person-names.RollTable.QIgjNxaYpe2zLa4q'
          },
          {
            label: 'Halfling last name',
            uuid: 'Compendium.trl-test.person-names.RollTable.HjKWeUdSSVLvskj6'
          }
        ]
      },
      {
        label: 'Human',
        names: [
          {
            label: 'Human first name',
            uuid: 'Compendium.trl-test.person-names.RollTable.b1UKEsT1IZREtBqt'
          },
          {
            label: 'Human last name',
            uuid: 'Compendium.trl-test.person-names.RollTable.hlSrvW0A8fpUtlya'
          }
        ]
      },
      {
        label: 'Orc',
        names: [
          {
            label: 'Orc first name',
            uuid: 'Compendium.trl-test.person-names.RollTable.JDToupRQAQv7wRei'
          },
          {
            label: 'Orc last name',
            uuid: 'Compendium.trl-test.person-names.RollTable.xShWEo6uULMnplxG'
          }
        ]
      },
      {
        label: 'Tiefling',
        names: [
          {
            label: 'Tiefling first name',
            uuid: 'Compendium.trl-test.person-names.RollTable.Dr2JJWS3tdlzBraR'
          },
          {
            label: 'Tiefling last name',
            uuid: 'Compendium.trl-test.person-names.RollTable.r9Q2AS9SuP9w9P1J'
          }
        ]
      }
    ]
  }
};

export { premades, constants, sessionConstants, settings };

