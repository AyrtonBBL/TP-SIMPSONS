interface AvatarProps {
 firstName: string;
 lastName: string;
 image: string;
}

function Avatar(props: AvatarProps) {
 return (
 <section>
    <img src= {props.image} alt={props.firstName}/>
 <h1>
     {props.firstName} {props.lastName}
 </h1>
 </section>
 );
}


export default Avatar;