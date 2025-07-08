import React from 'react'

export default function pagination(prop) {
  
    return (
        <>
        <div className="pagination">
        <div className="pagination-menu"></div>
        <div className="pagination-button">
            <span>{prop.numbers}</span>
            <div className="line"></div>
            <span>{prop.Lastnumbers}</span>
        </div>
        </div>
        </>
    )
}
