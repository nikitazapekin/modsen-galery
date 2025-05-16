import { SortCategoryProps } from "./SortCategory.types"
import { SortPanelDropDownItem } from "./SortCategory.style"
const SortCategory = ({ option, handler }: SortCategoryProps) => {
  return <SortPanelDropDownItem onClick={handler}>{option.text}</SortPanelDropDownItem>
}

export default SortCategory
