import React from "react";
import PropTypes from "prop-types";

const table = ({ bgDark }) => {
  return (
    <section
      className={`feature-section ptb-120 ${bgDark ? "bg-dark" : "bg-light"}`}
    >
      <h3>Featured Courses</h3>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Start</th>
            <th>Rate</th>
            <th>Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Digital Design Systems</td>
            <td>Mar 11</td>
            <td>⭐ 4.6</td>
            <td>UI/UX</td>
            <td>40 H</td>
          </tr>
          <tr>
            <td>Financial Markets</td>
            <td>Apr 20</td>
            <td>⭐ 4.8</td>
            <td>Business</td>
            <td>40 H</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <button className="upgrade-btn">Upgrade</button>
      </div>
    </section>
  );
};

// PropTypes for type checking
table.propTypes = {
  bgDark: PropTypes.bool,
};

export default table;
