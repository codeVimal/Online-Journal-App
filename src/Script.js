import './Style.css' 
import './Cal.css' 
import { useState } from 'react';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import './ModalStyle.css';

function Script() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const [image, setImage] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
    setNote('');
    setTitle('');
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
      <div id='CalendarDiv'> <center><Calendar onClickDay={handleDateClick} /></center> </div>
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
              <textarea value={note}  rows={8} placeholder='Dear Diary ' onChange={handleNoteChange}/>
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
                <button id='buttons'onClick={handleSaveClick}>Save</button>
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
