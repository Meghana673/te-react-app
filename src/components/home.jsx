import React from "react";

export default function Functional()
{
    return(
        <div>

<Slides></Slides>
        {/* <img src="https://logan.nnnow.com/content/dam/nnnow-project/26-aug-2022/se/TooFaced_TopBannerdesktop.jpg"></img> */}
       
       <br></br> <h2 className="h2">OUR TOP BEUTY OFFERS</h2>

       <br></br>
       <Catagory></Catagory>
        </div>
        
    )
}

class Slides extends React.Component{
    render(){
        return(
           
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2022/se/SC_Brandoftheweek_Topbannerdesktop(1).jpg" className="d-block w-100" style={{height:'470px'}} ></img>
    </div>
    <div class="carousel-item">
      <img src="https://logan.nnnow.com/content/dam/nnnow-project/13-oct-2022/SC_TopBannerdesktop.jpg" className="d-block w-100"  style={{height:'470px'}} ></img>
    </div>
    <div class="carousel-item">
      <img src="https://logan.nnnow.com/content/dam/nnnow-project/11-oct-2022/Nudestix_TopBanner_Diwalidesktop.jpg" className="d-block w-100"  style={{height:'470px'}} ></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
           
        )
    }
}


class Catagory extends React.Component{
    render()
    {
        return(
           
                <div className="container">
                    <div className="row">
                        <div className="col col-md-4">
                            <img src="https://logan.nnnow.com/content/dam/nnnow-project/13-oct-2022/Aveda_P-story(1).jpg" style={{width:300,height:300}} alt="" />
                        </div>
                        <div className="col col-md-4">
                            <img src="https://logan.nnnow.com/content/dam/nnnow-project/31-aug-2022/se/OUAI_P-story.jpg" style={{width:300,height:300}}alt="" />
                        </div>
                        <div className="col col-md-4">
                            <img src="https://logan.nnnow.com/content/dam/nnnow-project/13-oct-2022/Ikoo_Pstory1.jpg"style={{width:300,height:300}} alt="" />
                        </div>
                    </div>
                    <br></br>
                    <div className="row mt-4">
                        <div className="col col-md-4 ">
                            <img src="https://logan.nnnow.com/content/dam/nnnow-project/31-aug-2022/se/Hanzdefuko_Pstory.jpg" style={{width:300,height:300}} alt="" />
                        </div>
                        <div className="col col-md-4">
                            <img src="https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2022/PIXI_P-story.jpg" style={{width:300,height:300}}alt="" />
                        </div>
                        <div className="col col-md-4">
                            <img src="https://logan.nnnow.com/content/dam/nnnow-project/31-aug-2022/Abhatipstory.jpg"style={{width:300,height:300}} alt="" />
                        </div>
                    </div>
                </div>    
          
        )
    }
}