function Movie() {
    return(
        <div className='col'>
            <div className="card" style={{ width: '18rem'}}>
  <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdRBxhU7YidmISMghhQe6NC2AE93a6y_uDA&usqp=CAU" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Matrix 4</h5>
    <p className="card-text">Genere : Action</p>
    <p className="card-text">Year : 2021</p>
    <button className="btn btn-outline-danger">Play</button>
  </div>
</div>
        </div>
    );
}

export default Movie;