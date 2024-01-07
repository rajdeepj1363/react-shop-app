import { createSlice } from "@reduxjs/toolkit"

let initialState = []

const removeItemFn = (obj) => {
    const idToRemove = obj.id;
    const oldState = Object.values(obj.items)
    const newState = oldState.filter((item)=>item.id !== idToRemove);
    console.log(newState)
    return newState
}

export const ItemReducer = createSlice({

    name:"item",
    initialState,
    reducers : {
        addItem : (state, action) => {
            console.log("Current store: ",state);
            console.log("Adding item...");
            state.push(action.payload)
            return state;
        },
        removeItem : (state, action) => {
            console.log("Removing item with item id: ",action.payload);
            const obj = action.payload
            const newState = removeItemFn(obj)
            state = newState
            return state
        }
    }

})

export const { addItem , removeItem } = ItemReducer.actions

export default ItemReducer.reducer;