const Contacts = () => {
  document.title =  "Контакты";
  return (
    <main className="contacts">
      <h2 className="contacts-title">Контакты</h2>
      <div className="container">
        <div className="contact-item">Наименование школы: <span>МБОУ СОШ №9</span></div>
        <div className="contact-item">Телефоны: <a href="tel:84754528475">Телефон&#128222;</a></div>
        <div className="contact-item">Электронная почта: <a href="mailto:mailto:michschool9@obr.g45.tambov.gov.ru">E-mail&#128231;</a></div>
        <div className="contact-item">Адрес: <span>г. Мичуринск, ул. Лаврова, д. 98</span></div>
        <div className="contact-item">Часы приема граждан: <span>Пн–сб 08:00–19:00</span></div>
        <div className="contact-item">Режим работы: <span>Пн–сб 08:00–19:00</span></div>
        <div className="contact-item">Начало занятий: <span>08:00</span></div>
        <div className="contact-item">Продолжительность учебной недели: <span>1-9 класс — 5 дней; 10-11 класс — 6 дней</span></div>
      </div>
    </main>
  )
}

export default Contacts