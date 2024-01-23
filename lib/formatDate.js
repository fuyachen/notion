/**
 * 格式化日期为 "Month DD, YYYY" 的形式
 * @param {Date} inputDate - 待格式化的日期，例如 "2024.01.01"
 * @returns {string} - 格式化后的日期字符串，例如 "January 01, 2024"
 */

export default function formatDate(inputDate) {
  const date = new Date(inputDate);
  const options = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
