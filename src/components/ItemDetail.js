import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item, onClickingDelete, onClickingBuy, onClickingRestock } = props;

  return (
    <React.Fragment>
      <h1>Item Details</h1>
      <h3>{item.name} - Stock: {item.quantity > 0 ? item.quantity : 'Out of Stock'}</h3>
      <p><em>{item.description}</em></p>
      <button type="button" className="btn btn-info" onClick={props.onClickingEdit}>Update Item</button>
      <button type="button" className="btn btn-primary" onClick={() => onClickingDelete(item.id)}>Close Item</button>
      {item.quantity > 0 && // this is an if statement in JSX
        <button type="button" className="btn btn-danger" onClick={() => onClickingBuy(item.id)}>Buy an Item</button>
      }
      <button type="button" className="btn btn-info" onClick={() => onClickingRestock(item.id)}>Restock Item</button>
      <hr />
    </React.Fragment >
  );

}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default ItemDetail;