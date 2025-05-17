interface SortOption {
  text: string
  type: "relevant" | "latest"
}
export interface SortCategoryProps {
  option: SortOption
  handler: () => void
}
