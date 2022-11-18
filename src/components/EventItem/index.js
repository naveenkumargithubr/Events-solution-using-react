// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props // get the active id and isActive from events as props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image' // when click on the image image should be highlited

  // when click on the image button it should be display the results
  const onClickEvent = () => {
    setActiveEventId(id)
  }

  // list card
  return (
    <li className="item-container">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
