import PropTypes from 'prop-types'

function UserGreeting(props){

    const loggedUser=<p className="logged">Welcome {props.name}</p>;
    const notLoggedUser= <p className="not-logged">Please log In</p>
    
    return(props.isLoggedIn?loggedUser:notLoggedUser);
    /**
     * 
     * if(props.isLoggedIn){
        return(
            <p className="logged">Welcome {props.name}</p>
        );
    }
    else{
        return(
            <p className="not-logged">Please log In</p>
        );
    }
}
     */
}
UserGreeting.prototype={
    isLoggedIn:PropTypes.bool,
    name:PropTypes.string
}
UserGreeting.defaultProps={
    isLoggedIn:"false",
    name:"STRANGER"
}
export default UserGreeting