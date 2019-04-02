using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Models
{
    public class Order_Customer
    {
        public int id { get; set; }
        public string name_customer { get; set; }
        public string adress_customer { get; set; }
        public int ordered_cart { get; set; }
    }
}
