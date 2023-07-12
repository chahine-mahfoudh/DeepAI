
function Ready() {
  const arrayOfReady = [
    "Contrat de location",
    "attestation de salaire",
    "Contrat CDI",
  ];
  return (
    <div className="row pt-5">

      {arrayOfReady.map((item: any) => 
      <div className="col-3">

        <div className="card rounded-4 border-info">
          <div className="card-body">
            <h5 className="card-title">{item}</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Ready to print
            </a>
          </div>
        </div>
    </div>
      )}
    </div>
  );
}

export default Ready;
