export type ListingType = "tour" | "car" | "package";

export interface ListingItem {
  id: string | number;
  name: string;
  image?: string;
  location?: string;
  type?: string;
  description?: string;
  duration?: string;
  seats?: number;
  price?: number;
  pricePerDay?: number;
  rating?: number;
  whatsapp?: string;
}

export interface ListingCardProps {
  item: ListingItem;
  type?: ListingType;
}
