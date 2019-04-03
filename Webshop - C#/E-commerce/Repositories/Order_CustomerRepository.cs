using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

    }
}
