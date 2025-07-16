import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const pikachuResult = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

    return {
        pikachu: await pikachuResult.json(),
    }
};