import React from "react"
import "./card.styles.css";

const Card= props =>(
<div className="card-container ">
<img src={`https://robohash.org/${props.mons.id}?set=set2&size=180x180`} alt="Monsters" />
  <h2>
      { props.mons.name }
</h2>
<p>{props.mons.email}</p>
</div>


);
export default Card;