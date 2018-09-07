'use strict';

import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image, Dimensions} from "react-native";
import product from "../assets/styles/style";
import css from "../assets/styles/product";
import {Actions} from "react-native-router-flux";
import { Container } from 'native-base';

const {width, height, scale} = Dimensions.get("window");

export default class ProductItem extends Component {
	render() {
		return (
            <TouchableOpacity style={[css.cards]}>
                <Image source={{uri: this.props.product.images[0].src}} style={{width: '100%', height: width}}></Image>

                <Text style={css.productName}>{this.props.product.name}</Text>

                <View style={{flexDirection:'row'}}>
                    <Text style={[css.discountPrice, {paddingBottom: 12}]}>{this.props.product.price} ლარი</Text>
                </View>
            </TouchableOpacity>
		);
	}

}
