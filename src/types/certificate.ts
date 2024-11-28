export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: string;
  description: string;
  credentialUrl?: string;
}