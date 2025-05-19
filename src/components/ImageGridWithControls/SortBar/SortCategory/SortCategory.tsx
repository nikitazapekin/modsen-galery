import { SortPanelDropDownItem } from "./SortCategory.style"
import { SortCategoryProps } from "./SortCategory.types"

const SortCategory = ({ option, handler }: SortCategoryProps) => {
  return <SortPanelDropDownItem onClick={handler}>{option.text}</SortPanelDropDownItem>
}

export default SortCategory
