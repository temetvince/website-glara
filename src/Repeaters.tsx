import React from "react";

import Header from "./Header";
import Logo from "./Logo";
import Footer from "./Footer";
import Repeater from "./Repeater";

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

         <Repeater
            name="Fairland Repeater"
            frequency="147.285 MHz"
            callsign="WOGMM"
            offset="+600 kHz Offset"
            tone="110.9 Hz CTCSS Tone"
            description="Our busiest repeater. The Pelican Net is held at 7 PM every Monday night except
                  the first Monday of the month, where we meet in person at the American Legion in Grove.
                  Fusion/C4FM capable but not Wires-X. Calling CQ on ANALOG will be your best bet for a contact."
         />

         <Repeater
            name="Grove Repeater"
            frequency="442.625 MHz"
            callsign="W5BIV"
            offset="+5 MHz Offset"
            tone="DCS Tone 25"
            description="Our Fusion/C4FM repeater. Nets are held at the conclusion of the Pelican Net;
            please refer to the Fairland Repeater description for details.
            Fusion/C4FM capable with Wires-X coming soon. Calling CQ on DIGITAL will be your best bet for a contact."
            alt={true}
         />

         <Repeater
            name="American Legion Repeater"
            frequency="224.880 MHz"
            callsign="KG5RVL"
            offset="-1.6 MHz Offset"
            tone="100 Hz CTCSS Tone"
            description="Our AllStar repeater. The installation of AllStar is in progress, but the repeater is operable."
         />

         <Repeater
            name="Elk River Basin Repeater"
            frequency="443.100 MHz"
            callsign="WN5J"
            offset="5 MHz Offset"
            tone="100 Hz CTCSS Tone"
            description="Located near Cowskin Bridge on HWY 10. Generally used by club
                  members who live in basin area. However, anyone is welcome anytime!"
            alt={true}
         />

         <Repeater
            name="Grand Lake Simplex Repeater"
            frequency="146.430 MHz"
            callsign="KI5SPL"
            description="Located in Cayuga. Fusion/C4FM capable with Wires-X.
            Feel free to change rooms, just put it back where it was before you go.
            The node often remains connected to rooms with large audiences, so please be respectful!"
         />

         <Repeater
            name="GLARA Simplex"
            frequency="146.550 MHz"
            description="Monitored by Grand Lake Amateur Radio Association members."
            alt={true}
         />

         <div className="footer">
            <Footer />
         </div>
      </main>
   );
};

export default Repeaters;
