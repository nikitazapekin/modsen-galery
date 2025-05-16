import { useState } from "react"
import {
  SortBarText,
  SortBarWrapper,
  SortPanel,
  SortPanelDropDown,
  SortPanelIcon,
  SortPanelText,
  SortPanelWrapper,
} from "./SortBar.styles"
import Arrow from "@assets/icons/Dropdown.svg"
import { sortCategories } from "./consts"
import SortCategory from "./SortCategory/SortCategory"

const SortBar = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string>("Relevant")

  const handleOpenDropDown = () => {
    setIsOpenDropDown((prev) => !prev)
  }

  const handleSelectOption = (value: string) => {
    setSelectedOption(value)
    setIsOpenDropDown(false)
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
