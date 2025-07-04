const App = () => {
  const [count, setCount] = usePersistState(0, "count");
  return (
    <div className="app-container">
      <Counter count={count} onCountChange={setCount} />
    </div>
  );
};

export default App;
