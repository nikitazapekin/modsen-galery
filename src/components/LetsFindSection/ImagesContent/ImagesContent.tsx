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
import { useNavigate } from "react-router-dom"

const ImagesContent = ({ onSearch }: ImagesContentProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const timerRef = useRef<number | null>(null)
  const navigate = useNavigate()
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
      onSearch(query)
    }, 300)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    handleSearchDebounced(value)
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
        <SearchInput placeholder={"Type..."} value={searchQuery} onChange={handleChange} />
      </SearchWrapper>
    </>
  )
}

export default ImagesContent
