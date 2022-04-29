import Nab from "../REACT/navbar";
import fruits from "../images/fruits.jpg";
import Cards_demo from "../REACT/Cards";
import Shutters from "../REACT/accs";
import Buttons from "../REACT/Butttons";
import Slides from "../REACT/slides";
import CenterNav from "../REACT/home-nav";
import ControlledTabs from "../REACT/tabbs";






const Home_page = () => {
    return(
        <>
        <div>
            <div className="text01"> 
 <CenterNav />
            <h1 className="home-text">
                THE NEW WAY TO FULLFILL YOUR DAILY NEED OF VEGGIES AND FRUITS WITH WEED
            </h1>
            <div className="home-link"> 
                 <a href="#home-text" >
  LETS GOOOOOOOOO (click me)
 </a>
            </div>
      
          
 </div>
            <article id="home-text" className="bgg-home">
                <h3 className="review-text">
                    "The fastest service I ever encontered and they are very friendly"
                    <p className="text-idk">--john</p>
                </h3>
             <Shutters />

<a href="#cards">
<h3 className="review-text">
    Ready to make things happen? 
    select what you wanna get for yourself (click me)
</h3> </a>
          
           
<div >
    <Cards_demo />
</div>
           
           </article>

        </div>
        </>
    )
}

export default Home_page;