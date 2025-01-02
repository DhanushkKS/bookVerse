import useReview from "./useReview.ts";
import ReviewForm from "./create";

const Review = ({ bookId }: { bookId: string }) => {
  const { reviews } = useReview(bookId);
  return (
    <div>
      review
      {reviews.map((review) => (
        <>{review?.comment ?? "Dummy review"}</>
      ))}
      <ReviewForm bookId={bookId} />
    </div>
  );
};
export default Review;
