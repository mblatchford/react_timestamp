import React from 'react';

const List = (props) => {
    console.log(props);
    return(
        <ul>
            {props.timestamp.map((timestamp, i)=> {
                return (
                <li 
                    key={i}
                    >
                    {timestamp.toTimeString()}
                </li> 
                );
            })}
        </ul>
    );
};

export default List;