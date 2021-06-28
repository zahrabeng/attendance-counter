import { useState } from "react";

export default function AttendanceTracker(): JSX.Element {
  const [attendanceCount, setAttendanceCount] = useState(0);

  const handleAddAttendee = () => {
    setAttendanceCount(attendanceCount + 1);
    // or, better alternative:
    // setAttendanceCount(prev => prev + 1);
  };

  const handleRemoveAttendee = () => {
    setAttendanceCount(attendanceCount - 1);
    // or, better alternative:
    // setAttendanceCount(prev => prev - 1);
  };

  const handleResetAttendance = () => {
    setAttendanceCount(0);
  };

  if (attendanceCount < 0) {
    return (
      <>
        <h1>Attendance Tracker</h1>
        <p>Attendance count: {attendanceCount}</p>
        <p>Negative attendance? Are you sure?</p>
        <button onClick={handleResetAttendance}>Reset attendance</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Attendance Tracker</h1>
        <p>Attendance count: {attendanceCount}</p>
        <button onClick={handleRemoveAttendee}>-1</button>
        <button onClick={handleAddAttendee}>+1</button>
      </>
    );
  }
}
