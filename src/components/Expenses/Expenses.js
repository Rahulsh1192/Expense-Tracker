import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFiteredYear] = useState("2020");
  const filterChageHandler = (selectedYear) => {
    setFiteredYear(selectedYear);
  };

  const filteredExpenses = props.Items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChageHandler}
      />
      <ExpensesList Items={filteredExpenses} />;
    </Card>
  );
}
export default Expenses;
