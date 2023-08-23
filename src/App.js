import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./components/auth/login";
import Starter from "./views/Starter";
import FullLayout from "./layouts/FullLayout";
import RoomManagement from "./views/RoomManagement";
import BuildingMap from "./views/BuildingMap";
import StudentInformation from "./views/StudentInformation";
import Registration from './views/Registration';
import Expenses from './views/Expenses';
import Invoices from './views/Invoices';
import GenerateInvoices from './views/GenerateInvoice';

import { store } from "./store";
import { Provider } from "react-redux";


const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<FullLayout />}>
            <Route index element={<Starter />} />
            <Route path="roomManagement" element={<RoomManagement />} />
            <Route path="buildingMap" element={<BuildingMap />} />
            <Route path="studentInformation" element={<StudentInformation />} />
            <Route path="registration" element={<Registration />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="generateInvoice" element={<GenerateInvoices />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    </Provider>
  );
}

export default App;
