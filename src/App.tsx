import React, { createContext, useState } from 'react';
import "./App.scss"
import {Layout} from "./Components/layout";

//data
import {Tag, Team, Month} from "./Data/data";

type Criteria = {
  month: Month,
  tags: Tag[],
  teams: Team[]
}

const defaultCriteria: Criteria = {
  month: "Jan",
  tags: [],
  teams: []
}

export const GlobalContext = createContext<{criteria: Criteria, setCriteria: any}>({criteria: defaultCriteria, setCriteria: undefined});

function App() {
  const [criteria, setCriteria] = useState<Criteria>(defaultCriteria);
  return (
    <div className="App">
      <GlobalContext.Provider value={{criteria, setCriteria}}>
        <Layout/>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
