import React, {useState} from 'react'

const useStatehook = (text, maxLength) => {
    const [hidden, setHidden] = useState(true);

    if (text <= maxLength){
        return <span>{text}</span>
    }
    return (
      <>
      <span>
          {hidden?}
      </span>
      </>
    )
}

export default useStatehook
