import React from 'react'

const Card = ({id, image, name, type, _callback }) => {
//   const style = type + " thumb-container card";
  return (
    <div>
      <div  >
           <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <span>Type: {type}</span>
            </div>
        </div>
    </div>
  )
}

export default Card
{/* <div className={style} style={{display:"inline"}}>
        <div className="number">
          <small>#0{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className="detail-wrapper">
          <h3>{name}</h3>
          <small>Type: {type}</small>
        </div>
      </div> */}