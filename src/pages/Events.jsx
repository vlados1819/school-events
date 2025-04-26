import EventsList from "../components/EventsList"

const Events = () => {
  document.title =  "Мероприятия";
  return (
    <main className='events'>
      <EventsList/>
    </main>
  )
}

export default Events