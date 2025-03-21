export type BooksType = {
  author: {
    name: string;
  };
  id: number;
  image: string;
  name: string;
  stocks: {
    busy: boolean;
    id: number;
    locationId: number;
  }[];
}[];

export type FewBooks = {
  bookId: number;
  busies: string;
  name: string;
  total: number;
};

export type BooksCount = {
  books_count: number;
  librarians_count: number;
  rents_count: number;
  gender: {
    female: string;
    male: string;
  };
  reading_books_count: number;
  expired_leases: string;
  dayly_leasing_books_avarage_count_of_last_month: number;
  leased_books_count_of_last_month: string;
  leased_books_count_of_last_week: string;
  leased_books_count_of_last_24_hours: string;

  one_month_leased_rents_by_day: {
    count: string;
    day: string;
  }[];
  one_month_returned_rents_by_day: {
    count: string;
    day: string;
  }[];
};

export type GrafikaType = {
  count: string;
  day: string;
};

export type TopBooksLastWeekType = {
  count: string;
  id: number;
  name: string;
};

export type topBooksType = {
  count: string;
  id: number;
  name: string;
};

export type TopLibrariansType = {
  count: string;
  lastName: string;
  user_id: number;
};

