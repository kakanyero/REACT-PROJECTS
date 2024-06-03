import PropTypes from "prop-types"
function Student(props){
    return(
        <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "YES " : "NO"}</p>
        </div>
    );
}
Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}
Student.defaultProps={
    name:"JOHN DEFAULT",
    age:2000,
    isStudent:"false"
}
export default Student