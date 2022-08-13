import React from "react";
import {ReactDOMServer} from "react-dom";
import { NonMobile, Mobile } from "../../../../components/Breakpoints";

const ExperienceCard = (props) => {
  const { position, company, date, descriptions} = props;
  return (
    <div>
      <div style={{display: "inline-block", width: "100%"}}>
        <div style={{float: "left"}}>
          <h4 style={{margin: 0, padding: 0}}>{position}</h4>
          <div>{company}</div>
          <Mobile>
            <div>{date}</div>
          </Mobile>
        </div>
        <NonMobile>
          <div style={{float: "right"}}>{date}</div>
        </NonMobile>
      </div>
      <div>
        <ul>
          {
            descriptions.map((el, idx) => {
              return (
                <li dangerouslySetInnerHTML={{__html: el}} key={idx}/>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;