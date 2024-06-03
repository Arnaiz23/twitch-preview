type DateUnit = [unit: Intl.RelativeTimeFormatUnit, secondsInUnit: number]

const DATE_UNITS: DateUnit[] = [
  ["year", 60 * 60 * 24 * 365],
  ["month", 60 * 60 * 24 * 30],
  ["day", 60 * 60 * 24],
  ["hour", 60 * 60],
  ["minute", 60],
  ["second", 1],
]

interface DateDiff {
  value: number
  unit: Intl.RelativeTimeFormatUnit
}

function getDateDiffs(timestamp: string | number | Date): DateDiff | undefined {
  const targetDate = new Date(timestamp)
  const currentDate = new Date()
  const elapsed = (targetDate.getTime() - currentDate.getTime()) / 1000

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.round(elapsed / secondsInUnit)
      return { value, unit }
    }
  }
}

export function getFormatDate({
  timestamp,
}: {
  timestamp: string | number | Date
}): string {
  const rtf = new Intl.RelativeTimeFormat("en", {
    style: "short",
  })

  const dateDiff = getDateDiffs(timestamp)

  if (dateDiff) {
    const { value, unit } = dateDiff
    return rtf.format(value, unit)
  }

  return ""
}
