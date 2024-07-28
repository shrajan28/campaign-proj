import CampaignList from "@/components/campaign-list.component";
import React from "react";
import { fetchAllCampaigns } from "../api/campaign-details.api";

async function CampaignPage() {
  const campaignList = await fetchAllCampaigns();
  return (
    <div>
      <CampaignList campaignList={campaignList} />
    </div>
  );
}

export default CampaignPage;
