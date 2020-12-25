import './Profile.css';

const Profile = (props) => {

  const openAddImagePopup = () => {
    props.setVarietyOfPopup('add');
    props.setPopupIsOpened(true);
  };

  const openEditProfilePopup = () => {
    props.setVarietyOfPopup('edit');
    props.setPopupIsOpened(true);
  };

  return (
    <div className="profile root__section">
      <div className="profile__user-info-container">
        <div className="profile__photo"></div>
        <div className="profile__data">
          <h1 className="profile__name">{props.userData.userName}</h1>
          <p className="profile__job">{props.userData.userJob}</p>
          <button className="button profile__edit-button" onClick={openEditProfilePopup}>Edit</button>
        </div>
        <button className="button profile__add-button" onClick={openAddImagePopup}>+</button>
      </div>
    </div>
  );
}

export default Profile;
