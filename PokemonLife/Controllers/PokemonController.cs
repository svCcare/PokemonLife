using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using PokemonLife.Data;
using PokemonLife.Data.Entities;

namespace PokemonLife.Controllers
{
    [ApiController]
    public class PokemonController : ControllerBase
    {
        private readonly IPokemonRepository _pokemonRepository;

        public PokemonController(IPokemonRepository pokemonRepository)
        {
            _pokemonRepository = pokemonRepository;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public ActionResult<IEnumerable<Pokemon>> Get()
        {
            try
            {
                return Ok(_pokemonRepository.GetAllPokemons());
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get all pokemons");
            }
        }

        [HttpGet]
        [Route("api/[controller]/stats")]
        public ActionResult<IEnumerable<PokemonStats>> GetPokemonStats()
        {
            try
            {
                return Ok(_pokemonRepository.GetPokemonsStats());
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get all pokemons stats");
            }
        }

        [HttpGet]
        [Route("api/[controller]/stats/{id:int}")]
        public ActionResult<PokemonStats> GetPokemonStatsById(int id)
        {
            try
            {
                return Ok(_pokemonRepository.GetPokemonStatsById(id));
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get all pokemons stats");
            }
        }

        [HttpGet]
        [Route("api/[controller]/attacks")]
        public ActionResult<IEnumerable<Attack>> GetAllAttacks()
        {
            try
            {
                return Ok(_pokemonRepository.GetAllAttacks());
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get all pokemons stats");
            }
        }
    }
}