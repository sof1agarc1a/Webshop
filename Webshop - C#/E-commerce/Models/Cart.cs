using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Models
{
    public class Cart
    {
        public int id { get; set; }
        public string cart_id { get; set; }
        public int product_id { get; set; }
        public int product_quantity { get; set; }
        public int total_quantity { get; set; }

        public string product_title { get; set; }
        public string img { get; set; }
        public int price { get; set; }
        public int total_price { get; set; }
        public string description { get; set; }
        public string product_artist { get; set; }
        public int product_release { get; set; }
    }
}
