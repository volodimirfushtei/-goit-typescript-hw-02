import axios from "axios";

const URL = "https://api.unsplash.com/";
const API_KEY = "i5w-Dwp5XlApWxQIRPAU3nhUWZSAxsZ2XZjUYXTlyVM";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
  user?: {
    name: string;
  };
  likes?: number;
  created_at?: string;
}

interface FetchImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

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
