import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";

import "./styles.css";

const ProducBar = () => {
  return (
    <div className="container-fluid well well-sm barraProductos">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 organizarProductos">
            <div className="btn-group pull-right float-end">
              <button
                type="button"
                className="btn btn-success btnGrid backColor"
                id="btnGrid"
              >
                <BsFillGrid3X3GapFill />

                <span className="col-xs-0 pull-right">GRID</span>
              </button>

              <button
                type="button"
                className="btn btn-default btnList"
                id="btnList"
              >
                <BsListUl />

                <span className="col-xs-0 pull-right">LIST</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProducBar;
