import React from 'react';
import { Figure } from 'react-bootstrap';

function ProfileData({image, title}) {
  return (
    <div className="profile-info">
      <Figure.Image src={require(`../images/${image}`)} alt={title} className="profile-figure"/>
      <h3 className="add-info left check-text">{title}</h3>
    </div>
  )
}

export default ProfileData;
