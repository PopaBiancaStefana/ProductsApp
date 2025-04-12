export default interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: any;
  rating: {rate: number, count: string};
}