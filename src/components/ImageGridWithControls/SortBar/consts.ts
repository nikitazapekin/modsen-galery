interface SortOption {
  id: number
  text: string
  type: "relevant" | "latest"
}
export const sortCategories: SortOption[] = [
  { id: 1, text: "Relevant", type: "relevant" },
  { id: 2, text: "Latest", type: "latest" },
]
