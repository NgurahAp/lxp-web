import axios from "axios";
import {
  DetailModuleResponse,
  ModuleResponse,
} from "../../types/pelatihanku/modul";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../../config/api";
import { useQuery } from "@tanstack/react-query";

const fetchModulData = async (
  subjectId: string | undefined,
  sessionId: string | undefined
): Promise<ModuleResponse> => {
  if (!subjectId || !sessionId) {
    throw new Error("Subject ID and Session ID are required");
  }

  const token = Cookies.get("accessToken");
  const response = await axios.get(
    `${API_BASE_URL}/api/v2/my-study/subjects/${subjectId}/sessions/${sessionId}/modules`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

const fetchDetailModulData = async (
  subjectId: string | undefined,
  sessionId: string | undefined,
  moduleId: string | undefined
): Promise<DetailModuleResponse> => {
  if (!subjectId || !sessionId) {
    throw new Error("Subject ID and Session ID are required");
  }

  const token = Cookies.get("accessToken");
  const response = await axios.get(
    `${API_BASE_URL}/api/v2/my-study/subjects/${subjectId}/sessions/${sessionId}/modules/${moduleId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};

export const useModuleData = (
  subjectId: string | undefined,
  sessionId: string | undefined
) => {
  return useQuery({
    queryKey: ["moduleData", subjectId, sessionId],
    queryFn: () => fetchModulData(subjectId, sessionId),
    enabled: !!subjectId && !!sessionId, // Only run query if both IDs are defined
  });
};

export const useDetailModuleData = (
  subjectId: string | undefined,
  sessionId: string | undefined,
  moduleId: string | undefined
) => {
  return useQuery({
    queryKey: ["detailModuleData", subjectId, sessionId, moduleId],
    queryFn: () => fetchDetailModulData(subjectId, sessionId, moduleId),
    enabled: !!subjectId && !!sessionId && !!moduleId, // Only run query if both IDs are defined
  });
};