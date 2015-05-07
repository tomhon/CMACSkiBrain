using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SkiBrain.Web.Models
{
    public class VolunteerStatusModel
    {
        public int Id;

        public string LastName;

        public List<string> Racers = new List<string>();

        public int DaysRequired;

        public bool DaysRequiredAdjusted;

        public List<string> PendingDays = new List<string>();

        public List<string> CommittedDays = new List<string>();
    }
}