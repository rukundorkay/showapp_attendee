export interface Ticket {
  seatCategory: string;
  price: string;
  seatNumber: number;
  user: string | object;
  event: string | object;
  id: string;
  refunded: boolean;
  createdAt: string;
  updatedAt: string;
}
