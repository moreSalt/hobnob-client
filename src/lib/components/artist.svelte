<script lang="ts">
    import type { ArtistResponse } from "$lib/types/artist";
    import Events from "./events.svelte";
    import { page } from '$app/stores'
    let source = $page.url.searchParams.get("s") || "default"
    console.log(source)
    export let res: ArtistResponse

</script>


<div class=" items-center justify-center flex flex-col gap-8 p-4">
    <!-- ARTIST -->
    <div class="flex flex-col gap-8 w-full lg:w-3/5 lg:max-w-7xl">
      <!-- <a class="text-xs" href="/c">Return to search</a> -->

        <div class="flex gap-4 items-center">
            <div class="avatar">
                <div class="w-24 rounded-full shadow-2xl shadow-base-100">
                  <img src={res.image} alt="{res.name} profile photo"/>
                </div>
              </div>
              <div class="flex flex-col">
                <h1 class="text-4xl font-bold text-error" class:text-white={source !== "ra"}>{res.name}</h1>
                <p class="text-sm">Artist</p>
            </div>
        </div>
    </div>
    <Events res={res.events} />
</div>

