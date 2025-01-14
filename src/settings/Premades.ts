import { SvelteApplication } from "#runtime/svelte/application";
import PremadesShell from "./PremadesShell.svelte";

export default class Premades extends SvelteApplication {
   static DEFAULT_OPTIONS = {
      id: "premade-names-form",
      position: {
         width: 640,
         height: "auto",
      },
      window: {
         icon: "fas fa-gear",
         title: "title",
      },
      svelte: {
         class: PremadesShell,
         target: document.body,
      },
   };
}
