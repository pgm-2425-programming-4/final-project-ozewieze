import { API_URL, API_TOKEN } from "../constants/constants";
import { useQuery } from "@tanstack/react-query";

export function useFetchProjects() {
  const { isPending, error, data } = useQuery({
    // queryKey is the label for caching purposes
    queryKey: ["project"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/projects`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch project");
      }
      return response.json();
    },
  });
  return { isPending, error, data };
}
