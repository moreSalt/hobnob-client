<script lang="ts">
    // import Searchform from "../lib/components/searchform.svelte";
    import type { ArtistsResponse } from "$lib/types/artists";
    import type { CitiesResponse } from "$lib/types/cities";


    export let items: ArtistsResponse[] = [
        {id:"5pMfYGzBDrffn3WJnZfCGf",image:"https:\u002F\u002Fi.scdn.co\u002Fimage\u002Fab6761610000e5eb69eea22d7189af21794f3043",name:"Fred again..",genre:"edm",source:"default"},
        {id:"7wXEPA7AQwOrOZIJPX6w1n",image:"https:\u002F\u002Fi.scdn.co\u002Fimage\u002Fab6761610000e5eb12e3f20d05a8d6cfde988715",name:"Beyoncé",genre:"pop",source:"default"},
        {id:"8fJMBsNjUGURg9TFi6gGIL",image:"https:\u002F\u002Fi.scdn.co\u002Fimage\u002Fab6761610000e5eba1e114ee97ae02ec4f00a111",name:"Sara Landry",genre:"dark techno",source:"default"},
        {id:"4UWYuBtS2Jovnxk583TAs5",image:"https:\u002F\u002Fi.scdn.co\u002Fimage\u002Fab6761610000e5eb4293385d324db8558179afd9",name:"Drake",genre:"canadian hip hop",source:"default"}
    ];

    let cities: CitiesResponse[] = [
        {name:"New York, NY, US",code:"6239692",source:"default"},
        {name:"Los Angeles, CA, US",code:"6479472",source:"default"},
        {name:"Chicago, IL, US",code:"59984A9",source:"default"}

    ]
</script>

<div class="flex flex-col items-center justify-center grow gap-4">
    <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-success to-primary">hobnob</h1>
    <p>Find events from your favorite artists or cities easily</p>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4 w-3/5">
        {#each items as item}
            <a
                href="/a/{item.id}?source={item.source}"
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
                <div class="card-body flex flex-col items-center gap-8">
                    <div class="avatar">
                        <div
                            class="w-42 rounded-full shadow shadow-2xl shadow-base-100"
                        >
                            <img
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

    <div class="mt-4 w-3/5 flex flex-col gap-4">
        {#each cities as item}
            <a
                href="/c/{item.code}?source={item.source}"
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
