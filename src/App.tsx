import { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AddNewStudentForm } from "./AddNewStudentForm";
import "./App.css";
import { Buttons } from "./components/Buttons";
import { TheBarChart } from "./components/TheBarChart";
import { TheLineChart } from "./components/TheLineChart";
import { TheAreaChart } from "./TheAreaChart";
export type Student = {
  name: string;
  submissions: {
    beavers: number;
    stars: number;
  };
};
const studentData: Student[] = [
  {
    name: "Stephen",
    submissions: {
      beavers: 3,
      stars: 2,
    },
  },
  {
    name: "Eduardo",
    submissions: {
      beavers: 7,
      stars: 1,
    },
  },
  {
    name: "Pepe",
    submissions: {
      beavers: 6,
      stars: 9,
    },
  },
  {
    name: "Gigachad",
    submissions: {
      beavers: 0,
      stars: 10,
    },
  },
];

// Using the Recharted library, create a graph as similar as you can, to the one in the #Classroom

function App() {
  const [initialData, setInitialData] = useState(studentData);
  const [chartType, setChartType] = useState("line");
  function updateStudent(name: string, beavers: number, stars: number) {
    const studentDataCopy: Student[] = structuredClone(initialData);
    const match = studentDataCopy.find(
      (student) => student.name.toLowerCase() === name.toLowerCase()
    )!;
    match.submissions.beavers = beavers;
    match.submissions.stars = stars;
    setInitialData(studentDataCopy);
  }
  function createStudent(name: string, beavers: number, stars: number) {
    const newStudent = {
      name,
      submissions: {
        beavers,
        stars,
      },
    };
    setInitialData([...initialData, newStudent]);
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    const name = e.target.name.value;
    const beavers = Number(e.target.beavers.value);
    const stars = Number(e.target.stars.value);

    const existingUser = initialData.some(
      (student) => student.name.toLowerCase() === name.toLowerCase()
    );
    //if a student with this name exists
    if (existingUser) {
      //update the student
      updateStudent(name, beavers, stars);
    } else {
      // create a new user
      createStudent(name, beavers, stars);
    }
    e.target.reset();
  }
  return (
    <>
      <Buttons setChartType={setChartType} />
      {chartType === "bar" ? <TheBarChart initialData={initialData} /> : null}

      {chartType === "line" ? <TheLineChart initialData={initialData} /> : null}
      {chartType === "area" ? <TheAreaChart initialData={initialData} /> : null}
      <AddNewStudentForm handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
