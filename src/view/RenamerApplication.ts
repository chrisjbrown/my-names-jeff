import { SvelteApplication } from "#runtime/svelte/application";
import RenamerApplicationShell from "./RenamerApplicationShell.svelte";

export default class RenamerApplication extends SvelteApplication {
   /**
    * Default Application options
    *
    * @returns {object} options - Application options.
    * @see https://foundryvtt.com/api/Application.html#options
    */
   static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
         title: "TemplateESM.title",
         width: "auto",

         svelte: {
            class: RenamerApplicationShell,
            target: document.body,
            props: function () {
               return { ...this.options.props };
            },
         },
      });
   }
}
