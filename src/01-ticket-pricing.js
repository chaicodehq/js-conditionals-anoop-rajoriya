/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here
  if (age < 0 || Number.isNaN(age) || typeof isWeekend !== "boolean") {
    return -1
  }

  var price = isWeekend ? 3 : 0

  if (age >= 0 && age <= 12) { // children
    price += 8
  } else if (age > 12 && age <= 17) { // Teens
    price += 12
  } else if (age > 17 && age <= 59) { // Adults
    price += 15
  } else { // Seniors
    price += 10
  }

  return price
}
