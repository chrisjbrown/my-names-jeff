<script lang=ts>
   import { premades as allPremades } from "../constants";
   import { ApplicationShell }   from '#runtime/svelte/component/application';
   import { getContext }            from 'svelte';
   import { gameSettings } from '../settings/settingsStore';

   const { application } = getContext('#external');
   export let elementRoot;
   export let document = void 0;

   let types = gameSettings.getStore('types');
   let enabledPremades = gameSettings.getStore('enabledPremades');
   const premades = Object.entries(allPremades).filter(([key]) => $enabledPremades.includes(key)).map(([_, value]) => value)

   const noNames = $types.length === 0 && premades.length === 0

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
      <h1>Select a name group</h1>
      <div class="groups">
         {#if noNames }
            <span>no names configured</span>
         {:else}
            {#if $types.length > 0}
               <div class="group">
                  <h3>Custom</h3>
                  <div class="list">
                     {#each $types as type}
                        <button on:click={() => onRollName(type)}>
                           {type.label}
                        </button>
                     {/each}
                  </div>
               </div>
            {/if}

            {#each premades as premade }
               <div class="group">
                  <h3>{premade.label}</h3>
                  <div class="list">
                     {#each premade.types as type }
                     <button on:click={() => onRollName(type)}>
                        {type.label}
                     </button>
                     {/each}
                  </div>
               </div>
            {/each}
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
