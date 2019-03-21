using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_commerce.Models;
using E_commerce.Repositories;

namespace E_commerce.Services
{
    public class Order_ProductsServices
    {
        private readonly Order_ProductsRepository order_ProductsRepository;
        public Order_ProductsServices(Order_ProductsRepository order_ProductsRepository)
        {
            this.order_ProductsRepository = order_ProductsRepository;
        }
        public List<Order_Products> Get()
        {
            return this.order_ProductsRepository.Get();
        }
        public List<Order_Products> Get(string key)
        {
            return this.order_ProductsRepository.Get(key);
        }
    }
}

