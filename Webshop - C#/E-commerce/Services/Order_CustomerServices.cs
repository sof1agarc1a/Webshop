using System.Collections.Generic;
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

        public List<Order_Customer> Get(string guid)
        {
            return this.order_CustomerRepository.Get(guid);
        }

        public bool Add(Order_Customer order_Customer)
        {
            if (order_Customer != null)
            {
                this.order_CustomerRepository.Add(order_Customer);
                return true;
            }

            return false;
        }
    }
}
