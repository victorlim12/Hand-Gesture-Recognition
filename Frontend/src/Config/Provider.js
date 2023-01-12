import React, { useState } from 'react'

export const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [done, setDone] = useState(0)
  const [time, setTime] = useState([1,1,1])

  return (
    <AppContext.Provider value={[done, setDone, time, setTime]} >
      {props.children}
    </AppContext.Provider>
  )

}
