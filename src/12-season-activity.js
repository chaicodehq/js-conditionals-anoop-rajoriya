/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here

  if (month < 1 || month > 12) return null

  var seasons = {
    "Winter": [12, 1, 2],
    "Spring": [3, 4, 5],
    "Summer": [6, 7, 8],
    "Autumn": [9, 10, 11],
  }
  var obj = { season: "", activity: "" }

  Object.keys(seasons).forEach(key => {
    if (seasons[key].includes(month)) {
      obj.season = key
    }
  })

  switch (obj.season) {
    case "Winter":
      if (temperature < 0) {
        obj.activity = "skiing"
      } else {
        obj.activity = "ice skating"
      }
      break;
    case "Spring":
      if (temperature > 20) {
        obj.activity = "hiking"
      } else {
        obj.activity = "museum visit"
      }
      break;
    case "Summer":
      if (temperature > 35) {
        obj.activity = "swimming"
      } else {
        obj.activity = "cycling"
      }
      break;
    case "Autumn":
      if (temperature > 15) {
        obj.activity = "nature walk"
      } else {
        obj.activity = "reading at a cafe"
      }
      break;
  }

  return obj

}
