import CatIndex from './CatIndex'
import React, { Component } from 'react';
 
const CatList = (props) => {
 return (
   <div key={"index"}>
     
     {props.breeds.map (breed => <li>{breed}</li> )}
   </div>
     )
}
 
export default CatList;
