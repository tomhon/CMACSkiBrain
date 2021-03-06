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
    
    public partial class Racer
    {
        public Racer()
        {
            this.Seasons = new HashSet<Season>();
            this.Parents = new HashSet<Parent>();
            this.VolunteerRecords = new HashSet<VolunteerRecord>();
        }
    
        public int Id { get; set; }
        public int TenantId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public System.DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public int MembershipTypeId { get; set; }
    
        public virtual Tenant Tenant { get; set; }
        public virtual ICollection<Season> Seasons { get; set; }
        public virtual ICollection<Parent> Parents { get; set; }
        public virtual MembershipType MembershipType { get; set; }
        public virtual ICollection<VolunteerRecord> VolunteerRecords { get; set; }
    }
}
