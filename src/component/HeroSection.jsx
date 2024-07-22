import React from "react";
const HeroSection = () =>{

    return(

        <>
            <div>
            <div className="herodiv">
                <div className="video-background">
                    <video autoPlay muted loop>
                        <source src="./assets/video/herovideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay"></div>
                    <div className="content">
                        <p>Crafted to perfection</p>
                        <h1>Fashion with Stylvix</h1>
                        <button className="btnshopnow">Shop Now</button>
                        
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}
export default HeroSection;