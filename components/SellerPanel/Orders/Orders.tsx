import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import { CategoryIcon, CheckedDeliveryIcon, DeliveryIcon, SettingIcon, TimerIcon, UnCheckedDeliveryIcon } from '../../SVGs/SVGs'
import OrderItem from './OrderItem'
import OrderOption from './OrderOption'

type Props = {}

const OrderOptions = [
  { "name": "سفارش ها", "icon": <DeliveryIcon />, "badge": "", "id": "0" },
  { "name": "پرداخت شده", "icon": <DeliveryIcon />, "badge": "", "id": "1" },
  { "name": "در حال پردازش", "icon": <TimerIcon />, "badge": "", "id": "2" },
  { "name": "ارسال شده", "icon": <CheckedDeliveryIcon />, "badge": "", "id": "3" },
  { "name": "لغو شده", "icon": <UnCheckedDeliveryIcon />, "badge": "", "id": "4" },
]
const orders = [
  [{
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "3",
    "transitionsStatus": "queue",
    "quantity": "0",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  },
  {
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "1",
    "transitionsStatus": "queue",
    "quantity": "1",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  }],
  [{
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "2",
    "transitionsStatus": "queue",
    "quantity": "1",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  },
  {
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "3",
    "transitionsStatus": "queue",
    "quantity": "1",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  },
  {
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "3",
    "transitionsStatus": "queue",
    "quantity": "0",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  },
  {
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "4",
    "transitionsStatus": "queue",
    "quantity": "1",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  },
  {
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "2",
    "transitionsStatus": "queue",
    "quantity": "1",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  }],
  [{
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "1",
    "transitionsStatus": "queue",
    "quantity": "1",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  }],
  [{
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "3",
    "transitionsStatus": "queue",
    "quantity": "0",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  },
  {
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "1",
    "transitionsStatus": "queue",
    "quantity": "1",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  }],
  [{
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "2",
    "transitionsStatus": "queue",
    "quantity": "1",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  },
  {
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "3",
    "transitionsStatus": "queue",
    "quantity": "1",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  },
  {
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "3",
    "transitionsStatus": "queue",
    "quantity": "0",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  },
  {
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "4",
    "transitionsStatus": "queue",
    "quantity": "1",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  },
  {
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "2",
    "transitionsStatus": "queue",
    "quantity": "1",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  }],
  [{
    "customer-name": "امیرعباس",
    "customer-fname": "رضائی",
    "orderID": "1235425342",
    "province": "مرکزی",
    "city": "محلات",
    "address": "کوی بعثت، کوچه شهید جمهوری",
    "postal": "3781156173",
    "phoneNumber": "+989038338886",
    "productLink": "",
    "chosenFeature": "",
    "paymantStatus": "1",
    "transitionsStatus": "queue",
    "quantity": "1",
    "transition": "TIPAX",
    "product": "Blue De Chanel",
    "date": "1401/02/14"
  }]
]




export default function Orders({ }: Props) {
  const [selectedOrderOption, setselectedOrderOption] = useState(OrderOptions[0])
  const [OrdersList, setOrdersList] = useState(orders)

  const filterOrders = (id) => {

    if (id === "0") setOrdersList(orders)
    if (id != "0") {
      const filteredList = orders.filter((order) => order[0].paymantStatus === id)
      setOrdersList(filteredList)
    }

  }

  return (
    <div className='flex flex-col gap-7 pb-2 w-full'>
      <div className='absolute left-[20px] top-5 w-8 h-8 stroke-gray-600'><SettingIcon /></div>

      <div className='flex flex-row gap-4 w-full p-4 overflow-x-scroll scrollbar-hide'>
        {OrderOptions.map((opt, index) => <OrderOption filterOrders={filterOrders} isSelected={opt.id === selectedOrderOption.id} setselectedOrderOption={setselectedOrderOption} key={opt.id} opt={opt} />)}
      </div>
      <AnimateSharedLayout>
        <motion.div layout className='flex flex-col gap-4 w-full '>
          {OrdersList.map((order, index) => <OrderItem order={order} key={index} />)}
        </motion.div>
      </AnimateSharedLayout>
    </div>
  )
}