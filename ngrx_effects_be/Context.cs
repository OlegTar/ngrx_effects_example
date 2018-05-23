using Microsoft.EntityFrameworkCore;
using ngrx_effects_be.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngrx_effects_be
{
    public class Context: DbContext
    {
        public DbSet<Message> Messages{ get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=messages.db");
        }
    }
}
