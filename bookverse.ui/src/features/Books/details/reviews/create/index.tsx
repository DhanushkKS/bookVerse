import Form from "./components/Form.tsx";

type ReviewFormProps = {
  bookId: string;
};
const ReviewForm = ({ bookId }: ReviewFormProps) => {
  return (
    <>
      <Form columns={6} title="Add Review" width={"50%"} bookId={bookId} />
    </>
  );
};
export default ReviewForm;
