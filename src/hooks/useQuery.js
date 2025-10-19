import { useQuery } from "@tanstack/react-query"

export const useFetchTotalClicks = (token, onError) => {
    return useQuery("url-totalclick",
         async () => {
            return await api.get(
                "/api/urls/totalClicks?startDate=2024-12-01&endDate=2024-12-07",
                {
                    headers: {

                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );
         },
          {
            select: (data) => {
                const convertToArray = Object.keys(data.data).map((key) => ({
                    clickDate: key,
                    count: data.data[key],
                }));

                return convertToArray;
            },
            onError,
            staleTime: 5000
          }
        );
};