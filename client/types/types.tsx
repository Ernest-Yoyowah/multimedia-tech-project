export interface Group {
  id: number;
  name: string;
  description: string;
  members: string[];
  admin: string;
  iconUrl?: string;
}
