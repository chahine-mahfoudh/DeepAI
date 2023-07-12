function Paper() {
  return (
    <>
      <div className="row mt-5">
        <div className="col-3">
            type de document
          <select className="form-select" aria-label="Default select example">
            <option selected>Select document type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-3">
          Sous type de document
          <select className="form-select" aria-label="Default select example">
            <option selected>Select document type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-3">
            Pays
          <select className="form-select" aria-label="Default select example">
            <option selected>Select Pays</option>
            <option value="1">Tunisia</option>
            <option value="2">France</option>
          </select>
        </div>
        <div className="col-3">
          Langue
          <select className="form-select" aria-label="Default select example">
            <option selected>Select Langue</option>
            <option value="1">Francais</option>
            <option value="2">Arabe</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Paper;
