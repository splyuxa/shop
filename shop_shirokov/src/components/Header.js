import { AppBar, Toolbar, Typography, IconButton, Container, Badge } from '@mui/material'
import { ShoppingBasket } from '@mui/icons-material';
import { useCart } from '../hooks/useCart';

export default function Header() {
  const { goods, openCart } = useCart();
  
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Store
          </Typography>
          <IconButton color="inherit" onClick={openCart}>
            <ShoppingBasket />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
