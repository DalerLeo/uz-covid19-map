import React, {useState, useEffect} from "react";
import {PATHS} from "./constants";

const Map = props => {

const {onSelect, selected} = props

  const [cord, setCord] = useState({})
  const [visible, setVisible] = useState(false)
  const onVisible = (val) => {
    if(!visible){
      setVisible(true)
    }
  }

  const onMouseLeave = () => visible && setVisible(false)


  useEffect(() => {
    document.addEventListener('scroll', onMouseLeave)

    return () => document.removeEventListener('scroll', onMouseLeave)
  }, [])

/*
  const onTouchStart = ev => {
    onVisible()
    const rect = ev.target.getBoundingClientRect();
   const bodyRect = document.body.getBoundingClientRect()
   const top = rect.top - bodyRect.top + rect.height/2;
   const left = rect.x + rect.width/3;

    setCord({top: top - 30 +'px', left: left+'px', title, id, inf})

  }
*/
  const onMouseEnter = ev => {
    onVisible()
    var x = ev.clientX;
    var y = ev.clientY;
    const title = ev.target.dataset.title
    const inf = ev.target.dataset.inf
    const cured = ev.target.dataset.cured
    const id = ev.target.id
//    const rect = ev.target.getBoundingClientRect();
//    const bodyRect = document.body.getBoundingClientRect()
//    const top = rect.top - bodyRect.top + rect.height/2;
//    const left = x + rect.width/3;

    setCord({top: y - 30 +'px', left: x+'px', title, id, inf, cured})
  }

  const onClick = (ev) => {
    onSelect(ev.target.id)
  }
  const {title, id, inf, cured, ...rest} = cord
  return (
    <div className='mapWrapper'>
      <h1>COVID-19 O'zbekiston viloyatlari bo'yicha tarqalishi</h1>
      <div className="map">
        {visible && <div className="tooltip" style={rest}>{title} - {inf} / {cured}</div>}
        <svg
          version="1.1"
          id="Слой_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          className='svgMap'
          viewBox="0 0 1635 1080"  >
            {PATHS.map(p => (
              <path
                key={p.id}
                fill={p.id === selected ? '#7a2d37': ''}
                {...p}
                onPointerMove={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
              />
              ))}
      </svg>
      </div>
    </div>
  )
}

export default Map
