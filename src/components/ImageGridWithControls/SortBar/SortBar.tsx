import { useState } from "react"
import {
  SortBarText,
  SortBarWrapper,
  SortPanel,
  SortPanelDropDown,
  SortPanelDropDownItem,
  SortPanelIcon,
  SortPanelText,
  SortPanelWrapper,
} from "./SortBar.styles"
import Arrow from "@assets/icons/Dropdown.svg"

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
          <SortPanelDropDownItem onClick={() => handleSelectOption("Relevant")}>
            Relevant
          </SortPanelDropDownItem>
          <SortPanelDropDownItem onClick={() => handleSelectOption("Newest")}>
            Newest
          </SortPanelDropDownItem>
          <SortPanelDropDownItem onClick={() => handleSelectOption("Popular")}>
            Popular
          </SortPanelDropDownItem>
        </SortPanelDropDown>
      </SortPanelWrapper>
    </SortBarWrapper>
  )
}

export default SortBar
