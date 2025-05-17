export interface PaginationBtnsProps {
  total: number
  total_pages: number
  currentPage: number
  handleSetPage: (page: number) => void
}
