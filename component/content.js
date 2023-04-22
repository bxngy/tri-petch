import Slider from "react-slick";
const H1 = ({ children }) => {
  return <div className="custom-h1 text-center text-md-left">{children}</div>;
};

const formatNumberFormIndex = (index) => {
  const x = index + 1;
  const number = x < 10 ? "0" + x : x;
  return number;
};
const Number = ({ index, noChangeLineColor }) => {
  return (
    <div
      className="col-lg-2 col-xl-1 col-md-2 text-center relative"
      style={{ maxWidth: 60 }}
    >
      <div>{formatNumberFormIndex(index)}</div>
      <div
        style={{
          background: !noChangeLineColor
            ? index < 2
              ? "#603EBE"
              : "#ffffff"
            : "#603EBE",
          height: 5,
          borderRadius: "2.5px",
        }}
      />
    </div>
  );
};

const Constent = ({ element, index, noChangeLineColor }) => {
  return (
    <div className="my-5 ">
      <div className="d-flex  align-items-center">
        <Number index={index} noChangeLineColor={noChangeLineColor} />

        <div
          style={{
            color: "#c2c2c2",
            fontSize: 36,
            fontFamily: "Roboto",
          }}
        >
          {element.topic}
        </div>
      </div>
      <div className="d-flex mt-4">
        <div
          className="col-10"
          style={{
            fontFamily: "Roboto",
            color: !noChangeLineColor
              ? index < 2
                ? "#000000"
                : "#ffffff"
              : "#000000",
          }}
        >
          {element.desc}
        </div>
      </div>
    </div>
  );
};

const ContentLayout = ({ ListContent = [], indexJustify }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="d-md-flex  d-none ">
        <div className="col-12 p-0">
          {ListContent.map((element, index) => {
            return (
              <>
                <div
                  className={`d-md-flex  d-none justify-content-md-center`}
                  style={{ backgroundColor: element.background }}
                >
                  <div
                    className={`col-5 order-${
                      indexJustify ? "1 col-md-6 " : "2"
                    }`}
                  ></div>
                  <div
                    className={`col-5 order-${
                      !indexJustify ? "1" : "2 col-md-6 "
                    }`}
                  >
                    <Constent element={element} index={index} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="d-md-none d-flex">
        <div className="col-12 p-0">
          <Slider {...settings}>
            {ListContent.map((element, index) => {
              return (
                <>
                  <div className="d-md-none d-flex">
                    <div className="col-12">
                      <Constent
                        element={element}
                        index={index}
                        noChangeLineColor
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export { H1, ContentLayout };
