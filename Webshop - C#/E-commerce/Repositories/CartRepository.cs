﻿using System;
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

        public List<Cart> Get()
        {
            using (var connection = new SQLiteConnection(this.connectionString))
            {
                return connection.Query<Cart>("SELECT * FROM Cart").ToList();
            }
        }

        public List<Cart> Get(string key)
        {
            using (SQLiteConnection connection = new SQLiteConnection(this.connectionString))
            {
                return connection.Query<Cart>("SELECT * FROM Cart WHERE id = @key", new { key }).ToList();
            }
        }

        public Cart Get(int id)
        {
            using (var connection = new SQLiteConnection(this.connectionString))
            {
                return connection.QuerySingleOrDefault<Cart>("SELECT * FROM Cart WHERE Id = @Id", new { id });
            }
        }
    }
}
