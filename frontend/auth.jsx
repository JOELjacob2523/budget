import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { getClientInfo } from "./servers/clientGetRequest/clientGetRequest";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [clientData, setClientData] = useState({
    isAuthenticated: false,
    clientId: null,
    first_name: "",
    last_name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    primaryPhone: "",
    cell1: "",
    cell2: "",
    email: "",
    role: "",
    createdAt: "",
    updatedAt: "",
  });
  const [clientInfo, setClientInfo] = useState([]);
  // const [paymentData, setPaymentData] = useState([]);
  // const [zmanGoalData, setZmanGoalData] = useState([]);

  const fetchClientInfo = useCallback(async () => {
    if (clientData.clientId) {
      try {
        const clientInfo = await getClientInfo(clientData.clientId);
        setClientInfo(clientInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }, [clientData.clientId]);
  // const fetchZmanGoalData = useCallback(async () => {
  //   try {
  //     const zmanGoalInfo = await getAllZmanGoalInfoByAdminId(
  //       authData.parent_admin_id
  //     );
  //     setZmanGoalData(zmanGoalInfo);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }, [authData.parent_admin_id]);

  // const fetchPaymentData = useCallback(async () => {
  //   try {
  //     const paymentInfo = await getAllPaymentInfoByAdminID(
  //       authData.parent_admin_id
  //     );
  //     setPaymentData(paymentInfo);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }, [authData.parent_admin_id]);

  useEffect(() => {
    if (clientData.clientId) {
      fetchClientInfo();
      //     fetchPaymentData();
      //     fetchZmanGoalData();
    }
  }, [
    clientData.clientId,
    fetchClientInfo,
    //   fetchPaymentData,
    //   fetchZmanGoalData,
  ]);

  return (
    <AuthContext.Provider
      value={{
        setClientData,
        clientData,
        clientInfo,
        // setStudentData,
        // paymentData,
        // zmanGoalData,
        // fetchStudentData,
        // fetchZmanGoalData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
