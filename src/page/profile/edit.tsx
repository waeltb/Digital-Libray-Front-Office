import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
//import Footer from "../../footer";
import { User11 } from "../../components/imagepath";
import  InstructorHeader  from "./header";
import InstructorSidebar from "./sidebar";

const Editprofile:React.FC= () => {
  const [ setCountry] = useState<any>(null);
  const options = [
    { label: "Select Country", value: "Select" },
    { label: "India", value: "India" },
    { label: "America", value: "America" },
    { label: "London", value: "London" },
  ];
  const style = {
    control: (baseStyles:any, state:any) => ({
      ...baseStyles,
      backgroundColor: "white",
      width: "100%",
      height: "40px",
      color: "black",
      minHeight: "40px",
      paddingLeft: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        cursor: "pointer",
      },
      outline: "none",
    }),
    menu: (base:any) => ({ ...base, marginTop: "0px" }),
    menuList: (base:any) => ({ ...base, padding: "0" }),
    option: (provided:any, state:any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#FFDEDA" : "white",
      color: "black",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: "#FFDEDA",
        // #dddddd
      },
    }),
    indicatorSeparator: (base:any) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base:any, state:any) => ({
      ...base,
      color: "black",
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
    }),
  };
  return (
    <div className="main-wrapper">
      <InstructorHeader />
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <InstructorSidebar activeMenu={"EditProfile"} />
            {/* Sidebar */}

            {/* Profile Details */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Profile Details</h3>
                    <p>
                      You have full control to manage your own account setting.
                    </p>
                  </div>
                  <div className="course-group mb-0 d-flex">
                    <div className="course-group-img d-flex align-items-center">
                      <Link to="instructor-profile">
                        <img src={User11} alt="" className="img-fluid" />
                      </Link>
                      <div className="course-name">
                        <h4>
                          <Link to="instructor-profile">Your avatar</Link>
                        </h4>
                        <p>PNG or JPG no bigger than 800px wide and tall.</p>
                      </div>
                    </div>
                    <div className="profile-share d-flex align-items-center justify-content-center">
                      <Link to="#;" className="btn btn-success">
                        Update
                      </Link>
                      <Link to="#;" className="btn btn-danger">
                        Delete
                      </Link>
                    </div>
                  </div>
                  <div className="checkout-form personal-address add-course-info">
                    <div className="personal-info-head">
                      <h4>Personal Details</h4>
                      <p>Edit your personal information and address.</p>
                    </div>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your first Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your last Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your Phone"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">Email</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              Birthday
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Birth of Date"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-label">Country</label>
                            <Select
                              className=" select"
                              name="sellist1"
                              options={options}
                              defaultValue={options[0]}
                              placeholder="Select Country"
                              onChange={setCountry}
                              styles={style}
                            ></Select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              Address Line 1
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Address"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              Address Line 2 (Optional)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Address"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">City</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your City"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              ZipCode
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your Zipcode"
                            />
                          </div>
                        </div>
                        <div className="update-profile">
                          <button type="button" className="btn btn-primary">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Details */}
          </div>
        </div>
      </div>
   
    </div>
  );
}
export default Editprofile;