import {
  LetsFindTitleOrange,
  LetsFindTitleSmall,
  LetsFindTitleWhite,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from "./ImagesContent.style"
import Icon from "@assets/icons/Search.svg"
const ImagesContent = () => {
  return (
    <>
      <LetsFindTitleSmall>
        <LetsFindTitleWhite>let's find some {` `}</LetsFindTitleWhite>
        <LetsFindTitleOrange>Images {` `}</LetsFindTitleOrange>
        <LetsFindTitleWhite>here!</LetsFindTitleWhite>
      </LetsFindTitleSmall>

      <SearchWrapper>
        <SearchIcon src={Icon} alt={"Icon"} />
        <SearchInput placeholder={"Type..."} />
      </SearchWrapper>
    </>
  )
}

export default ImagesContent
