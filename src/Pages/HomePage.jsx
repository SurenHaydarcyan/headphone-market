import ContainerFour from "../components/containers/HomeContainer/ContainerFour";
import ContainerThree from "../components/containers/HomeContainer/ContainerThree";
import ContainerTwo from "../components/containers/HomeContainer/ContainerTwo";
import ContanerFirst from "../components/containers/HomeContainer/ContanerFirst";

const HomePage = () => {
  return (
    <div >
      <ContanerFirst/>
      <ContainerTwo/>
      <ContainerThree/>
      <ContainerFour/>
    </div>
  );
};

export default HomePage;
