import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: "zh3wggj5",
    dataset: "production",
    apiVersion: "2023-10-02",
    useCdn: true,
})