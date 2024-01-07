import React from "react";
import styled from "styled-components";

const ItemStyle = styled.div`
margin-top: 12px;
`;

const ItemBox = styled.div`
border: 1px solid #eeeeee;
text-align: center;

`;

const ItemInfoContainer = styled.div`
background-color: ${props => props.color ? props.color : "#ffffff" };
margin-left: ${props => props.marginleft ? props.marginleft : null};
padding: ${props => props.padding ? props.padding : "20px"};
width: ${props => props.width ? props.width : null};
`


function Item(props) {
  const { itemData: { id, name, quantity, quantityMetric, desc, price } } = props;
  
  return (
    
    <ItemStyle className="container row g-2">

      <ItemBox className="col-lg-4 col-md-6 col-sm-12">
        <ItemInfoContainer>{id}</ItemInfoContainer>
      </ItemBox>
      <ItemBox className="col-lg-4 col-md-6 col-sm-12">
        <ItemInfoContainer>{name}</ItemInfoContainer>
      </ItemBox>
      <ItemBox className="col-lg-4 col-md-6 col-sm-12">
        <ItemInfoContainer>{desc}</ItemInfoContainer>
      </ItemBox>
      <ItemBox className="col-lg-4 col-md-6 col-sm-12">
        <ItemInfoContainer>{quantity}{quantityMetric}</ItemInfoContainer>
      </ItemBox>
      <ItemBox className="col-lg-4 col-md-6 col-sm-12">
        <ItemInfoContainer>{price}</ItemInfoContainer>
      </ItemBox>

    </ItemStyle>
  );
}

export default Item;
