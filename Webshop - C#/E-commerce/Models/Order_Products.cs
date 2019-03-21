using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Models
{
    public class Order_Products
    {
        public int id { get; set; }
        public int order_id { get; set; }
        public string product_title { get; set; }
        public int product_quantity { get; set; }
        public int product_total_price { get; set; }
    }
}
