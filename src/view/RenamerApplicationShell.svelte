<script>
   import { builtIns } from "../constants";
   import { ApplicationShell }   from '#runtime/svelte/component/application';
   import { getContext }            from 'svelte';
   const { application } = getContext('#external');
   export let elementRoot;
   export let settingStore = void 0;
   export let document = void 0;
   let types = $settingStore.types
   const enabledBuiltIns = Object.keys($settingStore.enabledBuiltIns).map((key) => $settingStore.enabledBuiltIns[key]).some((builtIn) => builtIn === true)
   const noNames = types.length === 0 && !enabledBuiltIns

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
      <div class="groups">
         {#if noNames }
            <span>no names configured</span>
         {:else}
            {#if types.length > 0}
               <div class="group">
                  <h3>Custom</h3>
                  <div class="list">
                     {#each types as type}
                        <button on:click={() => onRollName(type)}>
                           {type.label}
                        </button>
                     {/each}
                  </div>
               </div>
            {/if}

            {#if enabledBuiltIns}
               {#each Object.keys($settingStore.enabledBuiltIns) as builtInKey }
                  <div class="group">
                     <h3>{builtIns[builtInKey].label}</h3>
                     <div class="list">
                        {#each builtIns[builtInKey].types as type }
                        <button on:click={() => onRollName(type)}>
                           {type.label}
                        </button>
                        {/each}
                     </div>
                  </div>
               {/each}
            {/if}
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

   .groups {
      display: flex;
      gap: 10px;
      justify-content: center;

      .group {
         padding: 10px;
         border: 1px solid maroon;

         h3: {
            white-space: nowrap;
         }
      }
   }

   .list {
      button {
         margin-top: 5px;
         white-space: nowrap;
      }
   }
</style>
