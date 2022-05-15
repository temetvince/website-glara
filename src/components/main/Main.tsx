import * as React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Carousel } from "react-carousel-minimal";
import "./Main.css";
import Images from "../../Images";
import Header from "../header/Header";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";

const Main = () => {
   return (
      <main className="main grid border-secondary zeroed">
         <Header />

         <div className="top-container grid">
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
            <h2 className="container primary">Fairland Repeater</h2>
            <div className="container flex">
               <ul className="container primary flex-one-third">
                  <li>
                     <h3 className="primary">KG5RLV</h3>
                  </li>
                  <li>147.285 MHz</li>
                  <li>Positive Offset</li>
                  <li>PL Tone 110.9</li>
               </ul>
               <text className="container primary centered text-justify flex-two-third">
                  Our busiest repeater! Nets at 7 PM every Monday night except
                  the first Monday of the month. Even though it is Fusion (not
                  internet) enabled, we generally remain analog to avoid
                  spamming listeners with digital noise.
               </text>
            </div>
         </div>

         <div className="container grid bg-primary text-right">
            <h2 className="container secondary">Grove Repeater</h2>
            <div className="container flex flex-row-reverse">
               <ul className="container secondary flex-one-third">
                  <li>
                     <h3 className="secondary">KG5SW2</h3>
                  </li>
                  <li>448.250 MHz</li>
                  <li>Positive Offset</li>
                  <li>DCS Tone 12</li>
               </ul>
               <text className="container secondary centered text-justify flex-two-third">
                  Located on the top of the water tower behind Cherokee Casino.
                  Nets immediately following the Fairland net every Monday night
                  except the first Monday of the month.
               </text>
            </div>
         </div>

         <div className="container grid bg-secondary">
            <h2 className="container primary">American Legion Repeater</h2>
            <div className="container flex">
               <ul className="container primary flex-one-third">
                  <li>
                     <h3 className="primary">KI5SQO</h3>
                  </li>
                  <li>220.850 MHz</li>
                  <li>Positive Offset</li>
                  <li>DCS Tone 12</li>
               </ul>
               <text className="container primary centered text-justify flex-two-third">
                  Our 220 AllStar capable repeater! In the case of disaster,
                  AllStar can be disabled and the repeater becomes our Emergency
                  Management repeater.
               </text>
            </div>
         </div>

         <div className="container grid bg-primary text-right">
            <h2 className="container secondary">Elk River Basin Repeater</h2>
            <div className="container flex flex-row-reverse">
               <ul className="container secondary flex-one-third">
                  <li>
                     <h3 className="secondary">KV7Q</h3>
                  </li>
                  <li>448.250 MHz</li>
                  <li>Positive Offset</li>
                  <li>DCS Tone 12</li>
               </ul>
               <text className="container secondary centered text-justify flex-two-third">
                  Located near Cowskin Bridge on HWY 10. Generally used by club
                  members who live in basin area. Anyone is welcome anytime!
               </text>
            </div>
         </div>

         <div className="container grid bg-secondary">
            <h2 className="container primary">GLARA Simplex</h2>
            <div className="container flex">
               <ul className="container primary flex-one-third">
                  <li>448.250 MHz</li>
               </ul>
               <text className="container primary centered text-justify flex-two-third">
                  Monitored by local club members.
               </text>
            </div>
         </div>

         <div className="footer">
            <Footer />
         </div>
      </main>
   );
};

export default Main;
