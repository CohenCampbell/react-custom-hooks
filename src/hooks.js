import React, {useState} from 'react';


function useFlip(initial = true){
  const [isFacingUp, setIsFacingUp] = useState(initial);
  const flipCard = () => {
    setIsFacingUp(isFacingUp => !isFacingUp)
  }
  return [isFacingUp, flipCard]
}

export default useFlip;