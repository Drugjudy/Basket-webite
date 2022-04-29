import { useState } from "react";
import Tabs from 'react-bootstrap/Tabs'
import { render } from "@testing-library/react";
import { Tab } from "bootstrap";
import About from "../pages/About";


function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <About />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <About />
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <About />
      </Tab>
    </Tabs>
  );
}



export default ControlledTabs;