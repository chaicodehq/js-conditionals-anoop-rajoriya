/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  // Your code here

  var vehicles = ["car", "motorcycle", "bus"]
  var feeStructure = [{
    initial: 5,
    base: 3,
    max: 30
  }, {
    initial: 3,
    base: 2,
    max: 18
  }, {
    initial: 10,
    base: 7,
    max: 60
  }]

  var roundedHours = Math.ceil(hours)
  var vehicleIndex = vehicles.indexOf(vehicleType.toLowerCase())

  if (roundedHours <= 0 || vehicleIndex < 0 || vehicleIndex > 2) return -1

  var fee = 0
  var carParkingFee = feeStructure[vehicleIndex]

  while (roundedHours > 0) {
    if (fee > 0) {
      fee += carParkingFee.base
    } else {
      fee += carParkingFee.initial
    }

    roundedHours--
  }

  if (fee > carParkingFee.max) {
    fee = carParkingFee.max
  }

  return fee
}
