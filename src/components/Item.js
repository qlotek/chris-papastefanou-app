import React from 'react';

const Item = (props) => {
  return (
    <a href={'case' + props.number + '.html'}>
      <div className="item">
        <div className="item-image">
          <img src={'img/items/item' + props.number + '.png'} />
        </div>

        <div className="item-text">
          <div className="item-text-wrap">
            <p className="item-text-category">{props.category}</p>
            <h2 className="item-text-title">{props.title}</h2>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Item;
