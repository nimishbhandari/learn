import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="comp_container">
      <div className="form_container">
        <h2 className="form_heading">Home</h2>
        <center style={{ color: "#666" }}>Welcome to MERN STACK</center>

        <center>
          <Link to="/login">Login</Link>
        </center>
      </div>
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
