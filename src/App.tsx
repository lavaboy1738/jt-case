import React, { createContext, useState } from 'react';
import "./App.scss"
import {Layout} from "./Components/layout";
import {Intro} from "./Components/intro";

//data
import {Tag, Team, Month, Transaction} from "./Data/data";

export type Criteria = {
  month: Month,
  tags: Tag[],
  teams: Team[],
  transactions: Transaction[]
}

const defaultCriteria: Criteria = {
  month: "Jan",
  tags: [],
  teams: [],
  transactions: []
}

export const GlobalContext = createContext<{criteria: Criteria, setCriteria: any}>({criteria: defaultCriteria, setCriteria: null});

function App() {
  const [criteria, setCriteria] = useState<Criteria>(defaultCriteria);
  return (
    <div className="App">
      <Intro/>
      <GlobalContext.Provider value={{criteria, setCriteria}}>
        <Layout/>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
