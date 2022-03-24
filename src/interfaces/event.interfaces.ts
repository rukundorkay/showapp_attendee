export interface Seat {
  price: number;
  totalSeats: number;
  availableSeats: number;
}

export interface Organization {
  id: string;
  name: string;
  address: string;
  logo: string;
  industry: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  vip: Seat;
  vvip: Seat;
  standard: Seat;
  table: Seat;
  venue: string;
  status: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  organization: Organization;
}
