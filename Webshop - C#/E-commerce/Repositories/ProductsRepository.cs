using System.Collections.Generic;
using System.Linq;
using E_commerce.Models;
using System.Data.SQLite;
using Dapper;


namespace E_commerce.Repositories
{
    public class ProductsRepository
    {

        private readonly string connectionString;

        public ProductsRepository(string connectionstring)
        {
            this.connectionString = connectionstring;
        }

        public List<Products> Get()
        {
            using (var connection = new SQLiteConnection(this.connectionString))
            {
                return connection.Query<Products>("SELECT * FROM Products").ToList();
            }
        }


        public List<Products> Get(string key)
        {
            using (SQLiteConnection connection = new SQLiteConnection(this.connectionString))
            {
                return connection.Query<Products>("SELECT * FROM Products WHERE id = @key", new { key }).ToList();
            }
        }
    }
}