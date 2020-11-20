import React from "react";

const TableData = props => {
  return (
    <React.Fragment>
        <table>
        <tbody>
      <tr>
        <td id='first_col'>{props.feature}</td>
        <td id='second_col'>{props.description}</td>
        <td >
            <i className='fa fa-angle-down' aria-hidden='true'></i>
        </td>
      </tr>
       </tbody>
      </table>
    </React.Fragment>
  );
};

export default TableData;
