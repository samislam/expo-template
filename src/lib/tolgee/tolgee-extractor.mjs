// @ts-nocheck

export default function extractor(code, fileName) {
  const foundKeys = new Set()

  // Check if code is defined and is a string
  if (typeof code !== 'string') {
    console.error(`Error: Code in ${fileName} is undefined or not a string.`)
    return { keys: [], warnings: [{ warning: `Code in ${fileName} is not a string.`, line: 0 }] }
  }

  // Regular expression to match t('key') or t("key")
  const regex = /@t<([^<>]+|<[^<>]+>)+>/g

  let match
  while ((match = regex.exec(code)) !== null) {
    if (match && match[0]) {
      const key = match[0]
      const lineNumber = getLineNumber(code, match.index)

      foundKeys.add({
        keyName: key,
        line: lineNumber,
      })
    }
  }

  return {
    keys: Array.from(foundKeys),
    warnings: [], // Add warnings if needed
  }
}

// Helper function to get the line number from the index
function getLineNumber(code, index) {
  const lines = code.substring(0, index).split('\n')
  return lines.length
}
