import {
  NothingFoundText,
  NothingFoundTextBlack,
  NothingFoundTextOrange,
} from "./NothingFound.style"
const NothingFound = () => {
  return (
    <NothingFoundText>
      <NothingFoundTextBlack>
        The search didn't yield any results, please try{" "}
      </NothingFoundTextBlack>
      <NothingFoundTextOrange>again</NothingFoundTextOrange>
      <NothingFoundTextBlack>.</NothingFoundTextBlack>
    </NothingFoundText>
  )
}
export default NothingFound
