<script lang="ts">
    import SearchCities from "$lib/components/searchcities.svelte";
    import Searchform from "$lib/components/searchform.svelte";
    import type { CitiesReturn } from "$lib/types/cities";
    import { page } from '$app/stores'
    import { goto } from '$app/navigation';

    /** @type {import('./$types').PageData} */    
    export let data: CitiesReturn;
    let raSourceParam = $page.url.searchParams.get("s") || "default"
    let raSource =  raSourceParam == null || raSourceParam == "default" ? false : true
    const exampleItems = [
      1,1,1,1,1,1,1
    ]
    

</script>
{#if data.q}
<div class="form-control w-full  items-center">
    <label class="label cursor-pointer flex justify-start gap-2 items-center content-center w-3/5 max-w-7xl">
      <span class="label-text">resident advisor</span> 
      <input type="checkbox" class="toggle toggle-error toggle-sm"  bind:checked={raSource} on:click={() => {
        let q = $page.url.searchParams.get('q') || ""
        let query = new URLSearchParams()
        query.set('q', q);
        query.set('s', raSource ? "default" : "ra");
        goto(`?${query.toString()}`)    
      }}/>
    </label>
</div>
<SearchCities items={data.cities}/>

{:else}
    <div class="w-full h-full items-center flex flex-col  gap-4">
    <div class="w-3/5 max-w-7xl flex flex-col gap-4">
      {#each exampleItems as item}
    <div
        class="
        card
        card-compact
        rounded-lg
        min-w-96
        shadow-2xl
        bg-base-300/75
        hover:cursor-pointer
        hover:bg-base-300
        group

    "
    >
    <div class="card-body flex flex-row justify-between items-center gap-8 animate-pulse">

        <div
            class="font-bold text-white whitespace-nowrap text-ellipsis overflow-hidden h-4 bg-white/20 rounded-full w-1/3"
        >
    </div>
        <div class="bg-white/20 h-4 w-4 rounded-full"></div>
    </div>
  </div>
{/each}
    </div>
    
</div>
{/if}