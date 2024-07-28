"use server";
import {
  addDoc,
  collection,
  doc,
  documentId,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Campaign } from "../models/campaign";
import firebase from "firebase/compat/app";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const fetchAllCampaigns = async () => {
  const q = query(collection(db, "campaigns"), orderBy("modifiedDate", "desc"));

  const querySnapshot = await getDocs(q);
  const campaignsData: Campaign[] = [];
  querySnapshot.forEach((doc) => {
    campaignsData.push({
      id: doc.id,
      nextActivation: doc.data()["schedule"].sort((sch: any) => {
        return sch.days[0].getTime() - sch.days[0].getTime();
      })[0]?.days[0],
      ...doc.data(),
    } as Campaign);
  });
  return campaignsData;
};

const fetchCampaignById = async (id: string) => {
  const q = query(collection(db, "campaigns"), where(documentId(), "==", id));

  const querySnapshot = await getDocs(q);

  return querySnapshot;
};
export const fetchCampaign = async (id: string) => {
  const querySnapshot = await fetchCampaignById(id);
  const campaignsData: Campaign[] = [];
  querySnapshot.forEach((doc) => {
    campaignsData.push({
      id: doc.id,

      ...doc.data(),
    } as Campaign);
  });
  return campaignsData[0];
};

export const addCompaign = async (campaignData: Campaign) => {
  campaignData.modifiedDate = new Date().getTime();
  const data = await addDoc(collection(db, "campaigns"), campaignData);
  if (data.id) {
    revalidatePath(`/campaign`);
    redirect("/campaign");
  }
};

export const updateCampaign = async (campaignData: Campaign) => {
  campaignData.modifiedDate = new Date().getTime();
  const elementRef = doc(db, "campaigns", campaignData.id);
  await updateDoc(elementRef, { ...campaignData }).then((doc) => {
    revalidatePath(`/campaign/${campaignData.id}`);

    redirect("/campaign");
  });
};
