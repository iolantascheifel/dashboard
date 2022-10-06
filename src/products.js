export const productsColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.product}
        </div>
      );
    },
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 230,
  },

  {
    field: "amount",
    headerName: "Price",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const productList = [
  {
    id: "product1",
    product: "Basic subscription",
    img: "https://images.unsplash.com/photo-1664328900302-6cb92b21902f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80",
    info: "Includes: Custom domain, Customer care, Storage space 3GB, Free SSL certificate",
    price: "250€",
  },
  {
    id: "product2",
    product: "Subscription+",
    img: "https://images.unsplash.com/photo-1664454727557-f49389f36bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    info: "Includes: Custom domain, Free domain for 1 year, Free SSL certificate, Site Booster app, Storage space 10GB, Remove ads, Customer care",
    price: "430€",
  },
  {
    id: "product3",
    product: "Premium subscription",
    img: "https://images.unsplash.com/photo-1664472372775-83737c64fea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    info: "Includes: Custom domain, Free domain for 1 year, Free SSL certificate, Site Booster app, Visitor Analytics app, Storage space 30GB, Remove ads, Customer care, ",
    price: "500€",
  },
];

export const productRows = [
  {
    id: 1409695,
    product: "Basic subscription",
    img: "https://images.unsplash.com/photo-1664328900302-6cb92b21902f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80",
    customer: "Sean Okland",
    date: "6 March",
    amount: "250€",
    method: "Cash on Delivery",
    status: "approved",
  },
  {
    id: 2235235,
    product: "Subscription+",
    img: "https://images.unsplash.com/photo-1664454727557-f49389f36bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    customer: "Michael Doe",
    date: "20 February",
    amount: "430€",
    method: "Online Payment",
    status: "pending",
  },
  {
    id: 2342353,
    product: "Premium subscription",
    img: "https://images.unsplash.com/photo-1664472372775-83737c64fea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    customer: "John Smith",
    date: "25 May",
    amount: "500€",
    method: "Cash on Delivery",
    status: "pending",
  },
  {
    id: 2357741,
    product: "Subscription+",
    img: "https://images.unsplash.com/photo-1664454727557-f49389f36bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    customer: "Jane Smith",
    date: "1 March",
    amount: "430€",
    method: "Online",
    status: "approved",
  },
  {
    id: 2342355,
    product: "Basic subscription",
    img: "https://images.unsplash.com/photo-1664328900302-6cb92b21902f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80",
    customer: "Harold Carol",
    date: "1 March",
    amount: "250€",
    method: "Online",
    status: "pending",
  },
];
