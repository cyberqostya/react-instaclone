import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = (props) => {
  return (
    <div className="card-container root__section">
      {props.cards.map((item, index) => {
        return <Card 
          name={item.name} 
          url={item.url} 
          key={index} 
          setImageUrl={props.setImageUrl} 
          setPopupIsOpened={props.setPopupIsOpened}
          setVarietyOfPopup={props.setVarietyOfPopup}
        />
      })}
      {props.cardsArray && props.cardsArray.map((item, index) => {
        return (
        <Card 
          name={item.name} 
          url={item.url}
          key={index}
          setImageUrl={props.setImageUrl} 
          setPopupIsOpened={props.setPopupIsOpened}
          setVarietyOfPopup={props.setVarietyOfPopup}
        />)
      })}
    </div>
  );

};

export default CardContainer;