import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useContext } from "react";
import EventForm from "./pages/FormEvent";
import Calendar from "./pages/Calendar";
import NotFoundPage from "./pages/NotFoundPage";
import Auth from "./pages/Auth";

import Context from "./store/Context";
import Detail from "./pages/Detail";

function App() {
  const ctx = useContext(Context);
  // console.log(ctx);
  return (
    <Router>
      <main>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Auth />} />
          <Route path="/todo/:detail" element={<Detail />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/event/:id" element={<EventForm />} />
          <Route path="/event/new" element={<EventForm />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
