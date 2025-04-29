import React from 'react';
import ProductItemsView from '../ProductItems copy';

const ProductsSliderView = () => {
  const products = [
    {
      id: 1,
      defaultImg: 'w1',
      hoverImg: 'w2',
      title: 'Men Luxury Watch',
      brand: 'CLAFOUTIS',
      oldPrice: 58.0,
      newPrice: 50.0,
      rating: 4,
    },
    {
      id: 2,
      defaultImg: 'x2',
      hoverImg: 'x1',
      title: 'Footwear for office use',
      brand: 'CLAFOUTIS',
      newPrice: 95.5,
      rating: 5,
    },
    {
      id: 3,
      defaultImg: 's2',
      hoverImg: 's1',
      title: 'Important T-Shirt',
      brand: 'MODSTYLE',
      oldPrice: 45.0,
      newPrice: 39.99,
      rating: 3,
    },
    {
      id: 4,
      defaultImg: 'm2',
      hoverImg: 'm1',
      title: 'Smart Mobilephone',
      brand: 'MODSTYLE',
      oldPrice: 45.0,
      newPrice: 39.99,
      rating: 3,
    },
    {
      id: 5,
      defaultImg: 'b2',
      hoverImg: 'b1',
      title: 'Ladies Handbags',
      brand: 'MODSTYLE',
      oldPrice: 45.0,
      newPrice: 39.99,
      rating: 3,
    },
    {
      id: 6,
      defaultImg: 'm5',
      hoverImg: 'm4',
      title: 'Fine and Natural',
      brand: 'MODSTYLE',
      oldPrice: 45.0,
      newPrice: 39.99,
      rating: 3,
    },
    {
      id: 7,
      defaultImg: 'j1',
      hoverImg: 'j3',
      title: 'Gold Jewellery',
      brand: 'MODSTYLE',
      oldPrice: 45.0,
      newPrice: 39.99,
      rating: 3,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 w-full">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
          <ProductItemsView item={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsSliderView;
