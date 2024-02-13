import { Link } from 'react-router-dom'
import './home.css'
function Home(){
    return(
        <>
       
          <h1 className="hding">happy marriage anniversary </h1>
          <h2 className="hding2">Yogesh And Kusum</h2>
         <div className="marquemain">
            <div className="all_data">
         <h3 className="marque">happy marriage anniversary</h3>
         <div className="gola"></div>
         <h3 className="marque">happy marriage anniversary</h3>
         <div className="gola"></div>
         </div>
         <div className="all_data">
         <h3 className="marque">happy marriage anniversary</h3>
         <div className="gola"></div>
         <h3 className="marque">happy marriage anniversary</h3>
         <div className="gola"></div>
         </div>
         <div className="all_data">
         <h3 className="marque">happy marriage anniversary</h3>
         <div className="gola"></div>
         <h3 className="marque">happy marriage anniversary</h3>
         <div className="gola"></div>
         </div>
         <div className="all_data">
         <h3 className="marque">happy marriage anniversary</h3>
         <div className="gola"></div>
         <h3  className="marque">happy marriage anniversary</h3>
         <div className="gola"></div>
         </div>
         </div>
         
       
       
        
        
     
        <br/>
        <img className="img1" src="https://media.tenor.com/h1i4XlKhF8wAAAAM/happy-anniversary-to-both-of-you.gif"></img>
       
       <div>
<p className="pgraf">       I hope you have an incredible anniversary filled with all the best things! Happy anniversary to the best couple I hope your special day is full of beauty and love.  I hope your anniversary is just as awesome as you both are!
 </p>
 
       </div>
      <Link to={'/images'}><button className="button">Gift</button></Link> 
        </>
    )
}
    export default Home