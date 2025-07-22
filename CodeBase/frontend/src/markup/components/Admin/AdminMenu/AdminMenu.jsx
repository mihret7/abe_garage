import React from 'react'
import { Link } from 'react-router-dom'


const AdminMenu = () => {
  return (
    <div>
      <div className="admin-menu">
        <h2>Admin Menu</h2>
      </div>
      <div className="list-group">

        <Link to="/admin" className="list-group-item py-3">
          Dashboard
        </Link>
        <Link to="/admin/orders" className="list-group-item py-3">
          Orders
        </Link>
        <Link to="/admin/create-order" className="list-group-item py-3">
          New order
        </Link>
        <Link to="/admin/add-employee" className="list-group-item py-3">
          Add employee
        </Link>
        <Link to="/admin/employees" className="list-group-item py-3">
          Employees
        </Link>
        <Link to="/admin/add-customer" className="list-group-item py-3">
          Add customer
        </Link>
        <Link to="/admin/customers" className="list-group-item py-3">
          Customers
        </Link>
        <Link to="/admin/services" className="list-group-item py-3">
          Services
        </Link>

      </div>
    </div>
  );
};

export default AdminMenu;
