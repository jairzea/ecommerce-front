import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";

import "./styles.css";

const ProducBar = () => {
  return (
    <div class="container-fluid well well-sm barraProductos">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 organizarProductos">
            <div class="btn-group pull-right float-end">
              <button
                type="button"
                class="btn btn-success btnGrid backColor"
                id="btnGrid"
              >
                <BsFillGrid3X3GapFill />

                <span class="col-xs-0 pull-right">GRID</span>
              </button>

              <button
                type="button"
                class="btn btn-default btnList"
                id="btnList"
              >
                <BsListUl />

                <span class="col-xs-0 pull-right">LIST</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProducBar;
