import { getDate } from "@/utils/date-helper";
import React, { useEffect, useRef, useState } from "react";

function DatePickerComponent({
  startDateDefaultValue,
  endDateDefaultvalue,
  onChange,
}: {
  startDateDefaultValue?: string;
  endDateDefaultvalue?: string;
  onChange: (e: any) => void;
}) {
  const [startDate, setStartDate] = useState<string>(startDateDefaultValue!);
  const [endDate, setEndDate] = useState<string>(endDateDefaultvalue!);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (
      ref &&
      ref.current &&
      new Date(endDate).getTime() < new Date(startDate).getTime()
    ) {
      ref.current.value = startDate ? startDate.toString() : "";
      setEndDate(endDate);
    }
  }, [startDate]);
  return (
    <>
      <label className="block text-gray-700">Start Date</label>
      <input
        type="date"
        name="startDate"
        min={startDate ? startDate : getDate(new Date().toDateString())}
        defaultValue={startDate}
        onChange={(e) => {
          setStartDate(e.target.value);
          onChange(e);
        }}
      />
      <label className="block text-gray-700">End Date</label>

      <input
        ref={ref}
        type="date"
        name="endDate"
        min={startDate}
        value={endDate}
        onChange={(e) => {
          setEndDate(e.target.value);
          onChange(e);
        }}
      />
    </>
  );
}

export default DatePickerComponent;
