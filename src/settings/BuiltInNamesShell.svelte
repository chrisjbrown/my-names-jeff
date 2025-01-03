<script>
   import { ApplicationShell }   from '#runtime/svelte/component/application';
   import { builtIns } from "../constants";
   import ExampleName from './ExampleName.svelte';
   export let elementRoot = void 0;
   export let settingStore = void 0;
   let types = $settingStore.types ?? []
   let enabledBuiltIns = $settingStore.enabledBuiltIns ?? {}
   let openAccordionsIndexes = []

   $: (() => {
      $settingStore.types = types
   }) ()
   $: (() => {
      $settingStore.enabledBuiltIns = enabledBuiltIns
   }) ()

  async function onAddType () {
      types = [...types, {
         label: '',
         names: []
      }]
  }

  async function onDrop (event, index) {
      event.stopPropagation()
      event.preventDefault()
      let dropData
      try {
         dropData = JSON.parse(event.dataTransfer.getData('text/plain'))
      } catch (err) {
         console.error(err)
         return false
      }

      if (dropData.type !== 'RollTable') {
         ui.notifications.warn('Not permitted item drop')
         return false
      }

      const item = await fromUuid(dropData.uuid)

      let newTypes = types
      newTypes[index].names.push({
         label: item.name,
         uuid: dropData.uuid
      })
      types = newTypes
  }

  async function onRollName (name) {
      const table = await fromUuid(name.uuid);

      const {results} = await table.roll()
      table.toMessage(results)
  }

  function onRemoveName(typeIndex, nameIndex) {
      let newTypes = types
      newTypes[typeIndex].names.splice(nameIndex, 1)
      types = newTypes
  }
  function onMoveUp(typeIndex, nameIndex) {
      let newTypes = types
      newTypes[typeIndex].names.splice(nameIndex - 1, 0, newTypes[typeIndex].names.splice(nameIndex, 1)[0]);
      types = newTypes
   }
  function onMoveDown(typeIndex, nameIndex) {
      let newTypes = types
      newTypes[typeIndex].names.splice(nameIndex + 1, 0, newTypes[typeIndex].names.splice(nameIndex, 1)[0]);
      types = newTypes
   }
  function onToggleAccordion(index) {
      const newIndexes = openAccordionsIndexes
      const foundIndex = openAccordionsIndexes.findIndex((item) => item === index)
      if (foundIndex === -1) {
         openAccordionsIndexes.push(index)
      } else {
         openAccordionsIndexes.splice(foundIndex, 1)
      }
      openAccordionsIndexes = newIndexes
   }
   function onDelete(index) {
      let newTypes = types
      newTypes.splice(index, 1)
      types = newTypes
   }
   function onSettingChange(event, setting) {
      enabledBuiltIns[setting] = event.currentTarget.checked
   }
</script>

<svelte:options accessors={true}/>

<ApplicationShell bind:elementRoot>
   <div>
      <div>
         <fieldset>
            <legend>Enable built ins</legend>
            {#each Object.keys(builtIns) as builtInKey}
            <label class="built-in">
               <input type="checkbox" on:change={(e) => onSettingChange(e, builtInKey)} checked={enabledBuiltIns[builtInKey]} />
               {builtIns[builtInKey].label}
            </label>
            {/each}
         </fieldset>
      </div>
      <div class="custom-types">
         <button on:click={onAddType}>Add type</button>
         {#each types as type, typeIndex}
            <fieldset class="type" on:drop={(e) => onDrop(e, typeIndex)}>
               <legend class="legend">
                  <button on:click={() => onToggleAccordion(typeIndex)} class="toggle">
                     {#if openAccordionsIndexes.includes(typeIndex)}
                     <i class="fas fa-chevron-up"></i>
                     {:else}
                     <i class="fas fa-chevron-down"></i>
                     {/if}
                  </button>
                  <input type="text" placeholder="label" bind:value={type.label} />
                  <button on:click={() => onDelete(typeIndex)} class="delete">
                     <i class="fas fa-trash" title="Remove"></i>
                  </button>
               </legend>
               {#if openAccordionsIndexes.includes(typeIndex)}
                  <ol class="name-list">
                  {#each type.names as name, nameIndex}
                     <li class="name-item">
                        <div class="move">
                           <button on:click={() => onMoveUp(typeIndex, nameIndex)} disabled={nameIndex === 0}>
                              <i class="fas fa-chevron-up" title="Up"></i>
                           </button>
                           <button on:click={() => onMoveDown(typeIndex, nameIndex)} disabled={nameIndex === type.names.length - 1}>
                              <i class="fas fa-chevron-down" title="Down"></i>
                           </button>
                        </div>
                        <button on:click={() => onRemoveName(typeIndex, nameIndex)} class="remove">
                           <i class="fas fa-trash" title="Remove"></i>
                        </button>
                        <button on:click={() => onRollName(name)}>{name.label}</button>
                     </li>
                  {/each}
                  </ol>
                  {#if type.names.length > 0}
                     <ExampleName tables={type.names.map((n) => n.uuid)} />
                  {:else}
                     <div class="drop">drop rolltable</div>
                  {/if}
               {/if}
            </fieldset>
         {/each}
      </div>
   </div>
</ApplicationShell>

<style lang="scss">
   i {
      margin-right: 0;
   }
   .built-in {
      display: flex;
      align-items: center;
   }
   .legend {
      display: flex;
      align-items: center;
      button {
         width: auto;
      }
      .toggle {
         margin-right: 5px;
      }
      .delete {
         margin-left: 5px;
      }
   }
   .type {
      margin-top: 10px;
   }
   .custom-types {
      margin-top: 20px;
   }
   .name-list {
      .name-item {
         display: flex;
         align-items: center;
         margin-top: 5px;

         button {
            height: 30px;
         }

         .move {
            button {
               height: 15px;
               display: flex;
               align-items: center;
               justify-content: center;
               margin: 0;
               padding: 0;

               &:disabled {
                  opacity: 50%;
                  cursor: default;
               }

               i {
                  padding: 0;
                  margin: 0;
               }
            }
         }

         .remove {
            width: 50px;
         }
      }
   }
   .drop {
      display: flex;
      margin-top: 10px;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      border: 1px dashed black;
   }
</style>
