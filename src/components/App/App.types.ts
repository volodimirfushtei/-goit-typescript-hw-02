export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description?: string;
  user?: {
    name: string;
    profile_image?: string;
  };
  likes?: number;
  created_at?: string;
}

export interface ImageCardProps {
  image: Image;
  openModal: () => void;
}
export interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}

export interface ImageModal {
  urls: {
    regular: string;
  };
  alt_description?: string;
  user?: {
    name: string;
  };
  likes?: number;
  created_at?: string;
}

export interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  image: ImageModal | null;
}
export interface LoaderProps {
  color?: string;
  height?: number;
  width?: number;
}
export interface LoadMoreBtnProps {
  haveImages: number;
  isLoadingMore: boolean;
  onClick: () => void;
}
export interface SearchBarProps {
  onSubmit: (query: string) => void;
  placeholder?: string;
}
export interface FetchImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}
