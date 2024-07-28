import { fetchCampaign, updateCampaign } from "@/app/api/campaign-details.api";
import CampaignForm from "@/components/campaign-form.component";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const campaignData = await fetchCampaign(params.id);
  return (
    <div>
      <CampaignForm campaignData={campaignData} onSubmit={updateCampaign} />
    </div>
  );
}

export default page;
