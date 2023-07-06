/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

import { InputProduct } from "./components";
import ProductList from "./components/list-products";
import { styles } from "./styles";


export default function index() {
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState(null)

  useEffect(() => {
    console.log(product);
    console.log(products)
  }, [product, products]);

  useEffect(() => {

    console.log(deleteProduct)

  }, [deleteProduct])


  const onHandlerAddProduct = () => {

    if (product !== "") {
      setProducts([...products, { id: Date.now().toString(36), value: product }])

      setProduct("")
    }



  }

  const onHandlerDelete = (id) => {

    setDeleteProduct(id)

    setProducts((prevProducts) => prevProducts.filter(product => product.id !== id))


  }


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputProduct
          product={product}
          setProduct={setProduct}
          onHandlerAddProduct={onHandlerAddProduct}
          products={products}
          setProducts={setProducts} />
        <View style={styles.main}>
          <ProductList setDeleteProduct={setDeleteProduct} onHandlerDelete={onHandlerDelete} products={products} />
        </View>
      </View>
    </SafeAreaView>
  );
}

