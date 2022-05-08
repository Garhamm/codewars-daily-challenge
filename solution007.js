// 8 kyu Beginner Series #2 Clock
function past(h, m, s){
    const hourToMs = h * 60 * 60 * 1000
    const minToMs = m * 60 * 1000
    const secondsToMs = s * 1000
    const total = hourToMs + minToMs + secondsToMs
    return total
  }