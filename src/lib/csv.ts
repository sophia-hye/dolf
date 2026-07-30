// Build a CSV string and trigger a browser download. Includes a UTF-8 BOM so
// Excel renders Hangul correctly.
type Cell = string | number

function escapeCell(v: Cell): string {
  return `"${String(v).replace(/"/g, '""')}"`
}

export function downloadCsv(
  filename: string,
  header: readonly string[],
  rows: readonly Cell[][],
): void {
  if (typeof window === 'undefined') return
  const lines = [header, ...rows].map((r) => r.map(escapeCell).join(','))
  const csv = '﻿' + lines.join('\r\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}
