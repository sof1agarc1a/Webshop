using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_commerce.Models;
using System.Data.SQLite;
using Dapper;

namespace E_commerce.Repositories
{
    public class Order_ProductsRepository
    {
        private readonly string connectionString;

        public Order_ProductsRepository(string connectionstring)
        {
            this.connectionString = connectionstring;
        }

        public List<Order_Products> Get()
        {
            using (var connection = new SQLiteConnection(this.connectionString))
            {
                return connection.Query<Order_Products>("SELECT * FROM Order_Products").ToList();
            }
        }

        public List<Order_Products> Get(string key)
        {
            using (SQLiteConnection connection = new SQLiteConnection(this.connectionString))
            {
                return connection.Query<Order_Products>("SELECT * FROM Order_Products WHERE id = @key", new { key }).ToList();
            }
        }

        public Order_Products Get(int id)
        {
            using (var connection = new SQLiteConnection(this.connectionString))
            {
                return connection.QuerySingleOrDefault<Order_Products>("SELECT * FROM Order_Products WHERE Id = @Id", new { id });
            }
        }
    }
}
