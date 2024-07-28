import { Schedule } from "@/app/models/campaign";
import React, { useEffect, useState } from "react";
import ScheduleComponent from "./schedule.component";

function SchedulerManager({
  schedules,
  endDate,
  startDate,
}: {
  schedules: Schedule[];
  endDate: string;
  startDate: string;
}) {
  return (
    <>
      <label className="block text-gray-700">Schedule</label>
      {schedules.map((schedule, index) => (
        <ScheduleComponent
          key={index}
          endDate={endDate}
          startDate={startDate}
          schedule={schedule}
        />
      ))}
    </>
  );
}

export default SchedulerManager;
