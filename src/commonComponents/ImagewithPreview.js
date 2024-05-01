"use client";
import { useState } from "react";
import { useDevice } from "../../helpers/useDevice";
import { Modal } from "react-bootstrap";
export default function ImagewithPreview({ width, height, alt, src }) {
  const { IsMob } = useDevice();
  const [showModal, setShowModal] = useState(false);

  const handlePreviewClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mb-4">
      <div
        className="portfolioSlideImage"
        style={{
          borderRadius: IsMob ? 10 : 20,
          overflow: "clip",
        }}
      >
        <div onClick={() => handlePreviewClick()}>
              <img
                src={src}
                alt={alt}
                width={width}
                style={{
                  objectFit: IsMob ? "cover" : "contain",
                  height: IsMob ? 180 : height,
                  cursor: "pointer",
                  color: "var(--dark)"

                }}
              />
            </div>
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
          src={src}
          alt={alt}
          style={{
            maxHeight: "90vh",
            Width: "100vw",
            objectFit: "cover",
            background: "none",
            color: "var(--dark)"
          }}
        />
      </Modal>
    </div>
  );
}
