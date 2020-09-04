import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FusionMedContext = createContext();

const ProviderFusionMed = ({ children }) => {
  const [track, setTrack] = useState(false);

  const context = {
    track,
    setTrack,
  };

  return <FusionMedContext.Provider value={context}>{children}</FusionMedContext.Provider>;
};

ProviderFusionMed.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

export default ProviderFusionMed;
