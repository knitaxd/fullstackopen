import { Content } from "./Content"
import { Header } from "./Header"
import { Total } from "./Total"

export const Course = ({course}) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </>
  )
}
