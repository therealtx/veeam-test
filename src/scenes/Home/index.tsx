import Tabs from "../../components/Tabs";
import FormGenerator from "../../components/FormGenerator";
import FormGeneratedResult from "../../components/FormGeneratedResult";

import style from "./index.module.scss";

const Home = () => {
  const tabs = [{
    label: "Config",
    content: <FormGenerator />
  }, {
    label: "Result",
    content: <FormGeneratedResult />
  }];

  return (
    <div className={style.home}>
      <Tabs tabs={tabs}/>
    </div>
  )
};

export default Home;
