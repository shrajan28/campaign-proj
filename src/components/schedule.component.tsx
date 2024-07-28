import { Schedule } from "@/app/models/campaign";
import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

function ScheduleComponent({
  key,
  schedule,
  startDate,
  endDate,
}: {
  key: any;
  schedule: Schedule;
  endDate: string;
  startDate: string;
}) {
  const [currentDates, setCurrentDates] = useState(
    schedule.days?.map((day) => {
      return new DateObject(day);
    })
  );

  useEffect(() => {
    schedule.days = currentDates.map((date) => {
      return date.toLocaleString();
    });
  }, [currentDates]);

  return (
    <div key={key} className="flex justify-between items-center">
      <DatePicker
        value={currentDates}
        onChange={setCurrentDates}
        range
        minDate={startDate}
        maxDate={endDate}
      ></DatePicker>
      <input
        type="time"
        defaultValue={schedule.startTime}
        min={new Date().getTime()}
        className="w-1/3 ml-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        onChange={(e) => {
          schedule.startTime = e.target.value;
        }}
      />
      <input
        type="time"
        defaultValue={schedule.endTime}
        onChange={(e) => {
          schedule.endTime = e.target.value;
        }}
        min={schedule.startTime}
        className="w-1/3 ml-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
      />
    </div>
  );
}

export default ScheduleComponent;
