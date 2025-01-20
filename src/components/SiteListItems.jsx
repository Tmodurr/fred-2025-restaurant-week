import React from 'react';
import ZoomToButton from '@/components/atoms/ZoomToButton';
import './SiteListItems.css';

const SiteListItems = ({ data }) => {
  return (
    <div className="site-list-container">
      {data.features.map((feature, index) => (
        <div key={index} className="site-card">
          <h3 className="site-title">{feature.properties.name}</h3>
          <div className="site-tags">
            {feature.properties.tags?.map((tag, idx) => (
              <span key={idx} className="site-chip">
                {tag}
              </span>
            ))}
          </div>
          <p className="site-info">
            {feature.properties.address} | {feature.properties.phone}
          </p>
          <div className="location__container">
            <a
              href={feature.properties.website}
              className="site-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
            <ZoomToButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SiteListItems;
