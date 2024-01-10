import React from "react";

const DonationForm = () => {
  return (
    <div>
      <iframe
        id="JotFormIFrame-233554101186450"
        title="Online Donation Form"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowtransparency="true"
        allowFullScreen="true"
        allow="geolocation; microphone; camera, screenshot"
        src="https://form.jotform.com/233554101186450"
        frameBorder="1"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "1200px",
          border: "none",
        }}
        scrolling="yes"
      />
    </div>
  );
};

export default DonationForm;
