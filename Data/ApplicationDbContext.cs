using AspNetNextJsMUIApp.Models;
using Microsoft.EntityFrameworkCore;

namespace AspNetNextJsMUIApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public required DbSet<Student> Students { get; set; }
    }
}
