import React from 'react';

function GetTime(props){
    return(
        <form onSubmit={props.onSubmit}>
            <button type="submit"> New Timestamp </button>
        </form>
    )
}

export default GetTime;
