import {useState} from 'react'

function Ready() {
  const [selectedContract, setSelectedContract] = useState()
  const arrayOfReady = ['Contrat de location', 'Attestation de salaire', 'Contrat CDI']
  return (
    <div className='row pt-5'>
      {arrayOfReady.map((item: any) => (
        <div className='col-4'>
          <div className='card rounded-4 border-info'>
            <div className='card-body'>
              <h5 className='card-title'>{item}</h5>
              <p className='card-text'>
                With supporting text below as a natural lead-in to additional content.
              </p>
              <button
                className='btn btn-primary'
                onClick={() => {
                  setSelectedContract(item)
                }}
              >
                Ready to print
              </button>
            </div>
          </div>
        </div>
      ))}
      {selectedContract && (
        <div className='py-2'>
          <div className='card'>
            <div className='card-header d-flex justify-content-center'>
              <div className='card-title  fs-2 fw-bold'>{selectedContract}</div>
            </div>
            <div className='card-body min-h-300px bg-secondary d-flex justify-content-center align-items-center fs-1'>
              Preview
            </div>
            <div className='card-footer text-center'>
              <button className='btn btn-success'>Download</button>
            </div>
          </div>
          <div className='text-center pt-20'>
            <button className='btn btn-lg btn-secondary fs-1 fw-bold'>
              Generate Your Own Paper
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ready
