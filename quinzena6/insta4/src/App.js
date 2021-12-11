import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post'
;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post>
          <postObject></postObject>
        </Post>
      </div>
    );
  }
}

export default App;
