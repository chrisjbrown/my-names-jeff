import { SvelteApplication }  from '#runtime/svelte/application';

import PremadesShell  from './PremadesShell.svelte';

export class FormShim extends FormApplication
{
   /**
    * @inheritDoc
    */
   constructor(options = {})
   {
      super({}, options);
      new ClientSettingApp(options).render(true, { focus: true });
   }

   async _updateObject() {}
   render() { this.close(); }
}

export class ClientSettingApp extends SvelteApplication
{
   constructor(options)
   {
      super(options);
   }

   /**
    * Default Application options
    *
    * @returns {object} options - Application options.
    * @see https://foundryvtt.com/api/interfaces/client.ApplicationOptions.html
    */
   static get defaultOptions()
   {
      return foundry.utils.mergeObject(super.defaultOptions, {
         id: 'premades-client-setting',
         classes: ['trl'],
         title: 'Premade names',
         resizable: true,
         width: 500,
         height: 'auto',

         svelte: {
            class: PremadesShell,
            target: document.body,
         }
      });
   }
}
