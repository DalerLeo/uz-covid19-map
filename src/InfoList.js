import React from "react";
import {PATHS} from "./constants";

const INFECTED = 'data-inf'
const TITLE = 'data-title'
const ID = 'id'
const SORTER = PATHS.sort((a, b) => b[INFECTED] - a[INFECTED])
const InfoList = props => {

  const {onSelect, selected} = props
  return (
    <div className='card list'>
      <div className='itemHeader'>

        <span><b>Viloyatlar</b></span>
        <span><b>Yuqtirganlar</b></span>


      </div>
      {SORTER.map(path => {
        const id = path[ID]
        const title = path[TITLE]
        const infected = path[INFECTED]
        const active = id === selected ? ' activeItem' : ''
        const classN = 'item' + active
        return (
          <div key={title} className={classN} onClick={() => onSelect(id)}>
            <span>{title}</span>
            <span>{infected}</span>
          </div>
        )
      })}
    </div>
  )
}

export default InfoList
