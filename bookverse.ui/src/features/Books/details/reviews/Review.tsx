import useReview from "./useReview.ts";

const Review = ({ bookId }) => {
  const { reviews } = useReview(bookId);
  return (
    <div>
      {reviews.map((review) => (
        <>{review.comment ?? "Dummy review"}</>
      ))}
    </div>
  );
};
export default Review;
