interface Props {
  searchedValue: string;
  setSearchedValue: (value: string) => void;
  itemCount: number;
}

const ActionBar = ({ itemCount, searchedValue, setSearchedValue }: Props) => {
  return (
    <Card className="flex flex-col items-center justify-between gap-4 overflow-visible rounded-none border-b-2 border-b-indigo-500 p-4 sm:flex-row sm:gap-0 sm:p-8">
      <h1 className="text-xl font-extrabold sm:text-3xl">محصولات</h1>

      <div className="flex flex-col gap-10 sm:flex-row">
        <TextField
          name="search"
          label="جستجو"
          disabled={!itemCount}
          value={searchedValue}
          onChange={(event) => setSearchedValue(event.target.value)}
        />

        <ThemeToggleButton />
      </div>
    </Card>
  );
};

export default ActionBar;
