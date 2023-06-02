<script lang="ts">
    import type { ArtistResponse } from "$lib/types/artist";
    import Events from "./events.svelte";
    export let res: ArtistResponse

</script>


<div class=" items-center justify-center flex flex-col gap-8 p-4">
    <!-- ARTIST -->
    <div class="flex flex-col gap-8 w-full lg:w-3/5">
        <div class="flex gap-4 items-center">
            <div class="avatar">
                <div class="w-24 rounded-full shadow-2xl shadow-base-100">
                  <img src={res.image} alt="{res.name} profile photo"/>
                </div>
              </div>
              <div class="flex flex-col">
                <h1 class="text-4xl font-bold text-white">{res.name}</h1>
                <p class="text-sm">Artist</p>
            </div>
        </div>
    </div>

    <!-- <div class="form-control w-full lg:w-3/5">
        <label class="label cursor-pointer flex justify-start gap-2 items-center content-center">
          <span class="label-text">residential advisor (beta)</span> 
          <input type="checkbox" class="toggle toggle-error toggle-sm tooltip" checked data-tip="Check events from residential advisor" />
        </label>
    </div> -->
    <Events res={res.events} />
</div>

