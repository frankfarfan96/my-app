import React from 'react'

export const Pages = (props) => {
  return (
    <>
    <hr />
    <div className='pages'>
      current page = {props.currentPage}
      pages = {props.pages}
    </div>
    </>
  )
}
