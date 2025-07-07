import { AiFillCloud } from "react-icons/ai";

interface Props {
  searchedValue: string;
  onSearchedValueChange: (value: string) => void;
}

const ActionBar = ({ searchedValue, onSearchedValueChange }: Props) => {
  return (
    <>
      <h1 className="mb-4 flex items-center justify-center gap-2 text-xl font-extrabold">
        <AiFillCloud className="size-8 text-indigo-300 dark:text-indigo-200" />

        <span>هواشناسی</span>
      </h1>

      <ThemeToggleButton />

      <TextField
        label="شهر"
        name="city"
        placeholder="نام شهر را وارد کنید..."
        value={searchedValue}
        onChange={(event) => onSearchedValueChange(event.target.value)}
      />
    </>
  );
};

export default ActionBar;
