import { useState, useEffect, useRef } from "react"
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
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  const handleSearchDebounced = (query: string) => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = window.setTimeout(() => {
      console.log(query)
      onSearch(query)
    }, 300)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    handleSearchDebounced(value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current)
      }
      onSearch(searchQuery)
    }
  }

  return (
    <>
      <LetsFindTitleSmall>
        <LetsFindTitleWhite>let's find some </LetsFindTitleWhite>
        <LetsFindTitleOrange>Images </LetsFindTitleOrange>
        <LetsFindTitleWhite>here!</LetsFindTitleWhite>
      </LetsFindTitleSmall>

      <SearchWrapper>
        <SearchIcon src={Icon} alt={"Icon"} />
        <SearchInput
          placeholder={"Type..."}
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </SearchWrapper>
    </>
  )
}

export default ImagesContent
