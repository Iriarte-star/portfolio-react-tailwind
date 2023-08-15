//import '../styles/IntroCards.css'
import { AiFillForward } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

const IntroduceCards = () =>{
     
    return (
        <>
        <div className="cards-container">
          <div className="card">
              <div className="perfil">
                <img src="../public/perfil.jpg " alt="perfil" />
              </div>
              <div className="description">
                <h1 className='title'>
                    <AiFillForward className='icono-profession'></AiFillForward> WEB DEVELOPER  
                </h1>
                <div className="description-date">
                  <p className='description-name'>
                     const fullStak = <BiChevronLeft className='icono-name'> </BiChevronLeft></p>
                  <p> <span className='clave'>name</span>  = <span className='valor'> &quot; Jhonny Iriarte &quot</span></p>
                  <p> <span className='clave'>email</span> = &quot; iriarte.condori.jhonny25@gmail.com &quot;</p>
                  <p> <span className='clave'>age</span>= 29</p>
                  <p> <span className='clave'>country</span> = &quot;Bolivia&quot;</p>
                  <p><BiChevronRight className='icono-name' ></BiChevronRight></p>
                </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </>
        
      );
};

export default IntroduceCards;