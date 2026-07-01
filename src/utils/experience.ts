/**
 * 计算从起始年份到参考日期的经验年限（页面展示的「N 年+」即由此得出）。
 * 对起始年份晚于参考年份的异常数据做防御性处理，返回 0 而非负数，避免出现「-1 年+」。
 */
export function getExperienceYears(startYear: number, referenceDate: Date = new Date()): number {
  return Math.max(0, referenceDate.getFullYear() - startYear)
}
