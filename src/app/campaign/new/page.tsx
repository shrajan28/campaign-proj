import { addCompaign } from "@/app/api/campaign-details.api";
import { Campaign } from "@/app/models/campaign";
import CampaignForm from "@/components/campaign-form.component";
import React from "react";

function Page() {
  return (
    <div>
      <CampaignForm onSubmit={addCompaign} />
    </div>
  );
}

export default Page;
