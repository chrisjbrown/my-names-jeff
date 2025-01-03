
import { SvelteApplication }  from '#runtime/svelte/application';
import BuiltInNamesShell          from './BuiltInNamesShell.svelte';

export default class BuiltInNames extends SvelteApplication
{
  static DEFAULT_OPTIONS = {
    id: "built-in-names-form",
    position: {
      width: 640,
      height: "auto"
    },
    window: {
      icon: "fas fa-gear",
      title: "title"
    },
    svelte: {
      class: BuiltInNamesShell,
      target: document.body
    }
  };
}
