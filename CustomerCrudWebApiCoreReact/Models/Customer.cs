using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace CustomerCrudWebApiCoreReact.Models
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string  CustomerName { get; set; }
        [Column(TypeName = "nvarchar(150)")]
        public string  Address { get; set; }
        [Column(TypeName = "nvarchar(11)")]
        public string Mobil { get; set; }
    }
}
