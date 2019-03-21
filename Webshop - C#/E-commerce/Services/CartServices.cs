using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_commerce.Models;
using E_commerce.Repositories;

namespace E_commerce.Services
{
    public class CartServices
    {
        private readonly CartRepository cartRepository;
        public CartServices(CartRepository cartRepository)
        {
            this.cartRepository = cartRepository;
        }
        public List<Cart> Get()
        {
            return this.cartRepository.Get();
        }
        public List<Cart> Get(string key)
        {
            return this.cartRepository.Get(key);
        }
    }
}
