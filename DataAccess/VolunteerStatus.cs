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
    
    public partial class VolunteerStatus
    {
        public int Id { get; set; }
        public int VolunteerRecordId { get; set; }
        public int RequiredDayCount { get; set; }
        public int CommittedDayCount { get; set; }
        public int PendingDayCount { get; set; }
        public string PendingDays { get; set; }
        public string CommittedDays { get; set; }
        public int TenantId { get; set; }
    
        public virtual VolunteerRecord VolunteerRecord { get; set; }
        public virtual Tenant Tenant { get; set; }
    }
}
