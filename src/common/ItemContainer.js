import React from 'react'
import styled from 'styled-components'

const ItemWrapper = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 70%;

`
function ItemContainer(props) {
  const {children} = props

  return (
    <ItemWrapper>{children}</ItemWrapper>
  )
}

export default ItemContainer