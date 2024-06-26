const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part
        exerciseName={props.exerciseName1}
        exerciseNum={props.exerciseNum1}
      />
      <Part
        exerciseName={props.exerciseName2}
        exerciseNum={props.exerciseNum2}
      />
      <Part
        exerciseName={props.exerciseName3}
        exerciseNum={props.exerciseNum3}
      />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.exerciseName} {props.exerciseNum}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} />
      <Content
        exerciseName1={part1} exerciseNum1={exercises1}
        exerciseName2={part2} exerciseNum2={exercises2}
        exerciseName3={part3} exerciseNum3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
