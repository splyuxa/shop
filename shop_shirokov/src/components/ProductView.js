import { AppBar, Box, Chip, Container, Dialog, DialogContent, DialogTitle, IconButton, Slide, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ToCartButton from './AddToCart'
import { Close } from '@mui/icons-material'
import GoodsRating from './ProductRating';

export default function GoodsDialog({ good, onClose, ...otherProps }) {
  return (
    <Dialog {...otherProps} onClose={onClose}>
      <DialogTitle>
        Товар
      </DialogTitle>
      <DialogContent>
        <Stack direction="column" spacing={1} sx={{ maxWidth: 400, margin: "auto" }}>

          <Box component="img" src={good.image} sx={{ maxHeight: 400, objectFit: "contain" }} />

          <Stack direction="column">
            <Typography variant={"h6"} component="div">
              {good.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'primary.main' }}>
              {good.category}
            </Typography>
          </Stack>

          <Typography gutterBottom variant="h6" component="div" color="primary" sx={{ m: 0 }}>
            {"$" + good.price.toLocaleString()}
          </Typography>
          
          <GoodsRating value={good.discount} />

          <ToCartButton goodId={good.id} />

          <Typography variant="subtitle2" component="div">Описание</Typography>

          <Typography variant="body2">
            {good.description}
          </Typography>

        </Stack>
      </DialogContent>
    </Dialog>
  )
}
