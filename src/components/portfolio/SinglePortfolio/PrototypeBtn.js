"use client";
import { useState } from "react";
import { useDevice } from "../../../../helpers/useDevice";
import { Modal } from "react-bootstrap";
export default function PrototypeBtn({ portfolioItem }) {
  const { IsMob } = useDevice();
  const [showModal, setShowModal] = useState(false);

  const handlePreviewClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const link = portfolioItem?.Prototype;
  const linkNew = portfolioItem?.PrototypeLink;
  const textColor = "var(--text3)";

  return (
    <div>
      <div
        className="d-flex align-items-center py-4 px-4 my-4"
        style={{
          background: "var(--primary)",
          flexDirection: IsMob ? "column" : "row",
        }}
      >
        <div>
          <h3 style={{ color: textColor }}>Experience the Live Action!</h3>
          <p style={{ margin: 0, color: textColor }}>
            Explore the prototype to discover the essence of our design.
            Interact seamlessly with our product's functionality and intuitive
            interface.
          </p>
        </div>
        <div
          className="py-2 px-4"
          style={{ cursor: "pointer" }}
          onClick={() => handlePreviewClick()}
        >
          <p
            style={{
              margin: 0,
              color: textColor,
              fontWeight: 600,
              textDecoration: "underline",
              whiteSpace: "nowrap",
              textUnderlineOffset: 4,
            }}
          >
            View Prototype
          </p>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="modalPrototype"
        contentClassName="modalContent"
        style={{
          background: "rgba(0,0,0,0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999999,
        }}
      >
        <div
          className="d-flex gap-4 container"
          style={{ flexDirection: IsMob ? "column" : "row" }}
        >
          <div className="col-md-2 ">{""}</div>
          <div className="col-md-8 justify-content-center align-items-center d-flex">
            <iframe src={link} style={{ height: "90vh", width: "100%"}}></iframe>
          </div>
          <div className="col-md-2 d-flex flex-column gap-3">
            <a className="btn-text" href={linkNew} target="_blank" style={{ display: IsMob?"none":""}}>
              View in Full Screen{" "}
              <i
                className="fi fi-br-arrow-up-right"
                style={{ fontSize: "small" }}
              ></i>
            </a>
            <a className="btn-text" href={linkNew} target="_blank" style={{ display: IsMob?"":"none"}}>
              View in App{" "}
              <i
                className="fi fi-br-arrow-up-right"
                style={{ fontSize: "small" }}
              ></i>
            </a>
            <a className="btn-text mb-4" onClick={handleCloseModal} style={{cursor: "pointer"}} target="_blank">
              Close Prototype{" "}
              <i
                className="fi fi-br-cross"
                style={{ fontSize: "small" }}
              ></i>
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
}
