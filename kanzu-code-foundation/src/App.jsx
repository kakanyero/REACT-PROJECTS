import Card from "./components/Card";
import Student from "./components/Student";
function App() {
  
  return (
    <>
    <Student name="KAKANYERO" age={28} isStudent={true}/>
    <Student name="INNOCENT" age={12} isStudent={false}/>
    <Student name="SPOODA" age={34} isStudent={false}/>
    <Student name="JANE DOE" age="45" isStudent={true}/>
    </>
  )
}

export default App
