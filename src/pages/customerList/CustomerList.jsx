import React, { useState } from 'react';
import './customerList.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { customerRows } from '../../dummyData';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

export default function DataTable() {
  const [data, setData] = useState(customerRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'userName',
      headerName: 'Full Name',
      width: 230,
      renderCell: (params) => (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt={`${params.row.userName}'s avatar`} />
          {params.row.userName}
        </div>
      ),
    },
    {
      field: 'email',
      headerName: 'E-mail',
      type: 'string',
      width: 200,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      width: 150,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 250,
    },
    {
      field: 'membership',
      headerName: 'Membership',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <div className="userListAction">
          <Link to={`/customer/${params.row.id}`}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutlineOutlinedIcon className="userListDelete" onClick={() => handleDelete(params.row.id)} />
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <div style={{ height: 680, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
