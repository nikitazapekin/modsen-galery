import { LetsFindTitle, LetsFindTitleOrange, LetsFindTitleWhite } from "./CatalogContent.style"

const CatalogContent = () => {
  return (
    <LetsFindTitle>
      <LetsFindTitleWhite>let's find some {` `}</LetsFindTitleWhite>
      <LetsFindTitleOrange>Images {` `}</LetsFindTitleOrange>
      <LetsFindTitleWhite>here!</LetsFindTitleWhite>
    </LetsFindTitle>
  )
}
export default CatalogContent
