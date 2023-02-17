export type TNavFavouritesProps = {
  navFavouritesData: TNavFavouritesData[];
  testID: string;
  secondTestID: string;
};

export type TNavFavouritesData = {
  id: string;
  icon: string;
  location: string;
  destination: string;
};
