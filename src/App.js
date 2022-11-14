import React from "react";
import ReferAndEarn from "./pages/referAndEarn/ReferAndEarn";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Instruction from "./components/instruction/Instruction";
import FriendsReferred from "./components/friendsReferred/FriendsReferred";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReferAndEarn />} >
            <Route index element={<Instruction />} />
            <Route path="instructions" element={<Instruction />} />
            <Route path="friends" element={<FriendsReferred />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
