import { est_day } from "../lib/components/admin/services/RequestList";

export const format_time = (time: string) => {
  return est_day(time)
    .tz("America/New_York")
    .format("hh:mma dddd DD, MMMM YYYY");
};
