import { useQuery } from "@tanstack/react-query"
import api from "../api/api"

export const useFetchTotalClicks = (token, onError) => {
    return useQuery({
        queryKey: ["url-totalclick"],
        queryFn: async () => {
            return await api.get(
                "/api/urls/totalClicks?startDate=2024-12-01&endDate=2025-10-15",
                {
                    headers: {

                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );
        },
        select: (data) => {
            // Assumes the API response structure is like { data: { "2024-10-01": 5, "2024-10-02": 10, ... } }
            const convertToArray = Object.keys(data.data).map((key) => ({
                clickDate: key,
                count: data.data[key],
            }));

            return convertToArray;
        },
        
        onError: onError, 
        staleTime: 5000,
          
    });
};