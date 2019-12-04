import React, {Component} from 'react';
import {View, Button} from 'react-native';
import Spinner from 'react-native-spinner';

class App extends Component {
  state = {
    visible: false,
  };

  showSpinner = () => {
    this.setState({visible: true}, () => {
      setTimeout(() => {
        this.setState({visible: false});
      }, 3000);
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFF',
        }}>
        <Button title="Show spinner" onPress={this.showSpinner} />
        <Spinner
          color="red"
          size="small"
          backgroundColor="#FFF"
          visible={this.state.visible}
          onClose={() => this.setState({visible: false})}
        />
      </View>
    );
  }
}

export default App;
