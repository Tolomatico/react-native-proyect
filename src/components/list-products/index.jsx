/* eslint-disable prettier/prettier */
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./listStyles"
import Item from "../item/item";

const ProductList = ({ products,onHandlerDelete }) => {



    

    return (
        <View style={styles.containerList}>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({item})=>(

                       <Item item={item} onHandlerDelete={onHandlerDelete}  />
                )}
            
            />
        </View>
    );
};

export default ProductList;
