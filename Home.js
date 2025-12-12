import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>College Event Management App</h1>
      <Link to="/create" style={{ marginBottom: "20px", display: "inline-block" }}>
        ➕ Create New Event
      </Link>
      <ul>
        {events.length === 0 ? (
          <p>No events yet</p>
        ) : (
          events.map((event) => (
            <li key={event._id}>
              <strong>{event.name}</strong> — {event.date} — {event.location}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Home;
