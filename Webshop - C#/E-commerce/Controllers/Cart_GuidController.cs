using System;
using Microsoft.AspNetCore.Mvc;

namespace E_commerce.Repositories
{
    [Route("api/[controller]")]
    public class Cart_GuidController : Controller
    {
        [HttpGet]
        public Guid Get()
        {
            Guid guid;
            guid = Guid.NewGuid();
            return guid;
        }
    }
}

   