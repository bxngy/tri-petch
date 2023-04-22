import { useEffect } from "react";
import { H1, ContentLayout } from "../component";
import { MocupData } from "../utils";

export default function Home() {
  // var myIndex = 0;
  // function carousel() {
  //   var i;
  //   var x = document.getElementsByClassName("mySlides");
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";
  //   }
  //   myIndex++;
  //   if (myIndex > x.length) {
  //     myIndex = 1;
  //   }
  //   x[myIndex - 1].style.display = "block";
  //   setTimeout(carousel, 2000); // Change image every 2 seconds
  // }
  // useEffect(() => {
  //   carousel();
  //}, []);
  return (
    <>
      <div className="bg-white  h-[100vh] w-[100vw]	overflowX-hidden">
        {MocupData.map((element, index) => {
          const indexJustify = index % 2 == 0 ? "end" : "start";
          return (
            <div className="relative">
              <div
                className={`d-flex ${
                  index > 0 && "mt-lg-52 mt-20"
                } justify-content-center`}
              >
                <div
                  className={`col-lg-5 col-md-5 none-xs mt-4 order-${
                    indexJustify == "end" ? "1 " : "2 "
                  }`}
                ></div>
                <div
                  className={`col-lg-5 col-md-5 col-12 mt-4 order-${
                    indexJustify !== "end" ? "1" : "2"
                  }`}
                >
                  <H1>{element.category}</H1>
                </div>
              </div>

              <div
                className={`d-flex justify-content-${
                  indexJustify == "end" ? "start" : "end"
                }`}
              >
                <div
                  className={`col-lg-6 ${
                    indexJustify == "end" ? "img-style" : " img-style-r  "
                  }`}
                >
                  <div
                    className={`d-flex justify-content-lg-center justify-content-${
                      indexJustify == "end" ? "start" : "end"
                    }`}
                  >
                    <img
                      className="col-lg-12 col-md-10 col-12 img-max-height"
                      width="100%"
                      src={element.image}
                    />
                  </div>
                </div>
              </div>

              <ContentLayout
                ListContent={element.listContent}
                indexJustify={indexJustify == "end"}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
