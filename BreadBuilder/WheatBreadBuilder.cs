using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BreadBuilder.Models;

namespace BreadBuilder.models
{
    public class WheatBreadBuilder : BreadBuilders
    {
        public Bread Bread { get; set; }

        public void SetAdditives()
        {
            this.Bread.Additives = new Additives { Name = "улучшитель муки" };
        }

        public void setFlour()
        {
            Bread.Flour = new Flour { Sort = "Пшеничная мука высший сорт" };
        }

        public void SetSalt()
        {
            Bread.Salt = new Salt();
        }
    }
}