
const Slider1 = () =>{

  
  let array=[
  {  images:"./assets/images/slider1.png"}
  ]
  const images = new Array(12).fill('./assets/images/slider1.png');
  

    return(

        <>
       <div className="container">
      <div className="row">
        <div className="col-md-5 col-lg-5">
          <div className="d-flex gap-2">
            <h1 className="trendtxt">TRENDING</h1>
            <h1 className="brandtxt">BRANDS</h1>
          </div>
          <p className="brandpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>
        <div className="col-md-7 col-lg-7">
          <div className="owl-carousel owl-theme sliderdiv">
            {/* <div className="item">{images}</div> */}
            {images.map((src, index) => (
        <div className="item" key={index}>
          <img src={src} alt={`Slide ${index + 1}`} />
        </div>
      ))}
          </div>
        </div>
      </div>
    </div>
    <div className="my-5">
           <hr className="custom-hr1" />
          
        </div>
        </>
    );
}
export default Slider1;