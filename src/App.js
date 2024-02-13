import React from 'react';
import './style.css';
import useGetData from './utils/useGetData';
import WishList from './component/WishList';
import { useSelector } from 'react-redux';
import { selectedItem } from './slice/wishlistSlice';

export default function App() {
  const wishListData = useGetData();

  return (
    <div>
      <WishList wishListData={wishListData.products} />
    </div>
  );
}
