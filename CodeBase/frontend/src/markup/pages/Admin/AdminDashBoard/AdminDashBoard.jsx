import React from 'react'
import AdminMenu from "../../../components/Admin/AdminMenu/AdminMenu";
import { Link } from "react-router-dom";
import "./dashBoard.css"

const AdminDashBoard = () => {
  return (
    <>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <section className="services-section col-md-9 admin-right-side">
            <div className="auto-container">
              <div className="sec-title style-two">
                <h2>Admin Dashboard</h2>
                <div className="text">
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution.
                </div>
              </div>

              <div className="row">
                {/* ALL ORDERS */}
                <div className="col-lg-4 service-block-one">
                  <div className="inner-box hvr-float-shadow">
                    <h5>OPEN FOR ALL</h5>
                    <h2>All Orders</h2>
                    <Link to="/admin/orders" className="read-more">
                      LIST OF ORDERS +
                    </Link>
                    <div className="icon">
                      <span className="flaticon-power"></span>
                    </div>
                  </div>
                </div>
                {/* New orders */}
                <div className="col-lg-4 service-block-one">
                  <div className="inner-box hvr-float-shadow">
                    <h5>OPEN FOR LEADS</h5>
                    <h2>New Orders</h2>
                    <Link to="/admin/create-order" className="read-more">
                      ADD ORDER +
                    </Link>
                    <div className="icon">
                      <span className="flaticon-power"></span>
                    </div>
                  </div>
                </div>
                {/* Employees */}
                <div className="col-lg-4 service-block-one">
                  <div className="inner-box hvr-float-shadow">
                    <h5>OPEN FOR ADMINS</h5>
                    <h2>Employees</h2>
                    <Link to="/admin/employees" className="read-more">
                      LIST OF EMPLOYEES +
                    </Link>
                    <div className="icon">
                      <span className="flaticon-gearbox"></span>
                    </div>
                  </div>
                </div>
                {/* Add employee */}
                <div className="col-lg-4 service-block-one">
                  <div className="inner-box hvr-float-shadow">
                    <h5>OPEN FOR ADMINS</h5>
                    <h2>Add Employee</h2>
                    <Link to="/admin/add-employee" className="read-more">
                      read more +
                    </Link>
                    <div className="icon">
                      <span className="flaticon-brake-disc"></span>
                    </div>
                  </div>
                </div>
                {/* Engine service  and repair */}
                <div className="col-lg-4 service-block-one">
                  <div className="inner-box hvr-float-shadow">
                    <h5>SERVICE AND REPAIRS</h5>
                    <h2>Engine Service & Repair</h2>
                    <Link to="/admin/services" className="read-more">
                      read more +
                    </Link>
                    <div className="icon">
                      <span className="flaticon-car-engine"></span>
                    </div>
                  </div>
                </div>
                {/* Tyre & wheels */}
                <div className="col-lg-4 service-block-one">
                  <div className="inner-box hvr-float-shadow">
                    <h5>SERVICE AND REPAIRS</h5>
                    <h2>Tyre & Wheels</h2>
                    <Link to="/admin/services" className="read-more">
                      read more +
                    </Link>
                    <div className="icon">
                      <span className="flaticon-tire"></span>
                    </div>
                  </div>
                </div>
                {/* Denting & painting */}
                <div className="col-lg-4 service-block-one">
                  <div className="inner-box hvr-float-shadow">
                    <h5>SERVICE AND REPAIRS</h5>
                    <h2>Denting & Painting</h2>
                    <Link to="/admin/services" className="read-more">
                      read more +
                    </Link>
                    <div className="icon">
                      <span className="flaticon-spray-gun"></span>
                    </div>
                  </div>
                </div>
                {/* Engine service  and repair */}
                <div className="col-lg-4 service-block-one">
                  <div className="inner-box hvr-float-shadow">
                    <h5>SERVICE AND REPAIRS</h5>
                    <h2>Air Conditioning</h2>
                    <Link to="/admin/services" className="read-more">
                      read more +
                    </Link>
                    <div className="icon">
                      <span className="flaticon-car-engine"></span>
                    </div>
                  </div>
                </div>
                {/* Tyre & wheels */}
                <div className="col-lg-4 service-block-one">
                  <div className="inner-box hvr-float-shadow">
                    <h5>SERVICE AND REPAIRS</h5>
                    <h2>Brake Check</h2>
                    <Link to="/admin/services" className="read-more">
                      read more +
                    </Link>
                    <div className="icon">
                      <span className="flaticon-tire"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AdminDashBoard