import React from 'react';

const Item = (props) => {
  return (
    <a href="case1.html">
      <div classname="item">
        <div class="item-image">
          <img src="img/items/item1.png" alt="" />
        </div>
        {props.number}
        {props.title}
        {props.category}
        <div class="item-text">
          <div class="item-text-wrap">
            <p class="item-text-category">{props.category}</p>
            <h2 class="item-text-title">{props.title}</h2>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Item;
