"use client";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDevice } from "../../../helpers/useDevice";
import { Modal } from "react-bootstrap";
export default function ImageSlider({ portfolioItem }) {
  const { IsMob } = useDevice();
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleThumbnailClick = (index) => {
    setSelectedSlide(index);
  };
  const handlePreviewClick = (index) => {
    setShowModal(true);
  };
  const handleSlideChange = (index) => {
    setSelectedSlide(index);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const textColorDark = "var(--text3)";
  return (
    <div className="mb-4">
      <div
        className="portfolioSlideImage  justify-content-center align-items-center d-flex"
        style={{
          borderRadius: IsMob ? 10 : 20,
          overflow: "clip",
        }}
      >
        <Carousel
          showThumbs={false}
          selectedItem={selectedSlide}
          onChange={handleSlideChange}
          showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-arrow prev"
              >
                <i
                  class="fi fi-br-arrow-small-left"
                  style={{ color: textColorDark, margin: 0 }}
                ></i>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-arrow next"
              >
                <i
                  class="fi fi-br-arrow-small-right"
                  style={{ color: textColorDark, margin: 0 }}
                ></i>
              </button>
            )
          }
        >
          {portfolioItem?.map((image, index) => (
            <div
              key={index}
              onClick={() => handlePreviewClick(index)}
              className=" justify-content-center align-items-center"
              style={{ margin: "auto" }}
            >
              <img
                src={image}
                alt={`Image ${index}`}
                style={{
                  objectFit: IsMob ? "cover" : "contain",
                  height: IsMob ? 200 : 480,
                  background: "var(--text)",
                  cursor: "pointer",
                  color: textColorDark,
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div
        className="d-flex flex-row gap-2"
        style={{
          marginTop: "20px",
          width: IsMob ? "300px" : "",
          overflowX: "scroll",
        }}
      >
        {portfolioItem?.map((image, index) => (
          <div
            key={index}
            style={{
              width: "fit-content",
              cursor: "pointer",
              padding: 5,
              borderRadius: 10,
              overflow: "clip",
              border:
                index === selectedSlide ? "2px solid var(--dark)" : "none",
            }}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              style={{
                width: 80,
                objectFit: "cover",
                height: 80,
                borderRadius: 5,
                color: textColorDark,
              }}
            />
          </div>
        ))}
      </div>

      {/* Bootstrap Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="modalSize"
        style={{
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999999,
        }}
      >
        <img
          src={portfolioItem[selectedSlide]}
          alt={`Image ${selectedSlide}`}
          style={{
            maxHeight: "90vh",
            Width: "100vw",
            objectFit: "cover",
            background: "none",
            color: textColorDark,
          }}
        />
      </Modal>
    </div>
  );
}
