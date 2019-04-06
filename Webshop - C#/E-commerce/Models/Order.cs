using System.Collections.Generic;

namespace E_commerce.Models
{
    public class Order
    {
        public List <Order_Customer> order_customer { get; set; }
        public List <Cart> cart { get; set; }
    }
}
