import React from 'react';
import { Text, View } from 'react-native';
import Product from './pages/Product'
import FooterComp from './components/FooterComp'
import { Container, Header, Title, Content, Left, Right, Body, Icon } from 'native-base';
import { Router, Scene, Stack } from 'react-native-router-flux';

export default class Index extends React.Component {
  render() {
    return (
      <Container>
        	<Router hideNavBar={true} showNavigationBar={false} navigationBarStyle={{ backgroundColor: '#fff', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
            <Stack key="root" hideNavBar={true}> 
              <Scene
                key="Product"
                component={Product}
                title="Product"
              />
            </Stack>
				  </Router>

				<FooterComp/>
      </Container>
    );
  }
}