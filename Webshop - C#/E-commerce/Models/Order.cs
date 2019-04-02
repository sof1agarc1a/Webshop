using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Models
{
    public class Order
    {
        public List <Order_Customer> order_customer { get; set; }
        public List <Cart> cart { get; set; }
    }
}
