import { Alert, Button, Dialog, DialogContent, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Close } from '@mui/icons-material'
import { useCart } from '../hooks/useCart';
import GoodInCart from './CartItem';

export default function CartDialog({ onClose, ...otherProps }) {
  const { goods } = useCart();
  const ids = goods ? Object.keys(goods) : [];
  const [prices, setPrices] = useState({});
  const [sum, setSum] = useState(0);

  const handlePriceLoad = ({ id, price }) => {
    setPrices(prices => { return { ...prices, [id]: price } });
  }

  const calcSum = () => {
    let sum = 0;

    for (let index in ids) {
      const id = ids[index];
      const price = prices[id];
      const quantity = goods[id];
      if (!price || !quantity) {
        continue;
      } else {
        sum += price * quantity;
      }
    }

    return sum;
  }

  useEffect(() => {
    setSum(calcSum());
  }, [prices, goods]);

  return (
    <Dialog {...otherProps} onClose={onClose}>
      <DialogContent>
        <Stack direction="column" spacing={2} sx={{ maxWidth: 400, margin: "auto" }}>

          {ids.length === 0 && <Alert severity="info">Корзина пуста</Alert>}

          {ids.length !== 0 &&
            <>
              <Stack direction="column" spacing={1}>
                {ids.map((id) =>
                  <GoodInCart goodId={id} key={id} onPriceLoad={({ price }) => handlePriceLoad({ id, price })} />
                )}
              </Stack>
              
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6" component="div">
                  Итог:
                </Typography>
                <Typography variant="h6" component="div">
                  {"$" + sum.toLocaleString()}
                </Typography>
              </Stack>

              <Button>Оформить</Button>
            </>
          }

        </Stack>
      </DialogContent>
    </Dialog>
  )
}
