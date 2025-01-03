<script>
   import { builtIns } from "../constants";
   import { ApplicationShell }   from '#runtime/svelte/component/application';
   import { getContext }            from 'svelte';
   const { application } = getContext('#external');
   export let elementRoot;
   export let settingStore = void 0;
   export let document = void 0;
   let types = $settingStore.types
   const enabledBuiltIns = (() => {
      return Object.keys($settingStore.enabledBuiltIns).map((key) => $settingStore.enabledBuiltIns[key]).some((builtIn) => builtIn === true)
   }) ()

  async function onRollName (type) {
      try {
         const [...nameTables] = await Promise.all(type.names.map(async (name) => await fromUuid(name.uuid)))
         const [...nameRolls] = await Promise.all(nameTables.map(async (table) => await table.roll()))
         const names = nameRolls.map((roll) => roll.results[0].text)
         document.update({ name: `${names.join(' ')}` });
         return application.close()
      } catch (error) {
         console.error('Error replacing document name', error)
      }
   }
</script>

<!-- This is necessary for Svelte to generate accessors TRL can access for `elementRoot` -->
<svelte:options accessors={true}/>

<!-- ApplicationShell provides the popOut / application shell frame, header bar, content areas -->
<!-- ApplicationShell exports `elementRoot` which is the outer application shell element -->
<ApplicationShell bind:elementRoot>
   <main>
      <h1>Select a name type</h1>
      <div class="list">
         {#if types.length > 0}
         <h2>Custom types</h2>
         {#each types as type}
            <button on:click={() => onRollName(type)}>
               {type.label}
            </button>
         {/each}
         {/if}

         {#if enabledBuiltIns}
         <h2>Built ins</h2>
         {#each Object.keys($settingStore.enabledBuiltIns) as builtInKey }
            <h3>{builtIns[builtInKey].label}</h3>
            {#each builtIns[builtInKey].types as type }
            <button on:click={() => onRollName(type)}>
               {type.label}
            </button>
            {/each}
         {/each}
         {/if}

         {#if types.length === 0 && !enabledBuiltIns }
         <span>no names configured</span>
         {/if}
      </div>
   </main>
</ApplicationShell>

<style lang="scss">
   main {
      text-align: center;
      display: flex;
      flex-direction: column;
   }

   .list {
      button {
         margin-top: 5px;
      }
   }
</style>
