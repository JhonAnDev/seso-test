"use strict";

module.exports = async (logSources, printer) => {
  const hashLogSources = await Promise.all(logSources.map(async (logSource, i) => {
    const entry = await logSource.popAsync()
    return entry ? Object.assign({i}, entry) : null
  }))

  const sortedLogs = hashLogSources.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))

  sortedLogs.forEach((log) => printer.print(log))

  printer.done()
  return console.log("Async sort complete.")
}
