import React, {useState} from 'react'

function Counter2() {
    const [myArray, updateMyArray] = useState([]);

    const onClick = () => {
        updateMyArray( arr => [...arr, `${arr.length}`]);
    };
    return [
        <input type="button" onClick={ onClick } value="Update" />,

        <div>{myArray.map( e =>
          <ul>{ e }</ul>
        )}
        </div>
    ];
}

export default Counter2
