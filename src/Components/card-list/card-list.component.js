import React from "react";
import "./card-list.styles.css";
import Card from "./Card/card.component";

const Cardlist= props => (

 <div className="card-list">
     
{
  props.obj.map(mons =>(
  <Card key={mons.id} mons={mons} />
  ))
}
</div>
);

export default Cardlist;
