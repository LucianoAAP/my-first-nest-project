export type BookDto = {
  id?: number;
  title: string;
  description: string;
  authorIds: number[];
};

export type BookCreationDto = {
  id?: number;
  title: string;
  description: string;
};
