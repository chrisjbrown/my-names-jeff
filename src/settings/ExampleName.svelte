<script lang="ts">
   import { localize } from "#runtime/util/i18n";
   export let tables = [];
   let prevTables = [];
   let exampleNames = [];

   async function getNames(tables) {
      const [...nameTables] = await Promise.all(tables.map(async (uuid) => await fromUuid(uuid)));
      const [...nameRolls] = await Promise.all(nameTables.map(async (table) => await table.roll()));
      const examples = nameRolls.map((roll) => roll.results[0].text);
      exampleNames = examples.join(" ");
      prevTables = tables;
   }

   function newTables() {
      return JSON.stringify(tables) !== JSON.stringify(prevTables);
   }

   $: tables && newTables() && getNames(tables);
</script>

<div class="example">
   {localize("mnj.settings.custom.example")}: {exampleNames}
</div>

<style lang="scss">
</style>
