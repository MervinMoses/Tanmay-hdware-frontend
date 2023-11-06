import React from 'react'
import gif from '../img/catload.gif'

function Loading() {
  return (
    <>
    {/* <div className="progress my-5" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{ width: '100%' }}></div>
  </div> */}
  <div className="container">
    <div className="text-center w-100">
      <img src={gif} width="100" height="100" frameBorder="0" className="giphy-embed rounded-4" style={{margin:'15rem auto 10rem'}}/>
      </div>
   </div>
    </>
  )
}

export default Loading