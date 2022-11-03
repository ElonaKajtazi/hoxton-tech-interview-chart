type Props = {
  handleSubmit: (e: any) => void;
};
export function AddNewStudentForm({ handleSubmit }: Props) {
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input type="text" name="name" placeholder="name" required />
      <input type="text" name="beavers" placeholder="beavers" required />
      <input type="text" name="stars" placeholder="stars" required />
      <button>Add/update student</button>
    </form>
  );
}
