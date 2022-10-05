import "./listOfOrders.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DatatableOrders from "../../components/DataTableOrders";

const ListOfOrders = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableOrders />
      </div>
    </div>
  );
};

export default ListOfOrders;
