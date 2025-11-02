type ClassValue = string | number | boolean | undefined | null | ClassDictionary | ClassArray

type ClassDictionary = Record<string, boolean | undefined | null>

type ClassArray = ClassValue[]

const isObject = (value: unknown): value is Record<string, unknown> =>
  !!value && typeof value === 'object' && !Array.isArray(value)

/**
 * A lightweight utility to conditionally merge Tailwind class names. This mirrors the API of common
 * `clsx` helpers without an extra dependency.
 */
export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = []

  inputs.forEach((input) => {
    if (!input) return

    if (typeof input === 'string' || typeof input === 'number') {
      classes.push(String(input))
      return
    }

    if (Array.isArray(input)) {
      classes.push(cn(...input))
      return
    }

    if (isObject(input)) {
      Object.entries(input).forEach(([key, value]) => {
        if (value) {
          classes.push(key)
        }
      })
    }
  })

  return classes.join(' ')
}
