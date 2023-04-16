const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Course course={course.parts} />
    </div>
  );
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Course = (props) => {
  const { course } = props;
  console.log(props);
  console.log(
    course.map((parts) => {
      <p>{[course]}</p>;
    })
  );
  return <p>{course.parts}</p>;
};

export default App;

// const App = () => {
//   /*const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14 */

//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <h1>{course.name}</h1>
//       <span>{course.parts.map(d => <p key={d.name}>{d.name} {d.exercises}</p>)}</span>
//     </div>
//   )

// }

// const Header = (props) => {
//   console.log(props)
//   return <h1>{props.course}</h1>
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part1 part1={props.part1} exercises1={props.exercises1} />
//       <Part2 part2={props.part2} exercises2={props.exercises2} />
//       <Part3 part3={props.part3} exercises3={props.exercises3} />
//     </div>
//   )
// }

// const Part1 = (props) => {
//   return <p>{props.part1} {props.exercises1}</p>
// }

// const Part2 = (props) => {
//   return <p>{props.part2} {props.exercises2}</p>
// }

// const Part3 = (props) => {
//   return <p>{props.part3} {props.exercises3}</p>
// }

// const Total = (props) => {
//   return <p>Number of exercises {props.exercises + props.exercises + props.exercises}</p>
// }

// export default App;
