import "./listOfProducts.scss";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { productList } from "../../products";

const ListOfProducts = () => {
  return (
    <div>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="product-container">
            {productList.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <div className="image-container">
                    <img src={product.img} alt="product" />
                  </div>
                  <div className="product-name">{product.product}</div>
                  <div className="product-info">{product.info}</div>
                  <div className="price">{product.price}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfProducts;
