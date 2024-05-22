
import { z } from "zod";
import FavouriteModel from "../db/models";
import { router, procedure } from "./trpc";

export const appRouter = router({
    setFavourite: procedure
        .input(
            z.object({
                slug: z.string(),
                selected: z.boolean(),
            })
        )
        .mutation(async ({ input }) => {
            const favouriteModelData = await FavouriteModel().updateOne({ slug: input.slug }, {
                slug: input.slug,
                selected: input.selected,
            }, { upsert: true });
            return {
                favourite: favouriteModelData,
            };
        }),
    getFavourite: procedure.input(
        z.string()
    ).query(async ({ input }) => {
        const favouriteModelData = await FavouriteModel().findOne({ slug: input })
        if (favouriteModelData) {
            return favouriteModelData.selected
        } else {
            return false
        }
    }),
});


export type AppRouter = typeof appRouter;