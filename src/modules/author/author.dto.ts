export type AuthorDto = {
  id?: number;
  name: string;
  bookIds: number[];
};

export type AuthorCreationDto = {
  id?: number;
  name: string;
};
