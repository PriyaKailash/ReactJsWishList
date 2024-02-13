import React, { useEffect, useState } from 'react';

const useGetData = () => {
  const [wishListData, setWishListData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const res = await response.json();
    setWishListData(res);
  };

  return wishListData;
};

export default useGetData;
