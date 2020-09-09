using Microsoft.EntityFrameworkCore;
using PokemonLife.Data.Entities;

namespace PokemonLife.Data
{
    public class PokemonContext : DbContext
    {
        public PokemonContext(DbContextOptions<PokemonContext> options) : base(options)
        {

        }

        public DbSet<Pokemon> Pokemons { get; set; }
        public DbSet<PokemonStats> PokemonStats { get; set; }
        public DbSet<Attack> Attacks { get; set; }
        public DbSet<PokemonAttackPool> PokemonAttackPools { get; set; }
    }
}
