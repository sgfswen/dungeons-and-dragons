import * as React from 'react';

import {BasicForm} from 'components/forms/Basic/Basic';
import {Header} from 'components/Header/Header';

export class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Header />
        <BasicForm />
      </div>
    );
  }
}
