<script lang="ts">
    import type { ResponseEvents } from "../types/event";
    import { page } from '$app/stores'

    export let res: ResponseEvents[]

    // Takes time stamp and returns formatted value
    function parseDate(param: string) {
        const paramSplit = param.split("T")
        const dateSplit = paramSplit[0].split("-")
        let mon = "???"
        switch(dateSplit[1]) {
            case "01":
                mon = "Jan"
                break;
            case "02":
                mon = "Feb"
                break;
            case "03":
                mon = "Mar"
                break
            case "04":
                mon = "Apr"
                break
            case "05":
                mon = "May"
                break
            case "06":
                mon = "Jun"
                break
            case "07":
                mon = "Jul"
                break
            case "08":
                mon = "Aug"
                break
            case "09":
                mon = "Sep"
                break
            case "10":
                mon = "Oct"
                break
            case "11":
                mon = "Nov"
                break
            case "12":
                mon = "Dec"
                break;
        }
        const returnVal = {
            month: mon,
            day: dateSplit[2],
            year: dateSplit[0],
            time: paramSplit[1].split(":")[0] + ":" + paramSplit[1].split(":")[1]
        }
        return returnVal

    }

    
</script>

<!-- EVENTS -->
<div class="flex flex-col gap-2 h-full w-full lg:w-3/5 lg:max-w-7xl">



    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-4">
        {#each res as item, i}

        {#if (i === 0 || parseDate(res[i-1].date).day != parseDate(item.date).day) && !$page.url.pathname.includes("/a/")}

        <div class="col-span-full flex w-full gap-4 items-center" class:mt-8={i !== 0}>
            <h3 class="text-xl font-bold text-white">{parseDate(item.date).month} {parseDate(item.date).day}</h3>
          </div>

        {/if}
            <!-- https://github.com/saadeghi/daisyui/issues/1368 -->
            <a class="card card-compact image-full min-w-48 max-w-3xl h-72 shadow-xl rounded-2xl [&.card]:before:opacity-70 [&.card]:before:rounded-2xl [&.card]:before:bg-black  outline outline-base-100" href={item.url} target="_blank" >
                <figure class="bg-base-200"><img src="{item.image}" alt="{item.name} cover image" class="bg-white"/></figure>
                <div class="card-body h-full flex flex-col justify-between">

                    <div class="text-white text-sm font-medium bg-black/70 rounded px-2 w-fit">
                        <p>{parseDate(item.date).month} {parseDate(item.date).day}</p>
                    </div>

                    <div class="flex flex-col">
    
                        <p class="text-white text-lg font-bold text-ellipsis overflow-hidden line-clamp-3" >{item.name}</p>
                        <p class="text-sm text-white text-ellipsis overflow-hidden line-clamp-1">{item.venue}, {item.city}</p>
    
                    </div>
                    
                </div>
            </a>

        {/each}
    </div>
</div>