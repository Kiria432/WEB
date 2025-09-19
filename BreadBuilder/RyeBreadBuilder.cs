using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BreadBuilder.Models;

namespace BreadBuilder.models
{
    public class RyeBreadBuilder : BreadBuilders
    {
        public Bread Bread { get; set; }

        public void SetAddItivize()
        {
        }

        public void setFlour()
        {
            this.Bread.Flour = new Flour { Sort = "Params: mywa_1 cogra" };
        }

        public void SetSalt()
        {
            this.Bread.Salt = new Salt();
        }
    }
}