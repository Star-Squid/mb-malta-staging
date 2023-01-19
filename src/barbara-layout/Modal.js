import * as React from "react";

export default function Modal() {
  return (
    <>
      <div className="modal modal-closed">
        <p>
          <button className="modal-close" aria-label="close">
            ✖
          </button>
        </p>
        <img id="modal-img" src="thumbs/clock.webp" alt="website screenshot" />
      </div>

      <div className="modal-overlay reveal"></div>
    </>
  );
}
