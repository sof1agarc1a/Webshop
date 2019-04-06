using System.Collections.Generic;
using System.Linq;
using E_commerce.Models;
using System.Data.SQLite;
using Dapper;

namespace E_commerce.Repositories
{
    public class Order_CustomerRepository
    {
        private readonly string connectionString;

        public Order_CustomerRepository(string connectionstring)
        {
            this.connectionString = connectionstring;
        }

        public List<Order_Customer> Get()
        {
            using (var connection = new SQLiteConnection(this.connectionString))
            {
                return connection.Query<Order_Customer>("SELECT * FROM Order_Customer").ToList();
            }
        }

        public List<Order_Customer> Get(string guid)
        {
            using (SQLiteConnection connection = new SQLiteConnection(this.connectionString))
            {
                return connection.Query<Order_Customer>("SELECT * FROM Order_Customer WHERE ordered_cart = @guid", new { guid }).ToList();
            }
        }

        public void Add(Order_Customer order_Customer)
        {
            using (SQLiteConnection connection = new SQLiteConnection(this.connectionString))
            {
                connection.Execute("INSERT INTO Order_Customer (name_customer, adress_customer, ordered_cart) VALUES(@name_customer, @adress_customer, @ordered_cart)", order_Customer);
            }
        }
    }
}
