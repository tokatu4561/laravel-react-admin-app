import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";
import { Paginater } from "../../components/Paginater";
import { IOrder } from "../../types/order";
import { IOrderItem } from "../../types/orderItems";

const hide = {
  maxHeight: 0,
  transition: "1000ms ease-in",
};

const show = {
  maxHeight: "150px",
  transition: "1000ms ease-out",
};

const Orders = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`orders?page=${page}`);

      setOrders(data.data);
      setLastPage(data.meta.last_page);
    })();
  }, [page]);

  const select = (id: number) => {
    setSelected(selected !== id ? id : 0);
  };

  return (
    <Layout>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <a href="#" className="btn btn-sm btn-outline-secondary">
          Export
        </a>
      </div>

      <div className="table-responsive">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o: IOrder) => {
              return (
                <>
                  <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{o.name}</td>
                    <td>{o.email}</td>
                    <td>{o.total}</td>
                    <td>
                      <a
                        href="#"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => select(o.id)}
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={5}>
                      <div className="">
                        <table className="table table-sm">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Product Title</th>
                              <th>Quantity</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {o.order_items.map((i: IOrderItem) => {
                              return (
                                <tr>
                                  <td>aaaaa</td>
                                  <td>{i.product_title}</td>
                                  <td>{i.quantity}</td>
                                  <td>{i.price}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      <Paginater currentPage={page} lastPage={lastPage} pageChange={setPage} />
    </Layout>
  );
};

export default Orders;
