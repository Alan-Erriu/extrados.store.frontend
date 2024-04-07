import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import imgPath from "../../utilities/Data.utilities";
const BrandOrCategoryPreview = ({ categoryOrBrand }) => {
  const { BrandOrCategoryImg, BrandOrCategoryName } = categoryOrBrand;

  return (
    <Card sx={{ width: 550, height: 600 }}>
      <CardMedia
        sx={{
          objectFit: "contain",
        }}
        component="img"
        alt="post"
        height="300"
        image={BrandOrCategoryImg == "" ? imgPath : BrandOrCategoryImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {BrandOrCategoryName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BrandOrCategoryPreview;
