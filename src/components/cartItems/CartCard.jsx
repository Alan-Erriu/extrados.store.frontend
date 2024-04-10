import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addOneToCart, deleteOnePostFromCart } from "../../redux/cartSlice";
const CartCard = ({ img, name, quantity, price, id }) => {
  const dispatch = useDispatch();

  const hadleClickDeleteOnePostById = () => {
    dispatch(deleteOnePostFromCart(id));
  };
  const hadleClickAddOnToCart = () => {
    const postData = {
      post_id: id,
      quantity: 1,
      name,
      price,
      img,
    };

    dispatch(addOneToCart(postData));
  };
  return (
    <Card
      className="itemCard"
      sx={{
        width: { xs: "100%", sm: "100%", md: "75%", lg: "50%", xl: "50%" },
        height: {
          xs: "500px",
          sm: "150px",
          md: "150px",
          lg: "150px",
          xl: "150px",
        },
        display: "flex",

        justifyContent: "space-between",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          height: "150px",
          justifyContent: "center",
        }}
      >
        <CardMedia
          sx={{
            width: 120,
            height: 120,
            objectFit: "contain",
          }}
          component="img"
          image={img}
          alt="post"
        />
      </CardContent>

      <CardHeader sx={{ textAlign: "center" }} title={name} />

      <CardActions className="itemCardActions">
        <Typography variant="h5" color="green">
          $ {price * quantity}
        </Typography>
        <CardActions>
          <IconButton onClick={hadleClickDeleteOnePostById}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h5" color="dark">
            {quantity}
          </Typography>
          <IconButton onClick={hadleClickAddOnToCart}>
            <AddIcon />
          </IconButton>
        </CardActions>
      </CardActions>
    </Card>
  );
};

export default CartCard;
