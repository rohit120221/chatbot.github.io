import React, { useState } from "react";
import "./FAQ.css";
import handslogo from "./handslogo.png";

function FAQ() {
    const [active, setActive] = useState();
  const [show, setShow] = useState(false);
  return (
    <div className="HomeRedirect">
      <h1 >                 <br></br> <br></br>
Hi There!           <br></br> <br></br>
</h1>
      <div className="GreenhandLogo">
       
      <div className="homeFlavour">
        <u> You may have many questions about recycling and why we should do it.Below are some frequently asked questions that we have answered for you to improve your understanding of why we should recycle. </u> <br></br> <br></br>
        <br></br> If you still feel you have any extra questions, please don't hesitate to contact us on the contact us page!
        <br></br> <br></br>
      </div>
    </div>
    <div>
        <button className="toggleshowbutton" onClick={() => setShow(!show)}>
          Click here for FAQ's about recycling 
        </button>
      </div>
      <div>
        {show ? (
          <div>
            <button
              className="locationbutton"
              onClick={() => setActive("Is recycling good for the environment?")}
            >
              Is recycling beneficial for the environment?
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("How does recycling save energy?")}
            >
              How does recycling save energy?
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("Is recycling the best management option? What other options are there?")}
            >
              Is recycling the best management option? What other options are there?
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("Why is it important to only put items that can be recycled in the recycling bin?")}
            >
              Why is it important to only put items that can be recycled in the recycling bin?
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("How does recycling overall save energy?")}
            >
             How does recycling overall save energy?
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("What should I never put in my recycling bin(s)?")}
            >
              What should I never put in my recycling bin(s)?
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("Does recycling mean more trouble?")}
            >
              Does recycling mean more trouble?
            </button>
            <button
              className="locationbutton"
              onClick={() => setActive("What is composting?")}
            >
              What is composting? Is it truly beneficial for the environment? How do I do it?
            </button>
          </div>
        ) : null}
      </div>
    
      {active === "Is recycling good for the environment?" && (
        <h1> Yes, it is mindblowingly good for the environment. We finally have a way to stop throwing waste to the landfills and instead put them somewhere where it makes it possible for us to reuse this waste.  </h1>
      )}
      {active === "How does recycling save energy?" && (
        <h1>  When we make new products out of unused materials, we expend energy to extract and process those materials. This includes burning fossil fuels. However, if we manufacture products using recycled materials, we reduce the need for virgin materials and save the energy required to extract and process them.</h1>
        )}
      {active === "Is recycling the best management option? What other options are there?" && (
        <h1>  The best way to minimize waste, and the best environmental way, is to not make the wast in the first place. This would mean following specific rules about what to do with the waste and how to disacard of it safely.</h1>
        )}
      {active === "Why is it important to only put items that can be recycled in the recycling bin?" && (
        <h1> If we put something in the recycling bins that is not allowed, the machinery that deals with the recyclable waste are at risk of being compromised. If this happens, the cost of fixing this machinery would be very high. Also, workers would have to spend more time seperating the waste that cannot be recycling.  </h1>
        )}
      {active === "How does recycling overall save energy?" && (
        <h1>  Energy is expanded in order to extract those materials. Making these products from these recycled materials needs much low energy than would be needed for creating from raw items. </h1>
        )}
      {active === "What should I never put in my recycling bin(s)?" && (
        <h1> Garden hoses        <br></br> <br></br>
        Sewing needles        <br></br> <br></br>
        Lightbulbs,         <br></br> <br></br>
        Food,         <br></br> <br></br>
        Propane tanks,        <br></br> <br></br>
        Ceramics,        <br></br> <br></br>
        Bubble wraps,         <br></br> <br></br>
        CD's,         <br></br> <br></br>
        Containers with flammable residue,        <br></br> <br></br>
        Aerosol cans with spray left in them,         <br></br> <br></br>
        Clothing,       <br></br> <br></br>
        Toys         <br></br> <br></br>
        </h1>
        )}
      {active === "Does recycling mean more trouble?" && (
        <h1> Recycling has been proven to be worth every penny. It is better for the environment than sending any garbage that we have straight to the landfill where it is left to rot.  </h1>
        )}
      {active === "What is composting?" && (
        <h1> Composting is the process of when we get organic material such as leaves and let the decompose properly. It improves soil structure with proteins. It adds nitrogen and carbon to organic material to crete very good soil that is best for fertilizer.
          If it can be used as a natural fertilizer, it reduces the need for using highly concentrated chemical fertizilers that cause more harm than good. This would mean that we have a much more healthier planet! 
        </h1>
        )}
    </div>
    
  );
}

export default FAQ;