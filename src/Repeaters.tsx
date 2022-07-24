import React from "react";

import Header from "./Header";
import Logo from "./Logo";
import Footer from "./Footer";

const Repeaters = () => {
   return (
      <main className="zeroed">
         <Header />

         <div className="repeaters-top-container grid">
            <div className="container grid centered">
               <Logo borderWidth="5px" />
            </div>

            <div className="container grid centered">
               <h1 className="container text-center">Come chat with us!</h1>
               <h3 className="container text-center zeroed">
                  Monthly Meeting/Testing
               </h3>
               <h4 className="container text-center zeroed">
                  Grove American Legion Post 178
               </h4>
               <h4 className="container text-center zeroed">
                  Every first Monday at 7pm
               </h4>
            </div>
         </div>

         <div className="container grid bg-secondary">
            <h2 className="container primary repeaters-header">
               Fairland Repeater
            </h2>
            <div className="container flex">
               <ul className="container primary flex-one-third">
                  <li>
                     <h3 className="primary">W0GMM</h3>
                  </li>
                  <li>147.285 MHz</li>
                  <li>Positive Offset</li>
                  <li>CTCSS Tone 110.9</li>
               </ul>
               <p className="container primary centered text-justify flex-two-third">
                  Our busiest repeater! Nets at 7 PM every Monday night except
                  the first Monday of the month. Even though it is Fusion (not
                  internet) enabled, we generally remain analog to avoid
                  spamming listeners with digital noise.
               </p>
            </div>
         </div>

         <div className="container grid bg-primary text-right">
            <h2 className="container secondary repeaters-header">
               Grove Repeater
            </h2>
            <div className="container flex flex-row-reverse">
               <ul className="container secondary flex-one-third">
                  <li>
                     <h3 className="secondary">K5BIV</h3>
                  </li>
                  <li>442.625 MHz</li>
                  <li>Positive Offset</li>
                  <li>DCS Tone 25</li>
               </ul>
               <p className="container secondary centered text-justify flex-two-third">
                  Located on the top of the water tower behind Cherokee Casino.
                  Nets immediately following the Fairland net every Monday night
                  except the first Monday of the month.
               </p>
            </div>
         </div>

         <div className="container grid bg-secondary">
            <h2 className="container primary repeaters-header">
               American Legion Repeater
            </h2>
            <div className="container flex">
               <ul className="container primary flex-one-third">
                  <li>
                     <h3 className="primary">KG5RVL</h3>
                  </li>
                  <li>224.880 MHz</li>
                  <li>Negative Offset</li>
                  <li>CTCSS Tone 100.0</li>
               </ul>
               <p className="container primary centered text-justify flex-two-third">
                  Our 220 AllStar capable repeater! In the case of disaster,
                  AllStar can be disabled and the repeater becomes our Emergency
                  Management repeater.
               </p>
            </div>
         </div>

         <div className="container grid bg-primary text-right">
            <h2 className="container secondary repeaters-header">
               Elk River Basin Repeater
            </h2>
            <div className="container flex flex-row-reverse">
               <ul className="container secondary flex-one-third">
                  <li>
                     <h3 className="secondary">WN5J</h3>
                  </li>
                  <li>443.100 MHz</li>
                  <li>Positive Offset</li>
                  <li>CTCSS Tone 100.0</li>
               </ul>
               <p className="container secondary centered text-justify flex-two-third">
                  Located near Cowskin Bridge on HWY 10. Generally used by club
                  members who live in basin area. Anyone is welcome anytime!
               </p>
            </div>
         </div>

         <div className="container grid bg-secondary">
            <h2 className="container primary repeaters-header">
               GLARA Simplex
            </h2>
            <div className="container flex">
               <ul className="container primary flex-one-third">
                  <li>146.550 MHz</li>
               </ul>
               <p className="container primary centered text-justify flex-two-third">
                  Monitored by local club members.
               </p>
            </div>
         </div>

         <div className="footer">
            <Footer />
         </div>
      </main>
   );
};

export default Repeaters;
