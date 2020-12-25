import React from 'react';

import './Card.css';

const Card = (props) => {

  const [isLiked, setIsLiked] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);

  const like = () => {
    setIsLiked(!isLiked);
  };

  const deleteCard = (evt) => {
    evt.stopPropagation();
    setIsDeleted(true);
  };

  const urlImageForPopup = () => {
    props.setImageUrl(props.url);
    props.setVarietyOfPopup('image');
    props.setPopupIsOpened(true);
  };

  return (
    !isDeleted && <div className="card">
      <div className="card__image" style={ { backgroundImage: `url(${props.url})` } } onClick={urlImageForPopup}>
        <button className="card__delete-icon" onClick={deleteCard}></button>
      </div>
      <div className="card__description">
        <p className="card__name">{props.name}</p>
        <button className={`card__like-icon ${isLiked ? 'card__like-icon_liked' : ''}`} onClick={like}></button>
      </div>
    </div>
  )
};

export default Card;