import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

// A custom service for login/logout actions.
import loginService from "../../../services/login.service";

//A custom hook that gives access to authentication state (isLogged, setIsLogged, employee).
import { useAuth } from "../../../Context/AuthContext";

//Library that creates profile avatars using user initials
import Avatar from "react-avatar";

//Bootstrap dropdown menu components for the mobile view.
import { Dropdown, DropdownButton } from "react-bootstrap";


//bootstrap CSS is imported
import "bootstrap/dist/css/bootstrap.min.css"; 


import "./Header.css";



function Header(props) {
  const { isLogged, setIsLogged, employee } = useAuth();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [showMenu, setShowMenu] = useState(false);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logOut = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      loginService.logOut();
      setIsLogged(false);
      navigate("/login");
    }
  };

  const handleAdminClick = (event) => {
    event.preventDefault();
    navigate("/admin");
  };

  const handleProfileClick = (event) => {
    event.preventDefault();
    navigate(`/admin/employee-profile/${employee?.employee_id}`);
  };

  const isAdmin = employee?.employee_role === 3;
  console.log("is user admin", isAdmin);

  return (
    <div>
      <header className="main-header header-style-one">
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="left-column">
                <div className="text">Enjoy the Beso while we fix your car</div>
                <div className="office-hour">
                  Monday - Saturday 7:00AM - 6:00PM
                </div>
              </div>
              <div className="right-column d-flex">
                {isLogged ? (
                  <div className="link-btn">
                    <button onClick={handleAdminClick} className="account-btn">
                      <strong>Welcome {employee?.employee_first_name}!</strong>
                    </button>
                  </div>
                ) : (
                  <div className="phone-number">
                    Schedule Appointment: <strong>1900 000 0000</strong>
                  </div>
                )}
                {isLogged && (
                  <div className="employee_profile">
                    <Avatar
                      name={`${employee?.employee_first_name} ${employee?.employee_last_name}`}
                      size="50"
                      textSizeRatio={2}
                      color="#EE100E"
                      round={true}
                      style={{ cursor: "pointer" }}
                      onClick={handleProfileClick}
                      className="avatar"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo-box left-box">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="right-column">
                <div className="nav-outer">
                  {isMobile && (
                    <div className="hamburger-container">
                      <div className="">
                        <DropdownButton
                          className="dropdown-button"
                          id="dropdown-basic-button"
                          variant="none"
                          title={
                            <div className="hamburger-icon">
                              <span className="hamburger-line"></span>
                              <span className="hamburger-line"></span>
                              <span className="hamburger-line"></span>
                            </div>
                          }
                        >
                          <Dropdown.Item as={Link} to="/">
                            Home
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/about">
                            About Us
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/services">
                            Services
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/contact">
                            Contact Us
                          </Dropdown.Item>
                        </DropdownButton>
                      </div>
                    </div>
                  )}
                  {!isMobile && (
                    <nav className="main-menu navbar-expand-md navbar-light">
                      <div
                        className="collapse navbar-collapse show clearfix"
                        id="navbarSupportedContent"
                      >
                        <ul className="navigation navbar-nav">
                          <li className="dropdown">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="dropdown">
                            <Link to="/about">About Us</Link>
                          </li>
                          <li className="dropdown">
                            <Link to="/services">Services</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                          {isLogged && (
                            <li className="dropdown">
                              <Link to="/admin">Dashboard</Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    </nav>
                  )}
                </div>
                <div className="search-btn"></div>
                {isLogged ? (
                  
                    <div className="signing-btn">
                      <Link
                        to="/"
                        className="theme-btn btn-style-one blue"
                        onClick={logOut}
                      >
                        Log out
                      </Link>
                    </div>
                
                ) : (
                  <div className="signing-btn">
                    <Link to="/login" className="theme-btn btn-style-one">
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
