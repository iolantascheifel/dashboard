export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
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

export const userRows = [
  {
    id: 1,
    username: "Austin",
    img: "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    status: "active",
    email: "austin.schmidtmann@gmail.com",
    age: 50,
  },
  {
    id: 2,
    username: "Sean",
    img: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    email: "sean.okland@gmail.com",
    status: "passive",
    age: 39,
  },
  {
    id: 3,
    username: "Rosa",
    img: "https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    email: "rosa.hummers@gmail.com",
    status: "pending",
    age: 32,
  },
  {
    id: 4,
    username: "Elena",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    email: "elena.miller@gmail.com",
    status: "active",
    age: 34,
  },
  {
    id: 5,
    username: "Teresa",
    img: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    email: "teresa30@gmail.com",
    status: "passive",
    age: 27,
  },
  {
    id: 6,
    username: "Paul",
    img: "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
    email: "paul.smith@gmail.com",
    status: "active",
    age: 43,
  },
  {
    id: 7,
    username: "Denis",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    email: "denis.williams@gmail.com",
    status: "passive",
    age: 30,
  },
  {
    id: 8,
    username: "Amelia",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    email: "amelia1983@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Franco",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    email: "franco.depega@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxanna",
    img: "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    email: "roxanna.palmeri@gmail.com",
    status: "active",
    age: 50,
  },
  {
    id: 11,
    username: "Arthur",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    email: "arthur.jonsons@gmail.com",
    status: "active",
    age: 35,
  },
  {
    id: 12,
    username: "Michael",
    img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    email: "michael.ulrice@gmail.com",
    status: "active",
    age: 40,
  },
  {
    id: 13,
    username: "Ingrid",
    img: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
    email: "igrid.email@gmail.com",
    status: "active",
    age: 28,
  },
  {
    id: 14,
    username: "Iren",
    img: "https://images.unsplash.com/photo-1599842057874-37393e9342df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    email: "iren.koskinen@gmail.com",
    status: "active",
    age: 30,
  },
];
