import { est_day } from "../lib/components/admin/services/RequestList";

export const format_time = (time: string) => {
  try {
    return est_day(time).format("dddd MM/DD/YYYY");
  } catch (error) {
    return "Invalid time";
  }
};
