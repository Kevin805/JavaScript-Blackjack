const Rooms = ({ currentRoom, setShowListMenu, setCurrentRoom }) => {
  const handleRoomChange = (room) => {
    setCurrentRoom(room);
    setShowListMenu(false);
  };
  return (
    <div className="rooms">
      <h2>Select room</h2>
      <ul>
        <li
          onClick={() => {
            handleRoomChange("Games");
          }}
          className={currentRoom === "Games" ? "active" : ""}
        >
          Games
        </li>
        <li
          onClick={() => {
            handleRoomChange("Books");
          }}
          className={currentRoom === "Books" ? "active" : ""}
        >
          Books
        </li>
        <li
          onClick={() => {
            handleRoomChange("Hikes");
          }}
          className={currentRoom === "Hikes" ? "active" : ""}
        >
          Hikes
        </li>
        <li
          onClick={() => {
            handleRoomChange("ReactJs");
          }}
          className={currentRoom === "Dogs & Cats" ? "active" : ""}
        >
          Dogs/Cats
        </li>
        <li
          onClick={() => {
            handleRoomChange("Coding");
          }}
          className={currentRoom === "Coding!" ? "active" : ""}
        >
          Coding
        </li>
      </ul>
    </div>
  );
};

export default Rooms;
