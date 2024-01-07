import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../../reducers/Reducers";
import store from "../../store/store";
import { connect } from "react-redux";
import { validateFormValues } from "../../common/Common";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import renderHTML from "html-react-parser"
import "../../App.css"

const ErrorComponent = styled.div`
font-weight: 700;
font-size: 13px;
margin-top: 2rem;
color: red;
`

function AddItem(props) {
  const { itemData } = props
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemState = {
    id: 0,
    name: "",
    quantity: 0,
    quantityMetric: "",
    desc: "",
    price: 0
  };
  const [item, setItem] = useState(itemState);
  const [errMsg, setErrMsg] = useState("");

  const handleFormValues = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleDispatch = () => {
    const result = validateFormValues(item)
    if(result.length === 0)
    {
      dispatch(addItem(item))
      console.log("Updated Store: ",store.getState());
      navigate("/")
    }
    else
    {
      setErrMsg(result)
    }
      
  };

  useEffect(()=>{
    itemData.length > 0 ? setItem({...item, id: itemData[itemData.length-1].id+1}) : setItem({...item, id: 1}) // eslint-disable-next-line
  },[itemData])

  return (
    <Form>
      <table>
        <tbody>
          <tr>
            <td>
              <label>Item ID</label>
            </td>
            <td>
              <input
                type="text"
                name="id"
                disabled
                value={item.id}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Item Name</label>
            </td>
            <td>
              <input
                type="text"
                name="name"
                onChange={(e) => handleFormValues(e)}                
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Item Quantity</label>
            </td>
            <td>
              <input
                type="text"
                name="quantity"
                onChange={(e) => handleFormValues(e)}                
              ></input>
               <select name="quantityMetric" id="qtyMetric" onChange={(e)=>handleFormValues(e)}>
                <option value="">---Select Metrics---</option>
                <option value="kgs">Kgs</option>
                <option value="Dozen">Dozen</option>
                <option value="Ltrs">Litres</option>
                <option value="Nos">Nos</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Item Description</label>
            </td>
            <td>
              <input
                type="text"
                name="desc"
                onChange={(e) => handleFormValues(e)}                
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Item Price</label>
            </td>
            <td>
              <input
                type="text"
                name="price"
                onChange={(e) => handleFormValues(e)}                
              ></input>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Button onClick={handleDispatch}>Add Item</Button>
            </td>
          </tr>
        </tbody>
      </table>
      <ErrorComponent>{renderHTML(errMsg)}</ErrorComponent>
    </Form>
  );
}

const mapStateToProps = (state) => {
  const { item } = state
  return{
    itemData : item
  }
}
export default connect(mapStateToProps)(AddItem);
