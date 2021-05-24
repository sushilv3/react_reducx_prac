import React from 'react';

const User = (props)=>{
    const {data} = props;
return(<>
    <h2>User component {data.name} and age is {data.age}</h2>
    </>)
}
export default User;