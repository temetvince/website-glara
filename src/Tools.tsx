import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Tools = () => {
   return (
      <main className="zeroed">
         <Header />

         <div className="container bg-primary">
            <a
               className="weatherwidget-io"
               href="https://forecast7.com/en/36d59n94d77/grove/?unit=us"
               data-label_1="Grand Lake"
               data-label_2="Grove, OK"
               data-theme="original"
            >
               Grand Lake Grove, OK
            </a>
         </div>

         <div className="flex bg-secondary tools-middle centered">
            <div className="flex bg-secondary tools-each centered">
               <div className="flex flex-column container tools-each">
                  <div className="container centered">
                     <iframe
                        className="duckduckgo container"
                        src="https://duckduckgo.com/search.html?width=250&prefill=Search DuckDuckGo&focus=yes"
                     ></iframe>
                  </div>

                  <div className="container bg-primary centered">
                     <a
                        href="https://www.hamqsl.com/solar.html"
                        title="Click to add Solar-Terrestrial Data to your website!"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <img
                           className="test"
                           src="https://www.hamqsl.com/solarvhf.php"
                           alt="n0nbh Solar-Terrestrial Data"
                        />
                     </a>
                  </div>
               </div>

               <div className="flex container">
                  <div className="container bg-primary centered">
                     <a
                        href="https://www.lightningmaps.org/#m=oss;t=1;s=0;o=0;b=4.05;ts=0;z=5;y=37.8228;x=-93.7793;d=2;dl=2;dc=0;tc=0;tr=1;"
                        title="LightningMaps.org"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <img
                           className="lightning-map"
                           src="//images.lightningmaps.org/blitzortung/america/index.php?map=usa"
                           alt="A map of lightning strikes in the USA."
                        />
                     </a>
                  </div>
               </div>
            </div>
            <div className="flex tools-each pad-bottom">
               <div className="container bg-primary centered">
                  <a
                     href="https://www.sws.bom.gov.au/Category/HF%20Systems/Online%20Tools/Prediction%20Tools/HF/HF.php?CatID=6&SecID=7&SecName=Online%20Tools&SubSecID=1&SubSecName=Prediction%20Tools&LinkName=HF"
                     title="HF Prediction Tools"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img
                        className="global-map"
                        src="https://www.sws.bom.gov.au/Images/HF%20Systems/Global%20HF/Ionospheric%20Map/WorldIMap.gif"
                        alt="Global Real Time Ionospheric Map"
                     />
                  </a>
               </div>

               <div className="container bg-primary centered">
                  <a
                     href="https://www.sws.bom.gov.au/Category/HF%20Systems/Online%20Tools/Prediction%20Tools/HF/HF.php?CatID=6&SecID=7&SecName=Online%20Tools&SubSecID=1&SubSecName=Prediction%20Tools&LinkName=HF"
                     title="HF Prediction Tools"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img
                        className="global-map"
                        src="https://www.sws.bom.gov.au/Images/HF%20Systems/Global%20HF/T%20Index%20Map/WorldTIndexMap.gif"
                        alt="Global Real Time Ionospheric T Index Map"
                     />
                  </a>
               </div>
            </div>
         </div>

         <Footer />
      </main>
   );
};

export default Tools;
