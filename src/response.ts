export function getListResponse<T>(items: T[]) {
  return {
    items,
    count: items.length,
  }
}