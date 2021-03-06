﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using E_commerce.Models;
using E_commerce.Repositories;
using E_commerce.Services;

namespace E_commerce.Controllers
{
    [Route("api/[controller]")]
    public class CartController : Controller
    {
        private readonly string connectionString;
        private readonly CartServices cartService;


        public CartController(IConfiguration configuration)
        {
            this.connectionString = configuration.GetConnectionString("ConnectionString");
            this.cartService = new CartServices(new CartRepository(connectionString));
        }


        [HttpGet("{guid}")]
        [ProducesResponseType(typeof(Cart), StatusCodes.Status200OK)]
        [ProducesResponseTypeAttribute(StatusCodes.Status404NotFound)]
        public IActionResult Get(string guid)
        {
            var result = this.cartService.Get(guid);
            return Ok(result);
        }


        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Post([FromBody]Cart cart)
        {
            var result = this.cartService.Add(cart);

            if (!result)
            {
                return BadRequest();
            }

            return Ok();
        }


        [HttpDelete("{id}")]
        [ProducesResponseType(typeof(Cart), StatusCodes.Status200OK)]
        [ProducesResponseTypeAttribute(StatusCodes.Status404NotFound)]
        public void Delete(int id)
        {
            this.cartService.Delete(id);
        }

    }
}