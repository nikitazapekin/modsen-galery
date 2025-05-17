import {
  EmptyListTitle,
  EmptyListTitleBlack,
  EmptyListTitleOrange,
  EmptyListWrapper,
} from "./EmptyList.style"

const EmptyList = () => {
  return (
    <EmptyListWrapper>
      <EmptyListTitle>
        <EmptyListTitleBlack>Your </EmptyListTitleBlack>
        <EmptyListTitleOrange>favorites </EmptyListTitleOrange>
        <EmptyListTitleBlack>list is empty</EmptyListTitleBlack>
      </EmptyListTitle>
    </EmptyListWrapper>
  )
}

export default EmptyList
