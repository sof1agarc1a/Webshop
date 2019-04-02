using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_commerce.Models;
using E_commerce.Repositories;
using System.Transactions;

namespace E_commerce.Services
{
    public class CartServices
    {
        private readonly CartRepository cartRepository;
        public CartServices(CartRepository cartRepository)
        {
            this.cartRepository = cartRepository;
        }


        public List<Cart> Get(int id)
        {

            var cart = this.cartRepository.Get(id);

            if (cart == null)
            {
                return null;
            }

            return cart;

        }


        public bool Add(Cart cart)
        {
            if (cart != null)
            {
                this.cartRepository.Add(cart);
                return true;
            }

            return false;
        }


        public void Delete(int id)
        {
            this.cartRepository.Delete(id);
        }
    }
}
