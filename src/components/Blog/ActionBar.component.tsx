import { AiFillPlusCircle } from "react-icons/ai";

interface Props {
  searchedValue: string;
  onSearchedValueChange: (value: string) => void;
}

const ActionBar = ({ searchedValue, onSearchedValueChange }: Props) => {
  return (
    <Card className="fixed bottom-0 left-[50%] z-10 flex w-full translate-x-[-50%] flex-col gap-2 rounded-none border-0 px-8 py-4 opacity-95 hover:border-0 md:bottom-4 md:w-124 md:rounded-xl">
      <div className="flex items-center justify-between">
        <ThemeToggleButton />

        <Modal.Open
          render={({ open }) => (
            <BaseButton icon onClick={open}>
              <AiFillPlusCircle />
            </BaseButton>
          )}
        />
      </div>

      <TextField
        label="جستجو"
        name="search"
        value={searchedValue}
        onChange={(event) => onSearchedValueChange(event.target.value)}
      />
    </Card>
  );
};

export default ActionBar;
