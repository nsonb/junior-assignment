import { useEffect, useState } from "react";

export interface refElement extends HTMLDivElement {
    current?:  {
        offsetWidth: number
        offsetHeight: number
    }
}

export const useContainerDimensions = (myRef : refElement) => {
    const getDimensions = () => ({
      width: myRef?.current?.offsetWidth || 0,
      height: myRef?.current?.offsetHeight || 0
    })
  
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
    useEffect(() => {
      const handleResize = () => {
        setDimensions(getDimensions())
      }
  
      if (myRef.current) {
        setDimensions(getDimensions())
      }
  
      window.addEventListener("resize", handleResize)
  
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [myRef])
  
    return dimensions;
  };