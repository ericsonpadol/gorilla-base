import React, { Fragment } from 'react'
import { StyleSheet, FlatList, Text } from 'react-native'

// app component
import OrderButton from '../buttons/OrderButton';

import listData from '../../data/order.data.json';

const OrderList = () => {
  return (
    <Fragment>
      <FlatList style={[styles.container]} data={listData} renderItem={(record) => {
        return (
          <OrderButton key={record.item.key} dataSource={record.item}>
            {`${record.item.qty} ${record.item.product}`}
          </OrderButton>
        )
      }} />
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  }
});

export default OrderList
