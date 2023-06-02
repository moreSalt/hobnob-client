import { Lambda } from "$lib/functions/lambda";
/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url }) => {
    try {
        const q = url.searchParams.get("query");
        if (!q) {
            return;
        }
        const source = url.searchParams.get("source")

        const res = await Lambda("cities", q, 0, source ? source : "default");
        if (res == null) {
            await console.log("Bad res");
            return;
        }

        return {
            // @ts-ignore
            cities: res,
            q: q,
        };
    } catch (error) {
        console.log("search", error);
        return {
            cities: [],
            q: "",
        };
    }
};
