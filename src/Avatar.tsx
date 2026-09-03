interface AvatarProps {
 firstName: string;
 lastName: string;
 image: string;
}

function Avatar(props: AvatarProps) {
 return (
 <section>
    <img src= {props.image} alt={props.firstName}/>
 <p>
     {props.firstName}
{props.lastName}
 </p>
 </section>
 );
}


export default Avatar;