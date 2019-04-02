using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using E_commerce.Models;
using E_commerce.Repositories;
using E_commerce.Services;

namespace E_commerce.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly string connectionString;
        private readonly ProductsServices productsService;


        public ProductsController(IConfiguration configuration)
        {
            this.connectionString = configuration.GetConnectionString("ConnectionString");
            this.productsService = new ProductsServices(new ProductsRepository(connectionString)); 
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<Products>), StatusCodes.Status200OK)]
        public IActionResult Get()

        {
            return Ok(this.productsService.Get());
        }

        [HttpGet("{key}")]
        [ProducesResponseType(typeof(Products), StatusCodes.Status200OK)]
        [ProducesResponseTypeAttribute(StatusCodes.Status404NotFound)]
        public IActionResult Get(string key)
        {
            var result = this.productsService.Get(key);
            return Ok(result);
        }
    }
}
