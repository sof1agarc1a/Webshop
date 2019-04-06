using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using E_commerce.Models;
using E_commerce.Repositories;
using E_commerce.Services;

namespace E_commerce.Controllers
{
    [Route("api/[controller]")]
    public class Order_CustomerController : Controller
    {
        private readonly string connectionString;
        private readonly Order_CustomerServices order_CustomerService;


        public Order_CustomerController(IConfiguration configuration)
        {
            this.connectionString = configuration.GetConnectionString("ConnectionString");
            this.order_CustomerService = new Order_CustomerServices(new Order_CustomerRepository(connectionString));
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<Order_Customer>), StatusCodes.Status200OK)]
        public IActionResult Get()

        {
            return Ok(this.order_CustomerService.Get());
        }

        [HttpGet("{guid}")]
        [ProducesResponseType(typeof(Cart), StatusCodes.Status200OK)]
        [ProducesResponseTypeAttribute(StatusCodes.Status404NotFound)]
        public IActionResult Get(string guid)
        {
            var result = this.order_CustomerService.Get(guid);
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Post([FromBody]Order_Customer order_Customer)
        {
            var result = this.order_CustomerService.Add(order_Customer);

            if (!result)
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}