using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Models
{
    public class Products
    {
        public int id { get; set; }
        public string name { get; set; }
        public string img { get; set; }
        public int price { get; set; }
        public int quantity { get; set; }
        public string category { get; set; }
        public string description { get; set; }
    }
}
