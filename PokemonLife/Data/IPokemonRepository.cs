using PokemonLife.Data.Entities;
using System.Collections.Generic;

namespace PokemonLife.Data
{
    public interface IPokemonRepository
    {
        IEnumerable<Attack> GetAllAttacks();

        IEnumerable<Pokemon> GetAllPokemons();

        Pokemon GetPokemonById(int id);

        PokemonStats GetPokemonStatsById(int pokemonId);

        IEnumerable<PokemonStats> GetPokemonsStats();

        Attack GetAttackById(int attackId);

        IEnumerable<Attack> GetPokemonAttacks(int pokemonId);
    }
}
