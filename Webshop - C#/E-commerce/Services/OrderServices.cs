using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_commerce.Models;
using E_commerce.Repositories;

namespace E_commerce.Services
{
    public class OrderServices
    {
        private readonly Order_CustomerRepository order_customerRepository;
        private readonly CartRepository cartRepository;

        public OrderServices(Order_CustomerRepository order_customerRepository, CartRepository cartRepository)
        {
            this.order_customerRepository = order_customerRepository;
            this.cartRepository = cartRepository;
        }

        public Order Get(string guid)
        {
            var order_customer = this.order_customerRepository.Get(guid);
            var cart = this.cartRepository.Get(guid);

            return new Order
            {
                order_customer = order_customer,
                cart = cart

            };
        }
    }
}
