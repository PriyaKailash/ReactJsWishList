import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { addItem, removeItem } from '../slice/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectedItem } from '../slice/wishlistSlice';

const WishList = (props) => {
  const data = props.wishListData;
  // const wishlistData = data.wishList;

  const selectItem = useSelector(selectedItem);

  const [listData, setListData] = useState([]);
  const [selectedlistData, setselectedListData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setListData(data);
    console.log(data);
  }, [data]);

  useEffect(() => {
    setselectedListData(selectItem);
  }, [selectItem]);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="App">
      {selectedlistData.length > 0 &&
        selectedlistData.map((item, index) => (
          <Card
            key={item.id}
            style={{
              display: 'flex',
              margin: 10,
              // backgroundColor: '#c3c3c3',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <CardContent>
              <img src={item.thumbnail} style={{ width: 130, height: 110 }} />

              <Typography style={{ fontWeight: 'bold' }}>
                {item.brand}
              </Typography>
              <Typography style={{ fontSize: 12 }}>{item.category}</Typography>
              <Typography style={{ fontSize: 10 }}>{item.price}</Typography>
            </CardContent>
            <CardContent>
              <CardActions
                style={{
                  backgroundColor: '#d2d2d2',
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  borderRadius: 5,
                  marginTop: 2,
                }}
              >
                <Button
                  style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}
                  onClick={() => handleRemoveItem(index)}
                >
                  -
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}

      {listData &&
        listData.map((item) => (
          <Card
            key={item.id}
            style={{
              display: 'flex',
              margin: 10,
              flexDirection: 'row',
              borderRadius: 5,
              borderWidth: 20,
              borderColor: 'black',
              justifyContent: 'space-between',
            }}
          >
            <CardContent>
              <img src={item.thumbnail} style={{ width: 130, height: 110 }} />
              <Typography style={{ fontWeight: 'bold' }}>
                {item.brand}
              </Typography>
              <Typography style={{ fontSize: 12 }}>{item.category}</Typography>
              <Typography style={{ fontSize: 10 }}>{item.price}</Typography>
            </CardContent>
            <CardContent>
              <CardActions
                style={{
                  backgroundColor: '#d2d2d2',
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  borderRadius: 5,
                  marginTop: 2,
                }}
              >
                <Button
                  style={{ color: 'black' }}
                  onClick={() => handleAddItem(item)}
                >
                  +
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};
export default WishList;
