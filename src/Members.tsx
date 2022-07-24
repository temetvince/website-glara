import React from "react";
import Header from "./Header";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Carousel } from "react-carousel-minimal";
import Images from "./Images";
import Footer from "./Footer";
import MemberList from "./MemberList";
import arrayShuffle from "array-shuffle";
import Member from "./Member";

const Members = () => {
   return (
      <main className="zeroed">
         <Header />

        <h1 className="bg-primary text-center container text-lg secondary">
          Grand Lake Amateur Radio Association
        </h1>

         <div className="grid bg-primary centered">
           <div className="bg-secondary container">
            <Carousel
               data={arrayShuffle(Images)}
               time={4000}
               width="100%"
               height="50vh"
               radius="0px"
               slideNumber={false}
               captionPosition="bottom"
               automatic={true}
               dots={false}
               pauseIconColor="white"
               pauseIconSize="40px"
               slideBackgroundColor="darkgrey"
               slideImageFit="cover"
               thumbnails={false}
               thumbnailWidth="100px"
               showNavBtn={false}
               style={{
                  textAlign: "center",
                  margin: "auto",
               }}
            />
           </div>
         </div>

        <div className={"flex-column centered border-secondary"}>
        {
          MemberList().sort((a, b) => {
            return a.last.at(0).toUpperCase() > b.last.at(0).toUpperCase() ? 1 : -1
          }).map((member, index) => {
            if (index % 2) {
              return (
                <Member key={index} first={member.first} last={member.last} call={member.call.toUpperCase()}/>
              )
            }
            else {
              return (
                <Member key={index} alt={true} first={member.first} last={member.last} call={member.call.toUpperCase()}/>
              )
            }
          })
        }
        </div>

         <Footer />
      </main>
   );
};

export default Members;
