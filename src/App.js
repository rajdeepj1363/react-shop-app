import React from "react";
import ItemContainer from "./common/ItemContainer";
import Header from "./common/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItem from "./component/item/AddItem";
import DisplayItem from "./component/item/DisplayItem";
import RemoveItem from "./component/item/RemoveItem";

function App() {
  return (
    <>
      <BrowserRouter basename="/admin">
        <Header />
        <ItemContainer>
          <Routes>
            <Route path="/" element={<DisplayItem />} />
            <Route path="/add-item" element={<AddItem />} />
            <Route path="/remove-item" element={<RemoveItem />} />
          </Routes>
        </ItemContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
