import { describe, expect, it } from 'vitest'
import { getExperienceYears } from './experience'

describe('getExperienceYears', () => {
  it('calculates completed calendar-year distance', () => {
    expect(getExperienceYears(2015, new Date('2026-07-11'))).toBe(11)
  })

  it('never returns a negative value', () => {
    expect(getExperienceYears(2030, new Date('2026-07-11'))).toBe(0)
  })
})
