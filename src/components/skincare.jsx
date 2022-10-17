import React from "react";
import '../styles/skincare.css';


export default function blog()
{
    return(
      <div>
        <img src="https://media6.ppl-media.com/mediafiles/blogs/Skin_Whitening_Foods_ccfb54c631.jpeg" className="mainimg" ></img>
        <br></br>
   
        <div className="para">
     
        <h2 ><strong>Skin Whitening Foods to Eat</strong></h2>
        <p>Be it summers or winters, healthy-looking skin and natural glow is all we strive for. In other words, healthy skin means bright skin. 
            We use expensive serums and creams, but they have the ability to improve our skin texture and provide us with even-toned skin.&nbsp;</p>
            <p>Serums help in making skin firm and improve its elasticity. The creams are also helpful in reducing the appearance of spots, scars, patches, pigmentation, and many other signs of aging. But there are many foods that work amazingly just as these serums and creams. May be much better than them!&nbsp;</p>
            <p>Serums help in making skin firm and improve its elasticity. The creams are also helpful in reducing the appearance of spots, scars, patches, pigmentation, and many other signs of aging. But there are many foods that work amazingly just as these serums and creams. May be much better than them!&nbsp;</p>
            
            <Subcontent></Subcontent>
           
      </div>
            </div>  
    );
}

class Subcontent extends React.Component{
  render()
  {
    return(
      <React.Fragment>
           <h3 className="text-dark">1.&nbsp;Strawberries</h3>
            <img src="https://media6.ppl-media.com/mediafiles/blogs/Strawberry_Benefits_60efb7dd8a.jpg" className="sub" alt="strawberry" />
            <figcaption className="fig"><strong>Strawberries</strong></figcaption>
            <p className="text-dark">Strawberries are the ultimate nutrient-rich skin-lightening food. They contain Vitamin C which is an excellent ingredient for skin lightening. Vitamin C boosts collagen production in the skin that&nbsp;evens out skin tone and provides you with a brighter complexion. It improves skin elasticity and firmness while delaying early signs of aging. You can make a strawberry face pack. All you need to do is mash the strawberries and add cocoa powder and
            honey. Blend it and apply it to the face for a whiter complexion.</p>
            
            <h3 className="text-dark">2.&nbsp;Eggs</h3>
            <img src="https://media6.ppl-media.com/mediafiles/blogs/how_to_make_perfect_hardboiled_eggs_9625ca7e9d.jpg" className="sub" alt="eggs" />
            <figcaption className="fig"><strong>Eggs</strong></figcaption>
            <p className="text-dark">Eating an egg daily is good. They contain amino acids and antioxidants that protect your skin from harmful UV rays. Eggs also have the ability to produce new skin cells. Well, digressing from eating, you can also apply egg on your face for skin brightening.
             Just beat an egg until it becomes white and foamy. Add one teaspoon of lemon juice and one teaspoon of honey. Mix it and apply it to your face. Leave it for 15 minutes and then wash it off.&nbsp;</p>
      
             <h3 className="text-dark">3.&nbsp;Lemon</h3>
            <img src="	https://media6.ppl-media.com/mediafiles/blogs/lemons_2675c3665a.jpg" className="sub" alt="Lemon" />
            <figcaption className="fig"><strong>Lemon</strong></figcaption>
            <p className="text-dark">Eating an egg daily is good. They contain amino acids and antioxidants that protect your skin from harmful UV rays. Eggs also have the ability to produce new skin cells. Well, digressing from eating, you can also apply egg on your face for skin brightening.
             Just beat an egg until it becomes white and foamy. Add one teaspoon of lemon juice and one teaspoon of honey. Mix it and apply it to your face. Leave it for 15 minutes and then wash it off.&nbsp;</p>

             <h3 className="text-dark">4.&nbsp;Tomatoes</h3>
            <img src="https://media6.ppl-media.com/mediafiles/blogs/tomatoes_13ba940a58.jpg" className="sub" alt="Tomatoes" />
            <figcaption className="fig"><strong>Tomatoes</strong></figcaption>
            <p className="text-dark">Make your skin bright, light, and tight with tomatoes! By just eating this red fruit, you can get brightened skin tone. 
            It produces collagen in the skin that provides natural radiance to your skin. It gives your skin a natural glow and provides you with even-toned skin. All you need to do is squeeze one tomato and add a small amount of 
            turmeric powder along with sandalwood powder. Make a paste and apply it to your face. Let it stay until it dries. Wash your face and see the difference!&nbsp; &nbsp;</p>
      
            </React.Fragment>
    )
  }
}
