import { useState, useEffect } from 'react';

import { getCurrentOrder } from "@/lib/commerce/order";
import { subscribe, unsubscribe } from '@/lib/events';
import events from '@/constants/events';

export const useCurrentOrder = () => {
  const [currentOrder, setCurrentOrder] = useState({});
  const [alreadySubscribed, setAlreadySubscribed] = useState<Boolean>(false);

  useEffect(() => {
    if (alreadySubscribed) return;

    const sub = subscribe(events.order.addToCart, fetchCurrentOrder);

    setAlreadySubscribed(true);

    return () => {
      unsubscribe(events.order.addToCart, sub);
    };
  }, [alreadySubscribed]);

  const fetchCurrentOrder = async () => {
    const order = await getCurrentOrder();

    if (order) {
      setCurrentOrder(order);
    }
  };

  useEffect(() => {
    fetchCurrentOrder();
  }, []);

  return currentOrder;
}
