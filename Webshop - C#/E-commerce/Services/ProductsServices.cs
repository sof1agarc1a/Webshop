using System.Collections.Generic;
using E_commerce.Models;
using E_commerce.Repositories;

namespace E_commerce.Services
{
    public class ProductsServices
    {
        private readonly ProductsRepository productRepository;
        public ProductsServices(ProductsRepository productRepository)
        {
            this.productRepository = productRepository;
        }
        public List<Products> Get()
        {
            return this.productRepository.Get();
        }
        public List<Products> Get(string key)
        {
            return this.productRepository.Get(key);
        }
    }
}
