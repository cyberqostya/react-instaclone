import React from 'react';

import Header from './Header/Header';
import Profile from './Profile/Profile';
import CardContainer from './CardContainer/CardContainer';
import Popup from './Popup/Popup';

const App = (props) => {


  // Открытие, закрытие попапа
  const [popupIsOpened, setPopupIsOpened] = React.useState(false);


  // Какой попап отрисовывать
  const [varietyOfPopup, setVarietyOfPopup] = React.useState('none');


  // URL картинки на которую нажали
  const [imageUrl, setImageUrl] = React.useState('');

  // Имя и род дейтельности для передачи из Profile в Popup в поля ввода при открытии попапа
  const [userName, setUserName] = React.useState(props.data.name);
  const [userJob, setUserJob] = React.useState(props.data.job);

  // Карточки для создания из попапа
  let [newCards, setNewCards] = React.useState([]);


  return (
    <>
      <Header />

      <Profile 
        userData={{userName, userJob}} 
        setPopupIsOpened={setPopupIsOpened}
        setVarietyOfPopup={setVarietyOfPopup}
      />

      <CardContainer
        cards={props.data.cards} 
        setPopupIsOpened={setPopupIsOpened}
        setVarietyOfPopup={setVarietyOfPopup}
        setImageUrl={setImageUrl}
        cardsArray={newCards}
      />

      {popupIsOpened && 
      <Popup 
        areaPopupHandler={setPopupIsOpened}
        varietyOfPopup={varietyOfPopup}
        imageUrl={imageUrl}
        userData={{userName, userJob, setUserName, setUserJob}}
        cards={{newCards, setNewCards}}
      />}

    </>
  );
}

export default App;
