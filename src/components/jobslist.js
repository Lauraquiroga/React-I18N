import React, { useState } from "react";
import Job from "./job";
import {FormattedMessage} from 'react-intl';

const JobsList = (props) => {

  const language = props.language;

  function setSalary(salary){
    if (salary==1){
      return <div> {salary} <FormattedMessage id="MillionSingular"/></div>
      
    }
    else{
      return <div> {salary} <FormattedMessage id="MillionPlural"/></div>
    }

   
  }
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: setSalary(4.5) ,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 1399
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: setSalary(20),
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 2000
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: setSalary(1),
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 192
    },
  ]);

  function setTheme(){
    if (language == "en"){
      return "table-dark";
    }
    else {return "table-light";}
  }
  return (
    <div>
      <table className="table">
        <thead className={setTheme()}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Company"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Salary"/>
            </th>
            <th scope="col">
              <FormattedMessage id="City"/>
            </th>
            <th scope="col">
              <FormattedMessage id="PublicationDate"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Views"/>
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} language={language}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
