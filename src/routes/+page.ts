import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    return {
        obj: { arr: [1] }
    }
};