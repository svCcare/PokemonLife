namespace PokemonLife.Data.Entities
{
    public class Attack
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int? Power { get; set; }

        public int Accuracy { get; set; }

        public string BoostStats { get; set; }

        public int? TypeId { get; set; }

        public bool IsSpecial { get; set; }
    }
}