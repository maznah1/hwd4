
const Form = ({img,Prise,Name}) => {



  
  return (
    <>
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={img} className='mt-4'
        width='50%'
        height='50%' 
        alt="img"/>
        <div> <h5 className="card-title">Name:{Name}</h5></div>
      <div className="card-body">

        <h5 className="card-title">Prise:{Prise}</h5>
      </div>
    </div>
  </div>
  
</div>

</>
  )
}

export default Form;