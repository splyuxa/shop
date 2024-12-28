import { Box, Button, Card, CardActions, CardContent, CardMedia, Link, Stack, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import GoodsRating from './ProductRating'
import ToCartButton from './AddToCart'
import GoodsDialog from './ProductView';

const ClampedTypography = styled(Typography)(({ theme }) => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  textOverflow: 'ellipsis',
  margin: 0,
}));

export default function GoodsCard({ data }) {
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  const show = () => setIsOpenInfo(true);
  const hide = () => setIsOpenInfo(false);

  return (
    <Card sx={{ minHeight: "532px", maxHeight: "532px", display: "flex", flexDirection: "column" }} >
      <Box sx={{ position: "relative", height: "300px", cursor: "pointer" }} onClick={show}>
        <CardMedia component="img" height="300" alt={data.title} image={data.image}
          sx={{ position: "absolute", objectFit: "contain" }} />
      </Box>

      <CardContent onClick={show} sx={{ cursor: "pointer" }}>
        <ClampedTypography gutterBottom variant="h6" component="div">
          {data.title}
        </ClampedTypography>
        <Typography variant="body2" sx={{ color: 'primary.main' }}>
          {data.category}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{ m: 0 }}>
          {"$" + data.price.toLocaleString()}
        </Typography>
        <GoodsRating value={data.discount} />
      </CardContent>

      <CardActions sx={{ mt: "auto", width: "100%" }}>
        <ToCartButton goodId={data.id} />
      </CardActions>

      <GoodsDialog good={data} open={isOpenInfo} onClose={hide} />

    </Card>
  )
}
