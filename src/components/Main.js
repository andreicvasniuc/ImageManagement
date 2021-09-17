import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Section from './Section'
import Upload from './Upload'
import Resize from './Resize'

const Main = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [imageName, setImageName] = useState(null);

  useEffect(() => {
    console.log('tabIndex imageName', tabIndex, imageName);
  }, [tabIndex, imageName]);

  const moveToResize = (imageName) => {
    console.log('moveToResize', imageName);
    setImageName(imageName);
    setTabIndex(1);
  };

  return (
    <Section>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>Upload</Tab>
          <Tab>Resize</Tab>
        </TabList>

        <TabPanel>
          <Upload onComplete={moveToResize} />
        </TabPanel>
        <TabPanel>
          <Resize imageName={imageName} />
        </TabPanel>
      </Tabs>
    </Section>
  );
}

export default Main;
