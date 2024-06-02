import profilePic from '../assets/images/foralx.jpg'
function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="pro pic" className='image' />
            <p className='card-title'>Software developer</p>
            <p className='card-des'>Hi i am kakanyero innocent i am learning React</p>
        </div>
    );
}
export default Card