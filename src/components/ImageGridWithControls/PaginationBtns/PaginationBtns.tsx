import {
  PaginationWrapper,
  PaginationButton,
  PaginationButtonArrow,
  PaginationButtonArrowWrapper,
} from "./PaginationBtns.style"
import { PaginationBtnsProps } from "./PaginationBtns.types"
import Arrow from "@assets/icons/Arrow.svg"
const PaginationBtns = ({
  total,
  total_pages,
  currentPage = 1,
  handleSetPage,
}: PaginationBtnsProps) => {
  const safeCurrentPage = Math.max(1, currentPage)
  const getVisiblePages = () => {
    const pages = new Set<number>()
    pages.add(safeCurrentPage)
    if (safeCurrentPage + 1 <= total_pages) pages.add(safeCurrentPage + 1)
    if (safeCurrentPage + 2 <= total_pages) pages.add(safeCurrentPage + 2)
    if (safeCurrentPage + 3 <= total_pages && safeCurrentPage === 1) pages.add(safeCurrentPage + 3)
    if (safeCurrentPage - 1 >= 1) pages.add(safeCurrentPage - 1)
    if (safeCurrentPage - 2 >= 1 && safeCurrentPage === total_pages) pages.add(safeCurrentPage - 2)
    return Array.from(pages).sort((a, b) => a - b)
  }
  const visiblePages = getVisiblePages()
  return (
    <PaginationWrapper>
      {safeCurrentPage > 1 && (
        <PaginationButtonArrowWrapper>
          <PaginationButtonArrow
            onClick={() => handleSetPage(safeCurrentPage - 1)}
            aria-label="Previous page"
            src={Arrow}
            isReversed={false}
          />
        </PaginationButtonArrowWrapper>
      )}
      {visiblePages.map((page) => (
        <PaginationButton
          key={page}
          onClick={() => handleSetPage(page)}
          isActive={page === safeCurrentPage}
        >
          {page}
        </PaginationButton>
      ))}
      {safeCurrentPage < total_pages && (
        <PaginationButtonArrowWrapper>
          <PaginationButtonArrow
            onClick={() => handleSetPage(safeCurrentPage + 1)}
            aria-label="Next page"
            isReversed={true}
            src={Arrow}
          />
        </PaginationButtonArrowWrapper>
      )}
    </PaginationWrapper>
  )
}

export default PaginationBtns
