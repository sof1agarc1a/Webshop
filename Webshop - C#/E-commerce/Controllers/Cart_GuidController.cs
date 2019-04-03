using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
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

   