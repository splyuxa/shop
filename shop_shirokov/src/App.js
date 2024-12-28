import { Alert, Box, Button, Container, Stack, Typography } from "@mui/material";
import GoodsList from "./components/ProductList";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { getProducts } from "./api/api"
import CategorySelect from "./components/Filter";
import Footer from "./components/Footer";
import { ArrowForward } from "@mui/icons-material";

const limit = 12;

export default function App() {
  const [products, setProducts] = useState([]);
  const [isBusy, setIsBusy] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState();

  const load = async () => {
    setIsBusy(true);
    try {
      const result = await getProducts({ page, limit, category });
      setProducts([...products, ...result]);
      setPage(page + 1);
      setCanLoadMore(result.length === limit);
    } catch (err) {
      setProducts([]);
    } finally {
      setIsBusy(false);
    }
  }

  const handleCategoryChange = (event) => {
    setProducts([]);
    setPage(1);
    setCategory(event.newValue);
  }

  useEffect(() => {
    load();
  }, [category]);

  return (
    <Box sx={{
      backgroundColor: 'background.paper',
      mt: { xs: "56px", sm: "64px" },
      minHeight: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" }
    }}>
      
      <Header />

      <Container sx={{pt: "1rem", pb: "1rem"}}>
        <Stack direction="column" spacing={3} alignItems="center">

          <CategorySelect onChange={handleCategoryChange} />

          {products.length != 0 && <GoodsList items={products} />}

          {products.length == 0 && !isBusy && <Alert severity="info">Список пуст</Alert>}

          {isBusy && <Typography variant="h5">Загрузка...</Typography>}

          {canLoadMore && !isBusy && <Button endIcon={<ArrowForward />} variant="contained" onClick={load}>Следующая страница</Button>}

          <Footer />

        </Stack>
      </Container>

    </Box>
  );
}
