export interface Service {
  id: number;
  title: string;
  description: string;
  price?: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  content: string;
  rating: number;
}

export interface BeforeAfter {
  id: number;
  title: string;
  beforeImg: string;
  afterImg: string;
}
