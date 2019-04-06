using E_commerce.Repositories;
using E_commerce.Services;
using NUnit.Framework;

namespace E_commerce.IntegrationTests.Services
{
    class ProductsServiceTests
    {
        private ProductsServices productsServices;

        [SetUp]
        public void SetUp()
        {
            this.productsServices = new ProductsServices(new ProductsRepository("Data Source=/Users/sofga/Desktop/Webshop/Webshop - C#/E-commerce/webshop.db;Version=3;"));
        }

        [Test]
        public void Get_ReturnsResultsFromItemTable()
        {
            var results = this.productsServices.Get();
            var thisId = 1;
            var thisTitle = "Kiss Land";
            var thisPrice = 360;
            var thisImg = "LP15.jpg";

            Assert.That(results.Count, Is.EqualTo(7));
            Assert.That(results[1].id, Is.EqualTo(thisId));
            Assert.That(results[1].product_title, Is.EqualTo(thisTitle));
            Assert.That(results[1].price, Is.EqualTo(thisPrice));
            Assert.That(results[1].img, Is.EqualTo(thisImg));
        }

        [Test]
        public void Get_PN_ReturnsResultsFromDatabase()
        {
            const string key = "5";
            var result = this.productsServices.Get(key);

            Assert.That(result[0].id, Is.EqualTo(5));
            Assert.That(result[0].price, Is.EqualTo(340));
        }
    }
}
