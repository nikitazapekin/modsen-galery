import Icon from "@assets/icons/Search.svg"
import IconBig from "@assets/icons/SearchBig.svg"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  ImagesContentWrapper,
  LetsFindTitleOrange,
  LetsFindTitleSmall,
  LetsFindTitleWhite,
  SearchImg,
  SearchInput,
  SearchPicture,
  SearchSourse,
  SearchWrapper,
} from "./ImagesContent.style"
import { ImagesContentProps } from "./ImagesContent.types"

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
      if (query) {
        navigate(`/images/1/12/search?query=${query}`)
      } else {
        navigate(`/images/1/12/random`)
      }
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
      <ImagesContentWrapper>
        <LetsFindTitleSmall>
          <LetsFindTitleWhite>let's find some </LetsFindTitleWhite>
          <LetsFindTitleOrange>Images </LetsFindTitleOrange>
          <LetsFindTitleWhite>here!</LetsFindTitleWhite>
        </LetsFindTitleSmall>
        <SearchWrapper>
          <SearchPicture>
            <SearchSourse srcSet={IconBig} media="(max-width: 480px)" />
            <SearchImg src={Icon} alt="Logo" />
          </SearchPicture>
          <SearchInput placeholder={"Type..."} value={searchQuery} onChange={handleChange} />
        </SearchWrapper>
      </ImagesContentWrapper>
    </>
  )
}
export default ImagesContent
