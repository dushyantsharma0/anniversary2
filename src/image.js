import Aman from './allimages'
import img1 from './imgs/WhatsApp Image 2024-02-13 at 13.28.47_4d0e460d.jpg'
import img2 from './imgs/2.jpg'
import img3 from './imgs/3.jpg'
import img4 from './imgs/4.jpg'
import img5 from './imgs/5.jpg'
import { Link } from 'react-router-dom';
import audio from './imgs/6.mp3'
import { useRef, useState } from 'react'

function img() {
   

    return(
        <>
  
     
         < Link to={'/'}><button className='button'>Go Back</button></Link> 
         <h4>CLICK ON PIC AND ARROW BUTTON ALSO</h4>
     <Aman image={img5} name="Happy Anniversary " pgraf="शादी की सालगिरह की बधाई ! विश्वास के साथ आप इस रिश्ते को निभाए ! Happy Wedding Anniversary ! और खुशियों से भर जाए आपका जीवन ! !"/>   
<Aman image={img1}  name="Old Pic" pgraf="जो अपनी वाणी से  
सारे घर को महकाती है,
जो अपना दिन भर 
घर के काम काज मे गुजारती है,
वो हमारी मौसी है
 
गरमी के मौसम में जिसने 
छॉव बनकर घर को  सवारा है,
बच्चों  उजले भविष्य के सपने देख, 
जिसने सारा जीवन संघर्ष मे गुज़ारा है,
वो हमारे मौसा जी  है
 
जो अपने ममता के आँचल से 
घर आँगन को सवारती है,
अपने बच्चों की  कठिनाईयो मे 
अपने आप को ढाल बनाती है,
वो हमारी मौसी है
 
जो हमारी गलतियों पर 
प्यार से डाट भी लगाते है
फिर हमारे साथ मिल कर 
हमेशा खुशियो को बढ़ाते है
वो हमारे मौसा जी है
 
आज हमारी उन्ही मौसा जी और मौसी जी को 
शादी की सालगिरह पर हार्दिक शुभकामनाएँ"/>
<Aman image={img2} name="Mother & Daughter" pgraf="मौसा और मौसी जी  हमें ईश्वर का वरदान है,
माता पिता के जैसे वो लगते खास है 
 
मौसी का आंचल ठंडी छांव के जैसा
मौसा जी का हर जगह साथ है रहता
 
मौसा मौसी का प्यार अनमोल है होता
इसका घर जैसे एक तीर्थ स्थल है होता,
 
जैसे हम रहते है अपने माता पिता के घर में,
वैसे ही प्रेम को पाते है मौसा मौसी के द्वारा
मौसाजी और मौसी जी को विवाह वर्षगांठ की हार्दिक शुभकामनायें"/>
<Aman image={img3} name="Festival Movement" pgraf="आपकी जोड़ी रब ने है
कुछ ऐसी बनाई
साथ रहे आप दोनों हमेशा
हर दिल दे रहा बधाई
मौसाजी और मौसीजी को
शादी की सालगिरह शुभकामनाएँ" />
<Aman image={img4} name="JAI SRI KRISHNA" pgraf="जय श्री श्याम बोलने से मन को शांति मिलती हैं... जयश्री श्याम बोलने से तन शक्ति मिलती हैं... जय श्री श्याम बोलने से पापो से मुक्ति मिलती हैं. और निरंतर जय श्री श्याम बोलने से भक्ति मिलती हैं.."/>
<br/>
< Link to={'/'}><button className='button'>Go Back</button></Link> 
        </>
    )
  }
  export default img