import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Footer,
  FooterTab,
  Icon,
  Text
} from "native-base";
import { Actions } from 'react-native-router-flux';


export default class FooterComp extends React.Component {
    constructor() {
        super();
        this.state = {active : 1}
        this.activeMenu = this.activeMenu.bind(this);
    }

    activeMenu(num) {
        this.setState({
            active: num
        })
        
        switch (num) {
            case 1:
                Actions.Product();
                break;
        }
    }

    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical active={this.state.active == 1} onPress={() => this.activeMenu(1)}>
                        <Icon name="apps" />
                        <Text>Posts</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}