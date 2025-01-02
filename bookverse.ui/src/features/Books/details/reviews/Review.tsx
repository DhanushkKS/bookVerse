import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import useReview from "./useReview.ts";
import ReviewForm from "./create";

const Review = ({ bookId }: { bookId: string }) => {
  const { reviews } = useReview(bookId);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Book Reviews
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
        {reviews.length ? (
          <Grid container spacing={2}>
            {reviews.map((review, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="body1" color="textSecondary">
                      {review?.comment}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1" color="textSecondary">
            No reviews yet. Be the first to leave a review!
          </Typography>
        )}
      </Paper>
      <Box mt={4}>
        <ReviewForm bookId={bookId} />
      </Box>
    </Box>
  );
};

export default Review;
