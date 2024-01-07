import React, { useState } from "react";
import { connect } from "react-redux";
import ItemContainer from "../../common/ItemContainer";
import Modal from "react-modal";
import styled from "styled-components";
import Item from "./ItemTemplate";

const customStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
  },
};

const CloseBtn = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  font-weight:700;
  top:2%;
  right:2%;
  &:hover {
    overflow-x: hidden;
    scale: 1.2;
  }
`

function DisplayItem(props) {
  console.log("props state: ", props);
  const { items } = props;
  const [itemData, setItemData] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const openItemDetails = (item) => {
    setOpen(true);
    setItemData(item);
  };

  const closeItemDetails = () => {
    setOpen(false);
  };

  const ItemDetailsModal = (props) => {
    const { itemData={} } = props;
    console.log("Modal state: ",isOpen);
    return (
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={closeItemDetails}
        shouldCloseOnEsc={false}
        shouldCloseOnOverlayClick={false}
        style={customStyle}
        contentLabel="Item Details Modal"
      >
        <>
          <CloseBtn onClick={()=>closeItemDetails()}>X</CloseBtn>
          <Item itemData={itemData}/>
        </>
      </Modal>
    );
  };

  return (
    <div>
      {isOpen && <ItemDetailsModal itemData={itemData} />}
      {
        // item.length > 0 ? item.map((item)=><Item itemData={item} key={item.id}/>) : <p style={{textAlign:"center"}}>No items in shop</p>
        <ItemContainer>
          {items.length > 0 ? (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Item name</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} onClick={() => openItemDetails(item)}>
                    <td>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p style={{ textAlign: "center" }}>No items in shop</p>
          )}
        </ItemContainer>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  const { item } = state;
  return {
    items: item,
  };
};
export default connect(mapStateToProps)(DisplayItem);
