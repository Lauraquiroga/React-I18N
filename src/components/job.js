import React from "react";
import {FormattedDate, FormattedNumber} from 'react-intl';

const Job = (props) => {
  let numFormat = "";
  if (props.language == "en"){
    numFormat= "en-US";
  }
  else{
    numFormat = "es-CO";
  }
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
    </td>
    <td>
    {new Intl.NumberFormat(numFormat, { maximumSignificantDigits: 3 }).format(props.offer.views)}
      </td>
    </tr>
  );
};

export default Job;
