//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SkiBrain.DataAccess
{
    using System;
    using System.Collections.Generic;
    
    public partial class Season
    {
        public Season()
        {
            this.Racers = new HashSet<Racer>();
        }
    
        public int Id { get; set; }
        public string Name { get; set; }
    
        public virtual ICollection<Racer> Racers { get; set; }
    }
}
