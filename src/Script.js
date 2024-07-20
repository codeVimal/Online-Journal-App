import './Style.css';
import './Cal.css';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import './ModalStyle.css';

function Script() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [note, setNote] = useState('');
    const [title, setTitle] = useState('');
    const [isEditing, setIsEditing] = useState(true);
    const [image, setImage] = useState(null);
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const fetchEntries = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await fetch('/api/calendar', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();
            setEntries(json);
        };

        fetchEntries();
    }, []);

    const handleDateClick = (date) => {
        const entry = entries.find(entry => new Date(entry.date).toDateString() === date.toDateString());
        if (entry) {
            setSelectedDate(date);
            setTitle(entry.title);
            setNote(entry.note);
            setImage(entry.image);
            setIsEditing(false);
        } else {
            setSelectedDate(date);
            setTitle('');
            setNote('');
            setImage(null);
            setIsEditing(true);
        }
    };

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSaveClick = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const entry = { date: selectedDate, title, note, image };

        if (isEditing) {
            const response = await fetch('/api/calendar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(entry)
            });
            const json = await response.json();
            setEntries([...entries, json]);
        } else {
            // Find the entry by date
            const existingEntry = entries.find(entry => new Date(entry.date).toDateString() === selectedDate.toDateString());

            const response = await fetch(`/api/calendar/${existingEntry._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(entry)
            });
            const json = await response.json();
            setEntries(entries.map(entry => entry._id === existingEntry._id ? json : entry));
        }

        setIsEditing(false);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCloseModal = () => {
        setSelectedDate(null);
        setNote('');
        setTitle('');
        setImage(null);
        setIsEditing(true);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className='main'>
            <div className="app">
                <div id='CalendarDiv'><center><Calendar onClickDay={handleDateClick} /></center></div>
                {selectedDate && (
                    <Modal
                        isOpen={true}
                        id='modal'
                        onRequestClose={handleCloseModal}
                        contentLabel="My Modal"
                        key={selectedDate.toISOString()}
                    >
                        <h2>{selectedDate.toDateString()}</h2>
                        {isEditing ? (
                            <div>
                                <input type='text' value={title} id='noteTitle' placeholder='Enter the title' onChange={handleTitleChange}></input>
                                <div id='newDiv'></div>
                                <textarea value={note} rows={8} placeholder='Dear Diary ' onChange={handleNoteChange} />
                                <input id='inputfile' type="file" onChange={handleImageChange} />
                            </div>
                        ) : (
                            <div>
                                <div id='newDiv'></div>
                                <br></br>
                                <h1 id='Journaltext'>{title}</h1>
                                <pre id='Journaltext'>{note}</pre>
                                {image && <img id='noteImage' src={image} alt="Uploaded image" />}
                            </div>
                        )}
                        <div>
                            {isEditing ? (
                                <button id='buttons' onClick={handleSaveClick}>Save</button>
                            ) : (
                                <button id='buttons' onClick={handleEditClick}>Edit</button>
                            )}
                            <button id='buttons' onClick={handleCloseModal}>Close</button>
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    );
}

export default Script;
