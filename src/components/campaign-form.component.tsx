"use client";
import React, { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { getDate, getWeekDay } from "@/utils/date-helper";
import { Campaign, Schedule } from "@/app/models/campaign";
import Link from "next/link";
import DatePickerComponent from "./date-picker.component";
import DatePicker from "react-multi-date-picker";
import SchedulerManager from "./scheduler.manager.component";

type FormState = {
  type: string;
  startDate?: string;
  endDate?: string;
  schedule: Schedule[];
};

const CampaignForm = ({
  campaignData,
  onSubmit,
}: {
  campaignData?: FormState;
  onSubmit: (campaignData: Campaign) => void;
}) => {
  const [formState, setFormState] = useState<FormState>(
    campaignData
      ? campaignData
      : {
          type: "Cost per Order",
          schedule: [],
        }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const addSchedule = () => {
    setFormState((prevState) => ({
      ...prevState,
      schedule: [
        ...(prevState.schedule as []),
        { days: [], startTime: "", endTime: "" },
      ],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState as Campaign);
  };

  return (
    <div className="p-6 max-w-lg mx-auto text-black">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold">Create/Edit Campaign</h1>
        <Link href={"/campaign"}> &#x2190; Back to Listing</Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Campaign Type</label>
          <select
            name="type"
            value={formState.type}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          >
            <option>Cost per Order</option>
            <option>Cost per Click</option>
            <option>Buy One Get One</option>
          </select>
        </div>

        <DatePickerComponent
          startDateDefaultValue={getDate(formState.startDate!)}
          endDateDefaultvalue={getDate(formState.endDate!)}
          onChange={handleChange}
        />
        <div className="mb-4">
          <SchedulerManager
            schedules={formState.schedule}
            startDate={formState.startDate!}
            endDate={formState.endDate!}
          />

          <button
            type="button"
            onClick={addSchedule}
            className="mt-2 text-blue-500 hover:underline"
          >
            Add Schedule
          </button>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CampaignForm;
