import axios from "axios";
import { apiUrl } from "src/shared/env";
import { axiosConfig } from "src/utils/network";
import { Volunteer } from "./models/Volunteer";

export const createVolunteer = async (volunteer: Volunteer) => {
  const { Name, Email, PhoneNumber, MembersCount, StartDate, EndDate, IdCard, Proposal } = volunteer;
  return axios.post(
    apiUrl + `/api/v1/volunteer`,
    {
      Name: Name,
      Email: Email,
      PhoneNumber: PhoneNumber,
      MembersCount: MembersCount,
      StartDate: StartDate,
      EndDate: EndDate,
      IdCard: IdCard,
      Proposal: Proposal,
    },
    axiosConfig
  );
};
