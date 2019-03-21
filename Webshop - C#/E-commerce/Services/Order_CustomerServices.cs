using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_commerce.Models;
using E_commerce.Repositories;

namespace E_commerce.Services
{
    public class Order_CustomerServices
    {
        private readonly Order_CustomerRepository order_CustomerRepository;
        public Order_CustomerServices(Order_CustomerRepository order_CustomerRepository)
        {
            this.order_CustomerRepository = order_CustomerRepository;
        }
        public List<Order_Customer> Get()
        {
            return this.order_CustomerRepository.Get();
        }
        public List<Order_Customer> Get(string key)
        {
            return this.order_CustomerRepository.Get(key);
        }
    }
}
