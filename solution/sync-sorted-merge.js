"use strict";

module.exports = (logSources, printer) => {
  const hashLogSources = logSources.map((logSource, i) => {
    const entry = logSource.pop()
    return entry ? Object.assign({i}, entry) : null
  })

  const sortedLogs = hashLogSources.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))

  sortedLogs.forEach((log) => printer.print(log))

  printer.done()
  return console.log("Sync sort complete.")
}
