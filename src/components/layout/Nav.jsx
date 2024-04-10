import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { InputAdornment } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getMyCart } from "../../redux/cartSlice";

export default function Nav() {
  const [postName, setPostName] = useState("");
  const cartState = useSelector((state) => state.cartState);
  const userName = localStorage.getItem("userName");
  const token = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getMyCart());
    }
  }, [cartState.event]);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setPostName(event.target.value);
  };
  const handleSerchPost = () => {
    if (postName != "") {
      navigate(`/search/${postName}`);
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const userRole = localStorage.getItem("userRole");
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {userRole !== "admin" &&
        userRole !== "user" && [
          <Link
            key="login"
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem onClick={handleMenuClose}>Iniciar sesión</MenuItem>
          </Link>,
          <Link
            key="register"
            to="/register"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem onClick={handleMenuClose}>Registrarse</MenuItem>
          </Link>,
        ]}
      {(userRole === "admin" || userRole === "user") && (
        <Link to="/logout" style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem onClick={handleMenuClose}>Cerrar sesión</MenuItem>
        </Link>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="mostrar mis compras"
          color="inherit"
        >
          <Badge badgeContent={cartState.cart.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: "100px" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              logo
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              mt: "10px",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                mt: "10px",
                gap: 30,
              }}
            >
              <InputBase
                placeholder="Buscar productos…"
                inputProps={{ "aria-label": "search" }}
                value={postName}
                onChange={handleInputChange}
                sx={{
                  backgroundColor: "white",
                  width: "30%",
                  borderRadius: "5px",
                  padding: "10px",
                  height: "40px",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleSerchPost} edge="end">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2, mt: "10px" }}>
              <Link
                to="/createPost"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MenuItem onClick={handleMenuClose}>
                  Publicar un producto
                </MenuItem>
              </Link>
              <Link
                to="/createOffer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MenuItem onClick={handleMenuClose}>Crear ofertas</MenuItem>
              </Link>
              <Link
                to="/addPostToOffers"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MenuItem onClick={handleMenuClose}>
                  Añadir productos a mis ofertas
                </MenuItem>
              </Link>
              {userRole === "admin" ? (
                <Link
                  to="/adminMenu"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleMenuClose}>Menu Admin</MenuItem>
                </Link>
              ) : null}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton
                size="large"
                aria-label="mostrar mis compras"
                color="inherit"
              >
                <Badge badgeContent={cartState.cart.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            {userName}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
