import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const dittoResult = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

    return {
        ditto: await dittoResult.json()
    }
};