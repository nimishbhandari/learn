import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Dashboard = ({ auth: { isAuthenticated, user } }) => {
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="comp_container">
      <div className="form_container">
        <h2 className="form_heading">Dashboard</h2>
        <center>
          Name: <b> {user && user.name}</b>
        </center>
        <center>
          Email: <b> {user && user.email}</b>
        </center>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
