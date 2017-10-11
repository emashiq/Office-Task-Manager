using Microsoft.EntityFrameworkCore;

namespace Office_Task_Manager.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            
        }
        public DbSet<UserAccounts> UserAccounts { get;set;}
    }
}