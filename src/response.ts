export function getListResponse<T>(items: T[]) {
  return {
    items,
    count: items.length,
  };
}

export interface ListResponse<T = any[]> {
  count: number;
  items: T[];
}
