"use client";
import React, { useEffect, useState } from "react";
import { getDate } from "@/utils/date-helper";
import { Campaign } from "@/app/models/campaign";
import Link from "next/link";

const CampaignList = ({ campaignList }: { campaignList: Campaign[] }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(campaignList);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-4">Campaigns</h1>

        <Link href={"/campaign/new"}>
          {" "}
          <button className="bg-blue-400 text-white p-2 rounded-xl hover:bg-blue-500 active:bg-blue-600 ">
            Create New
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow "
          >
            <h2 className="text-xl font-semibold">{campaign.type}</h2>
            <p className="text-gray-500">From: {getDate(campaign.startDate)}</p>
            <p className="text-gray-500">To: {getDate(campaign.endDate)}</p>
            <p className="text-gray-500">
              Next Activation:{" "}
              {campaign.nextActivation
                ? campaign.nextActivation
                : "No schedules added to this campaign"}
            </p>
            <div className="mt-4 flex justify-between">
              <Link href={`/campaign/${campaign.id}`}>
                {" "}
                <button className="text-blue-500 hover:underline">Edit</button>
              </Link>
              <button className="text-red-500 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignList;
