import axios from "axios";
import { Image } from "../components/App/App.types";
import { FetchImagesResponse } from "../components/App/App.types";
const URL = "https://api.unsplash.com/";
const API_KEY = "i5w-Dwp5XlApWxQIRPAU3nhUWZSAxsZ2XZjUYXTlyVM";

export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<FetchImagesResponse> => {
  try {
    const response = await axios.get<FetchImagesResponse>(
      `${URL}search/photos`,
      {
        params: {
          query: query,
          page: page,
          per_page: 6,
          client_id: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
