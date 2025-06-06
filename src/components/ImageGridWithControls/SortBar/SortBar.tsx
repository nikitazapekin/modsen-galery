import Arrow from "@assets/icons/Dropdown.svg"
import { useState } from "react"

import { sortCategories } from "./consts"
import {
  SortBarText,
  SortBarWrapper,
  SortPanel,
  SortPanelDropDown,
  SortPanelIcon,
  SortPanelText,
  SortPanelWrapper,
} from "./SortBar.styles"
import { SortBarProps } from "./SortBar.types"
import SortCategory from "./SortCategory/SortCategory"

const SortBar = ({ handleSetOrderBy }: SortBarProps) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string>("Relevant")
  const handleOpenDropDown = () => {
    setIsOpenDropDown((prev) => !prev)
  }
  const handleSelectOption = (value: string) => {
    setSelectedOption(value)
    setIsOpenDropDown(false)
    if (value.toLowerCase() === "relevant" || value.toLowerCase() === "latest") {
      handleSetOrderBy(value.toLowerCase() as "relevant" | "latest")
    }
  }
  return (
    <SortBarWrapper>
      <SortBarText>Sort by</SortBarText>
      <SortPanelWrapper>
        <SortPanel onClick={handleOpenDropDown}>
          <SortPanelText>{selectedOption}</SortPanelText>
          <SortPanelIcon $isOpenDropDown={isOpenDropDown} src={Arrow} alt={"Icon"} />
        </SortPanel>
        <SortPanelDropDown $isOpenDropDown={isOpenDropDown}>
          {sortCategories.map((item) => (
            <SortCategory
              option={item}
              handler={() => handleSelectOption(item.type)}
              key={item.id}
            />
          ))}
        </SortPanelDropDown>
      </SortPanelWrapper>
    </SortBarWrapper>
  )
}

export default SortBar
