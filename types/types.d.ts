
declare module "*.module.css";
declare module "*.module.scss";

type Product = {
  id: string;
  title: string;
  dec?: string;
  imageUrl: string;
  price: string;
};

type cartDataType = {
  title: string,
  quantity: number,
  imageUrl: string,
  price: string,
  properties: object,
  store: string,
  transportation: string,
  
}

type cartProps = {
  payStep: number,
  setpayStep: (val:number) => void
}[]