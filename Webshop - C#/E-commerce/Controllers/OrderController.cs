using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using E_commerce.Models;
using E_commerce.Repositories;
using E_commerce.Services;

namespace E_commerce.Controllers
{

    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        private readonly OrderServices orderServices;

        public OrderController(IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("ConnectionString");
            this.orderServices = new OrderServices(new Order_CustomerRepository(connectionString), new CartRepository(connectionString));
        }

        [HttpGet("{guid}")]
        [ProducesResponseType(typeof(Order), StatusCodes.Status200OK)]
        [ProducesResponseTypeAttribute(StatusCodes.Status404NotFound)]
        public IActionResult Get(string guid)
        {
            return Ok(this.orderServices.Get(guid));
        }
    }
}