import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./App.css";
const studentData = [
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
    // const [data, setData] = useState(studentData);
    // const [submissions, setSubbmissions] = useState()
  return (
    <>
      {/* Code your solution here */}
      {/* <h1>hello</h1> */}
      <BarChart width={730} height={250} data={studentData}>
        <CartesianGrid stroke="" />
        <XAxis dataKey="name"  />
        <YAxis  />
        {/* {studentData.map((s) => ( */}

    
          <Tooltip />
          <Legend />

        {/* ))} */}

        <Bar dataKey="beavers" fill="#8884d8" />
        <Bar dataKey="stars" fill="#82ca9d" />
      </BarChart>
    </>
  );
}

export default App;
