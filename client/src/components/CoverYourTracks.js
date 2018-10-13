import React from "react";

const CoverTracks = props => {
  return (
    <div>
      <div>
        <h1 className="title"> Cover your tracks </h1>
        <h2 className="sub-title">How to keep your use of this page private</h2>
        <h3>
          To make sure another person can't see you used this site, you need to
          <p>
            Delete cookies - a cookie is information your computer uses to
            remember information about you
          </p>
          <p>
            Clear your browsing history - this is the record of all the websites
            you've visited
          </p>
          <p>
            The steps are different depending on which browser you are using.
            Click on the links below to follow the steps for your browser.
          </p>
          {/* link to site with instructions for different browsers */}
        </h3>
      </div>
    </div>
  );
};
export default CoverTracks;
