import React from 'react'
import { connect } from 'react-redux'
import ItemContainer from '../../common/ItemContainer';

function RemoveItem(props) {
const { items = [] } = props;
  return (
    // item.length > 0 ? item.map((i)=><Item itemData={i} key={i.id} isRemove={true}/>) : <p style={{textAlign:"center"}}>No items in store to remove</p>

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
                  <tr key={item.id}>
                    <td>{item.name}</td>
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