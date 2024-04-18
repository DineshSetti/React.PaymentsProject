import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const addresses = [
  "Narendra center",
  "Root School Street",
  "Anytown",
  "99999",
  "Hyderabad",
];
const payments = [
  { name: "Card type:", detail: "Visa" },
  { name: "Card holder:", detail: "Mr. Dinesh Setti" },
  { name: "Card number:", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date:", detail: "04/2024" },
];

export default function Review() {
  const [orderPlaced, setOrderPlaced] = React.useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  const products = [
    { name: "Product 1", price: 29.99 },
    { name: "Product 2", price: 24.99 },
    { name: "Product 3", price: 39.99 },
  ];

  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );

  const shippingCost = 9.99;

  return (
    <Stack spacing={2} maxWidth="500px" margin="auto">
      {orderPlaced ? (
        <Stack direction="column" alignItems="center">
          {" "}
          <CheckCircleIcon
            sx={{
              fontSize: 48,
              color: "success.main",
              borderRadius: "50%",
              padding: 1,
            }}
          />{" "}
          <Typography variant="h4">Thank you for your order!</Typography>
          <Typography variant="body1">
            Your order number is #140396. We have emailed your order
            confirmation and will update you once it's shipped.
          </Typography>
        </Stack>
      ) : (
        <>
          <Typography variant="subtitle1">Review Your Order</Typography>
          <Stack width="100%" direction="row" justifyContent="space-between">
            <Typography variant="subtitle2" gutterBottom>
              Products
            </Typography>
            <Typography variant="subtitle2" gutterBottom align="right">
              Price
            </Typography>
          </Stack>
          <Divider />
          <Stack width="100%" direction="row" justifyContent="space-between">
            <Stack>
              {products.map((product, index) => (
                <Typography key={index} gutterBottom>
                  {product.name}
                </Typography>
              ))}
            </Stack>
            <Stack>
              {products.map((product, index) => (
                <Typography key={index} gutterBottom align="right">
                  ${product.price.toFixed(2)}
                </Typography>
              ))}
            </Stack>
          </Stack>
          <Divider />
          <Stack width="100%" direction="row" justifyContent="space-between">
            <Typography variant="subtitle2" gutterBottom>
              Shipping
            </Typography>
            <Typography gutterBottom align="right">
              Plus taxes: ${shippingCost.toFixed(2)}
            </Typography>
          </Stack>
          <Divider />
          <Stack width="100%" direction="row" justifyContent="space-between">
            <Typography variant="subtitle2" gutterBottom>
              Total
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="right">
              ${totalPrice.toFixed(2)}
            </Typography>
          </Stack>
          <Divider />
          <Typography variant="subtitle2" gutterBottom>
            Shipment details
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography color="text.secondary" gutterBottom>
            {addresses.join(", ")}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Payment details
          </Typography>
          {payments.map((payment, index) => (
            <Typography key={index} gutterBottom>
              {payment.name} {payment.detail}
            </Typography>
          ))}
          <Stack direction="row" justifyContent="center" mt={4}>
            <Button variant="contained" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </Stack>
        </>
      )}
    </Stack>
  );
}
