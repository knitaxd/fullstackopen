export const Total = ({parts}) => {
    const total = parts.reduce((current, part)=> {
        return current + part.exercises
    },0)
    return(
        <p><b>Total of exercises: {total}</b></p>
    )
}
    
