export type VillageContent = {
  title: string;
  date: string;
  likeCount: number;
  likeStatus: string[];
  comment: string[];
};

export type VillageGallery = {
  Photos: string[];
};

export type VillageGraph = {
  Label: string;
  Count: number;
  Type: number;
};
