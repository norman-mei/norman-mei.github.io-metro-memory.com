import { normalizeString } from '@/hooks/useNormalizeString'

export function extractJapanese(str: string) {
  str = normalizeString('tokyo')(str)
  // Regular expression to match Korean characters
  const japaneseRegex = /[一-龯]/

  // Find the index of the first Korean character
  const firstKoreanIndex = str.search(japaneseRegex)

  // Reverse the string to find the last Korean character index from the end
  const reversedStr = str.split('').reverse().join('')
  const lastKoreanIndexFromEnd = reversedStr.search(japaneseRegex)

  // Calculate the index of the last Korean character in the original string
  const lastKoreanIndex = str.length - lastKoreanIndexFromEnd - 1

  // Extract and return the substrings - korean and non-korean
  return [
    str.substring(firstKoreanIndex, lastKoreanIndex + 1),
    str.substring(lastKoreanIndex + 1, str.length),
  ]
}
