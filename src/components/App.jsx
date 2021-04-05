import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avater from "./Avatar";

function createCard(contacts) {
  return (
    <Card
      key={contacts.id}
      email={contacts.email}
      imgURL={contacts.imgURL}
      name={contacts.name}
      phone={contacts.phone}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avater img="https://pbs.twimg.com/profile_images/744849215675838464/IH0FNIXk_400x400.jpg" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
// import React from "react";

// function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//       <div className="card">
//         <div className="top">
//           <h2>Beyonce</h2>
//           <img
//             src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//             alt="avatar_img"
//           />
//         </div>
//         <div className="bottom">
//           <p>+123 456 789</p>
//           <p>b@beyonce.com</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
