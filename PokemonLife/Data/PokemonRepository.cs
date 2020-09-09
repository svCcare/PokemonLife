using PokemonLife.Data.Entities;
using System.Collections.Generic;
using System.Linq;

namespace PokemonLife.Data
{
    public class PokemonRepository : IPokemonRepository
    {
        private readonly PokemonContext _ctx;

        public PokemonRepository(PokemonContext ctx)
        {
            _ctx = ctx;
        }

        public IEnumerable<Pokemon> GetAllPokemons()
        {
            return _ctx.Pokemons
                .OrderBy(x => x.Id)
                .ToList();
        }

        public IEnumerable<Attack> GetAllAttacks()
        {
            return _ctx.Attacks
                .ToList();
        }

        public Pokemon GetPokemonById(int id)
        {
            return _ctx.Pokemons
                .FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<PokemonStats> GetPokemonsStats()
        {
            return _ctx.PokemonStats
                .ToList();
        }

        public PokemonStats GetPokemonStatsById(int pokemonId)
        {
            return _ctx.PokemonStats
                .FirstOrDefault(x => x.Id == pokemonId);
        }

        public Attack GetAttackById(int attackId)
        {
            return _ctx.Attacks
                .FirstOrDefault(x => x.Id == attackId);
        }

        public IEnumerable<Attack> GetPokemonAttacks(int pokemonId)
        {
            var attackList = new List<Attack>();

            var availableAttacksIds = _ctx.PokemonAttackPools
                .Where(p => p.PokemonId == pokemonId)
                .Select(a => a.AttackId)
                .ToList();

            foreach (var attackId in availableAttacksIds)
            {
                attackList.Add(GetAttackById(attackId));
            }

            return attackList;
        }
    }
}
