import { Box, Typography } from "@mui/material";
import * as React from "react";
import Container from "../Container/Container";
import Item from "./Item";
import Product from "./Product.interface";
import styles from "./Product.module.css";
type Props = {
  title: string;
  subTitle: string;
  products: Product[];
};

const Products: React.FunctionComponent<Props> = ({
  title,
  subTitle,
  products,
}) => {
  return (
    <Box bgcolor="var(--white)">
      <Container>
        <Box py="2rem">
          <Box>
            <Typography variant="h3" color="var(--primary)">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="var(--text-muted)">
              {subTitle}
            </Typography>
          </Box>
          <Box py="1rem" className={styles?.wrapper}>
            {products.map((item) => (
              <Item {...item} key={item.id} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Products;