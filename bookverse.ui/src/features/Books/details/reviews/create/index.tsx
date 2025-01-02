import { Card, CardContent, Typography, Box } from "@mui/material";
import Form from "./components/Form.tsx";

type ReviewFormProps = {
  bookId: string;
};

const ReviewForm = ({ bookId }: ReviewFormProps) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Card
        sx={{
          maxWidth: "100%",
          margin: "auto",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Add a Review
          </Typography>
          <Form
            columns={12}
            title="Add Review"
            width={"100%"}
            bookId={bookId}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ReviewForm;
