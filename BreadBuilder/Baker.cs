using BreadBuilder.Models;

namespace BreadBuilder.models
{
    public class Baker
    {
        public Bread Bake(BreadBuilders breadBuilder)
        {
            breadBuilder.CreateBread();
            breadBuilder.SetFlour();
            breadBuilder.SetSalt();
            breadBuilder.SetAdditives();
            return breadBuilder.Bread;
        }
    }
}