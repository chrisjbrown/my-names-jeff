import { SvelteApplication }  from '#runtime/svelte/application';

import RenamerApplicationShell from './RenamerApplicationShell.svelte';
import { gameSettings } from '../gamesettings';
import { constants, settings } from '../constants';

export default class RenamerApplication extends SvelteApplication
{
   constructor(options)
   {
      super(options);

      /**
       * Register a world game setting w/ TJSGameSettings. This makes a client setting / localstorage store available
       * to serialize the app state.
       */
      gameSettings.register({
         namespace: constants.moduleId,
         key: settings.appStateClient,
         options: {
            scope: 'world',
            config: false,
            default: {},
            type: Object
         }
      });

      try
      {
         // Attempt to parse client game setting and set application state.
         this.state.set(game.settings.get(constants.moduleId, settings.appStateClient));
      }
      catch (err) { /**/ }
   }
   /**
    * Default Application options
    *
    * @returns {object} options - Application options.
    * @see https://foundryvtt.com/api/Application.html#options
    */
   static get defaultOptions()
   {
      return foundry.utils.mergeObject(super.defaultOptions, {
         title: 'TemplateESM.title',  // Automatically localized from `lang/en.json`.
         width: 300,

         svelte: {
            class: RenamerApplicationShell,
            target: document.body,
            /**
             * You can provide a function and the `this` context is the application when invoked.
             *
             * @param args
             *
             * @param props
             *
             * @this {AppStateClientSettingApp}
             *
             * @returns {object} Props for Svelte component.
             */
            props: function()
            {
               // Creates a store
               return { ...this.options.props, settingStore: gameSettings.getStore(settings.appStateClient) };
            }
         }
      });
   }
}