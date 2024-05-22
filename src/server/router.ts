
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
    getLastMonth: procedure.query(async () => {
        const response = await fetch("https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_cases_casesByDay?year=2024&page_size=365");
      const jsonData = await response.json();
      console.log(jsonData)
      const cleanData = jsonData.results.slice(-30).map((r: { date: string, metric_value: number }) => {
        return { date: r.date, count: r.metric_value }
      })
      return cleanData
    }),
    getVariants: procedure.query(async () => {
        const response = await fetch("https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_cases_lineagePercentByWeek?date=2024-01-01&page_size=365&year=2024");
      const jsonData = await response.json();
      console.log(jsonData)
      const cleanData = jsonData.results.map((r: { stratum: string, metric_value: number }) => {
        return { variant: r.stratum, percent: r.metric_value }
      })
      return cleanData
    })
});


export type AppRouter = typeof appRouter;