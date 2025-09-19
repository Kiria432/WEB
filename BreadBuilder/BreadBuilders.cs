using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BreadBuilder.Models
{
    public interface BreadBuilders
    {
        public Bread Bread { get; protected set; }

        public void CreateBread()
        {
            Bread = new Bread();
        }

        public abstract void SetFlour();
        public abstract void SetSalt();
        public abstract void SetAdditives();
    }
}