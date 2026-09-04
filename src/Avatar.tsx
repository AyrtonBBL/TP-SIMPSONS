import { useState } from "react";

interface AvatarProps {
 firstName: string;
 lastName: string;
 image: string;
 initialDonuts: number;
}

function Avatar(props: AvatarProps) {
    const [donuts, setDonuts] = useState(props.initialDonuts);

 return (
 <section>
    <img src= {props.image} alt={props.firstName}/>
 <h1>
     {props.firstName} {props.lastName}
 </h1>
 <button onClick={() => setDonuts(donuts + 1)}>
    🍩 {donuts}
 </button>
 </section>
 );
}

export default Avatar;

