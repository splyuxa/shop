import React from 'react';
import { Typography, Stack, Link } from '@mui/material';
import { Instagram, Facebook, Telegram, WhatsApp, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      rowGap={2}
      columnGap={12}
      justifyContent="space-between"
      alignItems="center">
      <Stack direction="column">
        <Typography variant="subtitle2" component="div" sx={{ color: "text.disabled" }}>
          © 2024 My Store. Все права защищены.
        </Typography>
      </Stack>
    </Stack>
  );
};
