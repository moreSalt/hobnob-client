// export const prerender = true;
// import { apitoken } from "$lib/functions/apitoken";
import { Lambda } from "$lib/functions/lambda";


/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url }) => {
    try {

        const q = url.searchParams.get("q")
        if (!q) {
            return
        } 

        const source = url.searchParams.get("s")

        const res = await Lambda("artists", q, 0, source || "default")
        if (res == null) {
            return
        }
        
        return {
            // @ts-ignore
            body: res,
            q: q
        }
    } catch (error) {
        console.log("search", error);
        return;
    }
};