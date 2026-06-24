const PRODUCTS_URL = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json';

// export const getProducts = async () => {
//     const response = await fetch(PRODUCTS_URL);

//     if (!response.ok) {
//         throw new Error('Failed to fetch products');
//     }

//     return response.json();
// };

export const getProducts = async () => {
  await new Promise((res) => setTimeout(res, 2000));

  const response = await fetch(PRODUCTS_URL);
  return response.json();
};