import profilePic from './src/assets/images/for alx.jpg'
function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="pro pic" />
            <p className='card-title'>Software developer</p>
            <p className='card-des'>Hi i am kakanyero innocent i am learning React</p>
        </div>
    );
}
export default Card