import React from 'react';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import ContentExplorer from './components/elements/ContentExplorer';
import ContentExplorerRecents from './components/elements/ContentExplorerRecents';
import ContentExplorerMetadata from './components/elements/ContentExplorerMetadata';
import ContentPicker from './components/elements/ContentPicker';
import ContentUploader from './components/elements/ContentUploader';
import ContentPreview from './components/elements/ContentPreview';

import 'box-ui-elements/es/styles/base.scss';
import './App.css';
export default function App() {

  return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <ContentExplorer  />}/>
          <Route exact path="/content-explorer" render={() => <ContentExplorer />}/>
          <Route exact path="/content-explorer-recents" render={() => <ContentExplorerRecents />}/>
          <Route exact path="/metadata-query" render={() => <ContentExplorerMetadata />}/>
          <Route exact path="/content-picker" render={() => <ContentPicker />}/>
          <Route exact path="/content-uploader" render={() => <ContentUploader />}/>
          <Route exact path="/content-preview" render={() => <ContentPreview />}/>
        </Switch>
    </Router>
    
  );
}
