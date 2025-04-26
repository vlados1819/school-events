import { useState } from 'react';

const EventForm = ({ onSubmit }) => {
    const [eventData, setEventData] = useState({
        title: '',
        category: '', // Changed from array to string
        date: '',
        description: [''],
        photo: ''
    });

    const categories = [
        "праздник", "конкурсы и соревнования", "награды", "танцы", "вокал", "экология", "наука"
    ];

    const handleChange = ({ target: { name, value } }) => {
        setEventData(prev => ({ ...prev, [name]: value }));
    };

    const handleDescriptionChange = (index, value) => {
        setEventData(prev => {
            const newDescription = [...prev.description];
            newDescription[index] = value;
            return { ...prev, description: newDescription };
        });
    };

    const updateDescriptions = (action, index) => {
        setEventData(prev => {
            const newDescription = action === 'add' ? [...prev.description, ''] : prev.description.filter((_, i) => i !== index);
            return { ...prev, description: newDescription };
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEventData(prev => ({
                    ...prev,
                    photo: reader.result // Fixed this line
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(eventData);
        setEventData({ title: '', category: '', date: '', description: [''], photo: '' });
    };

    const clearFields = (e) => {
        e.preventDefault();
        setEventData({ title: '', category: '', date: '', description: [''], photo: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Название события" value={eventData.title} onChange={handleChange} required />
            <select name="category" value={eventData.category} onChange={handleChange} required>
                <option value="">Выберите категорию</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            <input type="date" name="date" value={eventData.date} onChange={handleChange} required />
            {eventData.description.map((desc, index) => (
                <div className='p-block' key={index}>
                    <textarea 
                        placeholder={`Описание абзац ${index + 1}`} 
                        value={desc} 
                        onChange={(e) => handleDescriptionChange(index, e.target.value)} 
                        required />
                    <button type="button" onClick={() => updateDescriptions('remove', index)}>Удалить абзац</button>
                </div>
            ))}
            <button type="button" onClick={() => updateDescriptions('add')}>Добавить абзац</button>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Добавить событие</button>
            <button type='button' style={{margin: "16px"}} onClick={clearFields}>Очистить</button>
            {eventData.photo.length > 0 && (
                <div>
                    <h3>Загруженная фотография:</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <img src={eventData.photo} alt="" />                    
                    </div>
                </div>
            )}
        </form>
    );
};

export default EventForm;
