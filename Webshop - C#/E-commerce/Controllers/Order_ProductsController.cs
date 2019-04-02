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
    public class Order_ProductsController : Controller
    {
        private readonly string connectionString;
        private readonly Order_ProductsServices order_ProductsService;


        public Order_ProductsController(IConfiguration configuration)
        {
            this.connectionString = configuration.GetConnectionString("ConnectionString");
            this.order_ProductsService = new Order_ProductsServices(new Order_ProductsRepository(connectionString));
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<Order_Products>), StatusCodes.Status200OK)]
        public IActionResult Get()

        {
            return Ok(this.order_ProductsService.Get());
        }

        [HttpGet("{key}")]
        [ProducesResponseType(typeof(Cart), StatusCodes.Status200OK)]
        [ProducesResponseTypeAttribute(StatusCodes.Status404NotFound)]
        public IActionResult Get(string key)
        {
            var result = this.order_ProductsService.Get(key);
            return Ok(result);
        }
    }
}