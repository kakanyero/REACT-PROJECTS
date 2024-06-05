import Card from "./components/Card";
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";

function App() {
  
  return (
    /**
     * <>
    <Student name="KAKANYERO" age={28} isStudent={true}/>
    <Student name="INNOCENT" age={12} isStudent={false}/>
    <Student name="SPOODA" age={34} isStudent={false}/>
    <Student name="JANE DOE" age="45" isStudent={true}/>
    <Student/>
    </>
     */

    <>
    <UserGreeting isLoggedIn={false} name="JAMES"/>
    <UserGreeting isLoggedIn={true} name="JAMES"/>
    
    </>
  )
}

export default App
