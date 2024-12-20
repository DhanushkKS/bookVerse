import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { useGetReviewsByBookQuery } from "../../../../redux/reviews/api.ts";
import { Review } from "../../../../redux/reviews/types.ts";

const useReview = (bookId: string) => {
  const { userInfo } = useSelector((state: RootState) => state.user);
  // const userId = userInfo?.id ?? "";
  const { data } = useGetReviewsByBookQuery({ bookId });
  const reviews: Review[] = data ?? [];
  return { reviews };
};
export default useReview;
