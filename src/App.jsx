import AvailablePosition from "./components/AvailablePosition";
import EmployessGraph from "./components/EmployessGraph";
import Layout from "./components/Layout";
import TitleNotification from "./components/TitleNotification";

const App = () => {
  return (
    <Layout>
      <div>oi</div>
      <AvailablePosition />
      <EmployessGraph />
      <TitleNotification />
    </Layout>
  );
};

export default App;
