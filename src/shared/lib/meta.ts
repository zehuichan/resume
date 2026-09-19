/** 写入 `<head>` 中的 `<meta name=...>`，元素缺失时补建 */
export function setMetaContent(name: string, content: string): void {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.name = name
    document.head.append(element)
  }
  element.content = content
}
