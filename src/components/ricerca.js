function Ricerca(){
    return(
        <>
        <h1>Cosa desideri guardare?</h1>
        <div className='col'>
        <input class="form-control" type="text" placeholder="Film"></input>
        <button class="btn btn-primary" type="submit">Cerca</button>
        </div>
        <hr />
        </>
    );
}

export default Ricerca;