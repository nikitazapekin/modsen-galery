import { useState } from "react"
import {
  LetsFindTitleOrange,
  LetsFindTitleSmall,
  LetsFindTitleWhite,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from "./ImagesContent.style"
import Icon from "@assets/icons/Search.svg"
import { ImagesContentProps } from "./ImagesContent.types"

const ImagesContent = ({ onSearch }: ImagesContentProps) => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchQuery)
    }
  }

  return (
    <>
      <LetsFindTitleSmall>
        <LetsFindTitleWhite>let's find some {` `}</LetsFindTitleWhite>
        <LetsFindTitleOrange>Images {` `}</LetsFindTitleOrange>
        <LetsFindTitleWhite>here!</LetsFindTitleWhite>
      </LetsFindTitleSmall>

      <SearchWrapper>
        <SearchIcon src={Icon} alt={"Icon"} />
        <SearchInput
          placeholder={"Type..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </SearchWrapper>
    </>
  )
}

export default ImagesContent

/* import {
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
 */
