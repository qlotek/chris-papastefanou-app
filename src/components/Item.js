import { NavLink } from 'react-router-dom';

const Item = (props) => {
  return (
    <>
      <NavLink to={'/work/case' + props.number} activeClassName="current">
        {/* <a href=> */}
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
      </NavLink>
    </>
  );
};

export default Item;
