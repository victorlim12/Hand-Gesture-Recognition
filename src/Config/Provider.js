import React, { useState } from 'react'
import { Handconf } from './Training';

export const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [done, setDone] = useState(0)
  // let gesture = Handconf[0]
  // console.log(gesture)

  return (
    <AppContext.Provider value={[done, setDone]} >
      {props.children}
    </AppContext.Provider>
  )

}
