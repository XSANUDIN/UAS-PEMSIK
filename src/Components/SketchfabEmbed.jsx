import React from 'react';

const SketchfabEmbed = () => {
  return (
    <div className="relative pb-[56.25%] overflow-hidden">
      <div className="sketchfab-embed-wrapper">
        <iframe
          title="Merapi Merbabu"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://sketchfab.com/models/738c2dcfbcd04384ab77495996f818b2/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark"
        />
      </div>
    </div>
  );
};

export default SketchfabEmbed;
