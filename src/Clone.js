// import './Style.css' 
// import { useState } from 'react';
// import Calendar from 'react-calendar';
// import Modal from 'react-modal';

// function Script() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [note, setNote] = useState('');
//   const [isEditing, setIsEditing] = useState(true);
//   const [image, setImage] = useState(null);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   const handleNoteChange = (event) => {
//     setNote(event.target.value);
//   };

//   const handleSaveClick = () => {
//     setIsEditing(false);
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedDate(null);
//     setNote('');
//     setIsEditing(true);
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setImage(reader.result);
//     };

//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className='main'>
//       <div className="app">
//         <h1 className="header">myDay</h1>
//         <Calendar className="cal" onClickDay={handleDateClick} />
//         {selectedDate && (
//           <Modal 
//             isOpen={true}
//             onRequestClose={handleCloseModal}
//             contentLabel="My Modal"
//             key={selectedDate.toISOString()}
//           >
//             <h2>{selectedDate.toDateString()}</h2>
//             {isEditing ? (
//                 <div>
//               <textarea value={note} onChange={handleNoteChange} />
//               <input type="file" onChange={handleImageChange} />
//               </div>
//             ) : (
//                 <div>
//                     {image && <img src={image} alt="Uploaded image" />}
//                     <br></br>
//                 <pre>{note}</pre>
//                 </div>
//             )}
//             <div>
//               {isEditing ? (
//                 <button onClick={handleSaveClick}>Save</button>
//               ) : (
//                 <button onClick={handleEditClick}>Edit</button>
//               )}
//               <button onClick={handleCloseModal}>Close</button>
//             </div>
//           </Modal>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Script;
