namespace PokemonLife.Data.Entities
{
    public class PokemonStats
    {
        public int Id { get; set; }

        public int Health { get; set; }

        public int Attack { get; set; }

        public int Defence { get; set; }

        public int SpecialAttack { get; set; }

        public int SpecialDefence { get; set; }

        public int Speed { get; set; }

        public int PrimaryTypeId { get; set; }

        public int? SecondaryTypeId { get; set; }

        public int MinimalLevel { get; set; }
    }
}
