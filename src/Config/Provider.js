import React, { useState } from 'react'

export const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [done, setDone] = useState(0)

  return (
    <AppContext.Provider value={[done, setDone]} >
      {props.children}
    </AppContext.Provider>
  )

}
