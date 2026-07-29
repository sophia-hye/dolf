// Shared input validators for auth forms.

export const PASSWORD_MIN_LENGTH = 8

// A strong password is at least 8 characters and combines a letter,
// a number, and a special (non-alphanumeric) character.
export function isStrongPassword(password: string): boolean {
  if (password.length < PASSWORD_MIN_LENGTH) return false
  const hasLetter = /[A-Za-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecial = /[^A-Za-z0-9]/.test(password)
  return hasLetter && hasNumber && hasSpecial
}

// National-number digit-length ranges per supported country. For inputs that
// start with '+', we route by country calling code and validate the remaining
// (national) digits. For plain local inputs we validate by the selected country.
const CALLING_CODES: Record<string, readonly [number, number]> = {
  '1': [10, 10], // US / CA
  '81': [9, 10], // JP (national number, leading 0 dropped)
  '82': [9, 10], // KR (national number, leading 0 dropped)
}

const LOCAL_LENGTHS: Record<string, readonly [number, number]> = {
  US: [10, 10], // 10 digits
  JP: [10, 11], // leading 0 + 9~10
  KR: [9, 11], // leading 0 + 8~10 (02 landline ~9, 010 mobile 11)
}

// Accepts Korean, US, and Japanese phone numbers, with or without an
// international '+<code>' prefix. An empty value is treated as valid because
// the phone field is optional.
export function isValidPhone(raw: string, country?: string): boolean {
  const trimmed = raw.trim()
  if (!trimmed) return true

  const hasPlus = trimmed.startsWith('+')
  const digits = trimmed.replace(/\D/g, '')
  if (!digits) return false

  if (hasPlus) {
    for (const code of ['82', '81', '1']) {
      if (digits.startsWith(code)) {
        const national = digits.slice(code.length)
        const [min, max] = CALLING_CODES[code]
        return national.length >= min && national.length <= max
      }
    }
    return false
  }

  const range = country ? LOCAL_LENGTHS[country] : undefined
  if (range) {
    const [min, max] = range
    return digits.length >= min && digits.length <= max
  }
  // Unknown country selection: accept any plausible 9~11 digit number.
  return digits.length >= 9 && digits.length <= 11
}
