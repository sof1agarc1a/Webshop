using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_commerce.Models;
using System.Data.SQLite;
using Dapper;

namespace E_commerce.Repositories
{
    public class CartRepository
    {
        private readonly string connectionString;

        public CartRepository(string connectionstring)
        {
            this.connectionString = connectionstring;
        }


        public List<Cart> Get(string guid)
        {

            using (SQLiteConnection connection = new SQLiteConnection(this.connectionString))
            {
                return connection.Query<Cart>("SELECT Cart.id, Cart.cart_id, product_id, product_quantity, product_title, img, price, SUM(price) AS total_price, description, product_artist, product_release, SUM(product_quantity) AS total_quantity FROM Cart LEFT JOIN Products ON product_id = Products.id WHERE cart_id = @guid GROUP BY product_id", new { guid }).ToList();
            }
        }
          

        public void Add(Cart cart)
        {
            using (SQLiteConnection connection = new SQLiteConnection(this.connectionString))
            {
                connection.Execute("INSERT INTO Cart (cart_id, product_id) VALUES(@cart_id, @product_id)", cart);
            }
        }


        public void Delete(int id)
        {
            using (SQLiteConnection connection = new SQLiteConnection(this.connectionString))
            {
                connection.Execute("DELETE FROM Cart WHERE id = @id", new { id });

            }
        }
    }
}
