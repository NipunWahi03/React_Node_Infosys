import React from "react";

export default function Todos_Item({ todos_item_list, onDelete, onUpdate }) {
  const style = {
    float: "right",
    marginRight: 40,
  };

  return (
    <>
      <h4>{todos_item_list.title}</h4>

      <div style={{ display: "inline-block" }}>
        {todos_item_list.description}
      </div>
      <div style={style}>
        <button className="btn btn-primary btn-sm " style={{ marginRight: 5 }}>
          <i className="fa fa-lg fa-pencil" aria-hidden="true"></i>
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(todos_item_list)}
        >
          <i className="fa fa-lg fa-trash" aria-hidden="true"></i>
        </button>
      </div>
      <hr />
    </>
  );
}
