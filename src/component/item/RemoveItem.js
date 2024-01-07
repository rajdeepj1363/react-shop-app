import React, { useState } from 'react'
import { connect } from 'react-redux'
import ItemContainer from '../../common/ItemContainer';
import "../../App.css"
import Modal from "react-modal"
import Item from './ItemTemplate';
import styled from 'styled-components';


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

function RemoveItem(props) {
const { items = [] } = props;
const [itemData, setItemData] = useState()
const [isOpen, setOpen] = useState(false);

const openChangeQty = (item) => {
  setOpen(!isOpen)
  setItemData(item)
}

const closeChangeQty = () => {
  setOpen(false);
};

const ChangeQtyModal = (props) => {
  const { itemData={} } = props;
  console.log("Modal state: ",isOpen);
  console.log("Item: ",itemData);
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeChangeQty}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      style={customStyle}
      contentLabel="Item Details Modal"
    >
      <>
        <CloseBtn onClick={()=>closeChangeQty()}>X</CloseBtn>
        <Item itemData={itemData} changeQty={true}/>
      </>
    </Modal>
  );
};

  return (

    <ItemContainer>
      {isOpen && <ChangeQtyModal itemData={itemData}/>}
          {items.length > 0 ? (
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th>Item name</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} style={{borderBottom: "2px solid #eeeeee"}}>
                    <td>{item.name}</td>
                    <td className='removeBtnRow'><button className='btn btn-warning btn-sm' onClick={()=>{openChangeQty(item)}}>Change Qty</button><button className='btn btn-danger btn-sm'>Remove item</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p style={{ textAlign: "center" }}>No items in shop</p>
          )}
        </ItemContainer>

  )
}

const mapStateToProps = (state) => {
    return {
        items : state.item
    }
}
export default connect(mapStateToProps)(RemoveItem)