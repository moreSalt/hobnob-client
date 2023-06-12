<script lang="ts">
    import Nav from "$lib/components/nav.svelte";
    import Searchform from "$lib/components/searchform.svelte";
    import type { ArtistsResponse } from "$lib/types/artists";
    import  type { CitiesResponse } from "$lib/types/cities";
    
    const cities: CitiesResponse[] = [
        {name:"New York, NY, US",code:"6239692",source:"default"},
        {name:"Los Angeles, CA, US",code:"6479472",source:"default"},
        {name:"Chicago, IL, US",code:"59984A9",source:"default"}

    ]

    const artists: ArtistsResponse[] = [
        {id:"5pMfYGzBDrffn3WJnZfCGf",image:"https:\u002F\u002Fi.scdn.co\u002Fimage\u002Fab6761610000e5eb69eea22d7189af21794f3043",name:"Fred again..",genre:"edm",source:"default"},
        {id:"7wXEPA7AQwOrOZIJPX6w1n",image:"https:\u002F\u002Fi.scdn.co\u002Fimage\u002Fab6761610000e5eb12e3f20d05a8d6cfde988715",name:"Beyoncé",genre:"pop",source:"default"},
        {id:"8fJMBsNjUGURg9TFi6gGIL",image:"https:\u002F\u002Fi.scdn.co\u002Fimage\u002Fab6761610000e5eba1e114ee97ae02ec4f00a111",name:"Sara Landry",genre:"dark techno",source:"default"},
        {id:"4UWYuBtS2Jovnxk583TAs5",image:"https:\u002F\u002Fi.scdn.co\u002Fimage\u002Fab6761610000e5eb4293385d324db8558179afd9",name:"Drake",genre:"canadian hip hop",source:"default"}
    ];

    function getCity() {
      const city = cities[Math.floor(Math.random() * cities.length)]
      window.location.href = `/c/${city.code}?s=${city.source}`
    }
</script>
<div class="flex flex-col h-full gap-2 h-full max-h-screen justify-between m-4">

    <!-- First row -->
    <div class="flex flex-row basis-2/3 flex-grow gap-2">
         
        <!-- Main hero -->
        <div class="basis-3/5 bg-white h-full rounded-2xl p-8 flex flex-col justify-between">
            <div class="flex flex-col gap-16">
                <div class="flex gap-1 text-black font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                      </svg>
                    <p>Summer 23</p> 
                </div>
                <!-- <h1 class="text-8xl font-bold  uppercase">varius duis at consectetur lorem</h1> -->
                <h1 class="text-5xl font-bold  uppercase">Find great events</h1>
            </div>
            <button class="btn btn-error btn-wide rounded-full" on:click={getCity}>Checkout a Random City</button>
            <!-- <Searchform /> -->
        </div>
        <div class="avatar basis-2/5 rounded-2xl bg-slate-300 flex justify-center items-center text-white">
          coming soon...

          </div>

    </div>

    <!-- SEOND ROW -->
    <div class="flex flex-row basis-1/3 gap-2">




        <div class="basis-3/5 bg-accent h-full rounded-2xl p-8 grid grid-row-1 grid-cols-4 gap-2">

          {#each artists as item}
          <a
              href="/a/{item.id}?s={item.source}"
              class="
              card
              card-compact
              rounded-lg
              min-w-48 max-w-3xl
              shadow-2xl
              bg-base-100
              hover:cursor-pointer
              hover:bg-base-300
              group

          "
          >
              <div class="card-body flex flex-col items-center gap-8">
                  <div class="avatar">
                      <div
                          class="w-42 rounded-full shadow shadow-2xl shadow-base-300"
                      >
                          <img
                              class="bg-base-300"
                              src={item.image}
                              alt="{item.name} profile picture"
                          />
                      </div>
                  </div>

                  <div class="w-full">
                      <h3
                          class="font-bold text-white whitespace-nowrap text-ellipsis overflow-hidden"
                      >
                          {item.name}
                      </h3>
                      <p class="">
                          {item.genre}
                      </p>
                  </div>
              </div>
          </a>
      {/each}
          
        </div>

        
        <div class="avatar basis-2/5 rounded-2xl bg-primary justify-center flex flex-col gap-2 p-8">

            <h3 class="text-white font-bold text-xl">Featured Cities</h3>
            {#each cities as item}
                <a
                    href="/c/{item.code}?s={item.source}"
                    class="
                    card
                    card-compact
                    rounded-lg
                    min-w-96
                    shadow-2xl
                    bg-base-100
                    hover:cursor-pointer
                    hover:bg-base-300
                    group

                "
                >
                    <div class="card-body flex flex-col items-center gap-8">

                        <div class="w-full">
                            <h3
                                class="font-bold text-white whitespace-nowrap text-ellipsis overflow-hidden"
                            >
                                {item.name}
                            </h3>
                        </div>
                    </div>
                </a>
            {/each}

        </div>
    </div>
</div>
