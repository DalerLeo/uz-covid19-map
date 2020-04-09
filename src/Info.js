import React from "react";
import {TOTALS} from "./constants";

const Info = props => {
  return (

    <div className="card total">
      <div className="box">
        <div className="label">Yuqtirganlar</div>
        <div className="value">{TOTALS.cases}</div>
      </div>
      <div className="box">
        <div className="label">Sog'ayganlar</div>
        <div className="value">{TOTALS.cured}</div>
      </div>
      <div className="box">
        <div className="label">Vafot etganlar</div>
        <div className="value">{TOTALS.death}</div>
      </div>
    </div>
  )
}

export default Info
