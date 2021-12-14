import { OBPSService } from "../../elements/OBPS";

const BPAREGApplicationUpdateActions = async (applicationData, tenantId) => {
  // console.log("find application update action here", applicationData, action, tenantId)
  try {
    const response = await OBPSService.BPAREGupdate(applicationData, tenantId);
    // console.log("find me here", response)
    return response;
  } catch (error) {
    // console.log("find error here", error?.response);
    throw new Error(error?.response?.data?.Errors[0].message);
  }
};

export default BPAREGApplicationUpdateActions;
