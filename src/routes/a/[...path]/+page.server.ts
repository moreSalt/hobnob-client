// export const prerender = true;

import  { Lambda } from "$lib/functions/lambda";


/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url }) => {
    try {
        const q = url.searchParams.get("s") || "default"
        const ID = url.pathname.replace("/a/", "")
        const res = await Lambda("artist", ID, 0, q)
        if (res == null) {
            await console.log("Bad res artist")
            return
        }
        return res
   
    } catch (error) {
        console.log("artist", error);
        return;
    }
};
