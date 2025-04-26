import { useState, useContext } from 'react';
import { EventContext } from '../EventContext'; 
import EventCard from '../components/EventCard'
import { Link } from 'react-router';

const Home = () => {
    const [email, setEmail] = useState('');
    const { events, setEvents } = useContext(EventContext);
    const recentEvents = events.slice(0, 3);
    const handleSubscribe = (e) => {
        e.preventDefault();
        alert('Спасибо за подписку!');
        setEmail('');
    };
    document.title = "Мероприятия школы №9";
  return (
    <main>
        <div className="hero-section"> 
            
                <h1>МБОУ СОШ №9</h1>
                <h2>Добро пожаловать!</h2>
                <p>Познакомьтесь с нашими мероприятиями и будьте в курсе всех событий.</p>
                <Link to='/events'>Узнать больше</Link>
            </div>
            <div className="home-events">
                <h2>Недавние мероприятия</h2>
                <div className='container'>
                    {recentEvents.map(event => (
                        <EventCard key={event.id} event={event} url={`events/${event.id}`}/>
                    ))}
                </div>
                
                <Link to='/events'>Перейти ко всем мероприятиям</Link>
            </div>
            <div className="home-subscribe">
              <h2>Подпишитесь на нашу рассылку</h2>
              <p>Будьте в курсе последних событий и получайте уведомления о новых мероприятиях первыми!</p>
              <form onSubmit={handleSubscribe}>
                    <input 
                        type="email" 
                        placeholder="Введите ваш email" 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <button type="submit">Подписаться</button>
                </form>
            </div>
    </main>
  )
}

export default Home