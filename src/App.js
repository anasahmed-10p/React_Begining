import Expenses from "./components/Expenses/Expenses"
function App() {

  const expenses = [
    { date: new Date(20, 12, 21), title: 'car insurance', amount: '$1234' },
    { date: new Date(20, 12, 21), title: 'car insurance', amount: '$1234' },
    { date: new Date(20, 12, 21), title: 'car insurance', amount: '$1234' },
    { date: new Date(20, 12, 21), title: 'car insurance', amount: '$1234' },
    { date: new Date(20, 12, 21), title: 'car insurance', amount: '$1234' },
    { date: new Date(20, 12, 21), title: 'car insurance', amount: '$1234' },
    { date: new Date(20, 12, 21), title: 'car insurance', amount: '$1234' },
    { date: new Date(20, 12, 21), title: 'car insurance', amount: '$1234' },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
