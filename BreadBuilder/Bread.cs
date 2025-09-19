using System.Text;

namespace BreadBuilder.Models
{
    public class Bread
    {
        public Flour Flour { get; set; }
        public Salt Salt { get; set; }
        public Additives Additives { get; set; }
        public override string ToString()
        {
            StringBuilder stringBuilder = new StringBuilder();
            if (Flour != null)
                stringBuilder.AppendLine(Flour.Sort);

            if (Salt != null)
                stringBuilder.AppendLine("Соль:");

            if (Additives != null)
                stringBuilder.AppendLine($"Добавки: {Additives.Name}");
            return stringBuilder.ToString();
        }
    }
}