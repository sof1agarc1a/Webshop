using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Models
{
    public class Cart
    {
        public int id { get; set; }
        public int product_id { get; set; }
        public int cart_price { get; set; }
        public int cart_quantity { get; set; }
    }
}
