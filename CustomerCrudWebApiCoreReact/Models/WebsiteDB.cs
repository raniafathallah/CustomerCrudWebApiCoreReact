using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerCrudWebApiCoreReact.Models;

namespace CustomerCrudWebApiCoreReact.Models
{
    public class WebsiteDB : DbContext
    {

        public WebsiteDB(DbContextOptions<WebsiteDB> options) : base(options)
        {

        }
        public DbSet<Customer> Customers;
        public DbSet<CustomerCrudWebApiCoreReact.Models.Customer> Customer { get; set; }
  
    }
}
