import React, {Component} from 'react';
import {View, Button} from 'react-native';
import Spinner from 'react-native-modal-spinner';

class App extends Component {
  state = {
    isLoading: false,
    isModalVisible: false,
  };

  showSpinner = () => {
    this.setState({isModalVisible: true, isLoading: true}, () => {
      setTimeout(() => {
        this.setState({isModalVisible: false, isLoading: false});
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
        <Button title="Show spiner" onPress={this.showSpinner} />
        <Spinner
          spinnerColor="red"
          spinnerSize="small"
          spinnerBackgroundColor="#FFF"
          isLoading={this.state.isLoading}
          isModalVisible={this.state.isModalVisible}
          closeModal={() => this.setState({isModalVisible: false})}
        />
      </View>
    );
  }
}

export default App;
