import { MenuItem, Select, Stack } from '@mui/material';
import React, { useState } from 'react'

const categories = ["Все", "audio", "appliances", "laptop", "mobile", "gaming", "tv" ];

export default function CategorySelect({ onChange }) {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const handleSelect = (event) => {
    if (event.target.value === selectedCategory) {
      return;
    }

    setSelectedCategory(event.target.value);
    onChange && onChange({ newValue: event.target.value });
  };

  return (
    <Stack direction="row" alignItems="start" sx={{ minWidth: "100%" }}>
      <Select
        value={selectedCategory}
        onChange={handleSelect}
        sx={{ minWidth: "300px" }}>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>{category}</MenuItem>
        ))}
      </Select>
    </Stack>
  );
}
