import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [classAge, setClassAge] = useState("");
  const [Activity, setActivity] = useState("");
  const [StartTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  return (
    <div className="create-form">
      <h2>Log Volunteer Hours</h2>
      <form>
        <label>School Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>Class Age</label>
        <input
          type="text"
          onChange={(e) => setClassAge(e.target.value)}
        ></input>
        <label>Activity</label>
        <label>Date</label>
        <input type="date"></input>
        <label>Start Time</label>
        <input
          type="time"
          onChange={(e) => setStartTime(e.target.value)}
        ></input>
        <label>End Time</label>
        <input type="time" onChange={(e) => setEndTime(e.target.value)}></input>
        <button>Save Activity!</button>
        <img src="" />
        <img src="" />
        <img src="" />
        <img src="" />
      </form>

      <p>Please only log activities you found outside of PENguin Pals.</p>
    </div>
  );
};

export default Create;
