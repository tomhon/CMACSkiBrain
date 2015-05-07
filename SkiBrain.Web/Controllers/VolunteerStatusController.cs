using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

using SkiBrain.DataAccess;
using SkiBrain.Web.Models;

using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DataContracts;
using System.Diagnostics;

namespace SkiBrain.Web.Controllers
{
    public class VolunteerStatusController : ApiController
    {
        private SkiDBEntities databaseEntities = new SkiDBEntities();

        private TelemetryClient telemetryClient = new TelemetryClient();

        [ResponseType(typeof(List<VolunteerStatusModel>))]
        public async Task<IHttpActionResult> Get(string lastName)
        {
            telemetryClient.Context.Properties.Add("LastName", lastName);

            var stopWatch = new Stopwatch();
            stopWatch.Start();

            var records = this.databaseEntities.VolunteerRecords.Where<VolunteerRecord>(e => (e.FamilyLastName.Contains(lastName) || lastName.Contains(e.FamilyLastName) || e.Id.ToString() == lastName) && e.TenantId == 1).ToList<VolunteerRecord>();

            List<VolunteerStatusModel> returnResult = new List<VolunteerStatusModel>();
            foreach (var record in records)
            {
                VolunteerStatusModel status = null;
                if (record != null)
                {
                    status = new VolunteerStatusModel()
                    {
                        Id = record.Id,
                        LastName = record.FamilyLastName
                    };
                    returnResult.Add(status);

                    foreach (var racer in record.Racers)
                    {
                        status.Racers.Add(string.Format("{0} {1} ({2})", racer.FirstName, racer.LastName, racer.MembershipType.Name));
                    }

                    var volunteerStatusRecord = record.VolunteerStatus.SingleOrDefault();

                    if (volunteerStatusRecord != null)
                    {
                        foreach (var committedDay in volunteerStatusRecord.CommittedDays.Split(';'))
                        {
                            if (string.IsNullOrEmpty(committedDay) == false)
                            {
                                status.CommittedDays.Add(committedDay);
                            }
                        }

                        foreach (var pendingDay in volunteerStatusRecord.PendingDays.Split(';'))
                        {
                            if (string.IsNullOrEmpty(pendingDay) == false)
                            {
                                status.PendingDays.Add(pendingDay);
                            }
                        }

                        if (volunteerStatusRecord.RequiredDayCount > 8)
                        {
                            status.DaysRequired = 8;
                            status.DaysRequiredAdjusted = true;
                        }
                        else
                        {
                            status.DaysRequired = volunteerStatusRecord.RequiredDayCount;
                            status.DaysRequiredAdjusted = false;
                        }
                    }
                }
            }
            

            stopWatch.Stop();
            this.SendEventTelemetry("GetVolunteerStatus_Web", stopWatch.ElapsedMilliseconds);

            return this.Ok<List<VolunteerStatusModel>>(returnResult);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing && databaseEntities != null)
            {
                this.databaseEntities.Dispose();
            }

            base.Dispose(disposing);
        }

        private void SendEventTelemetry(string name, long durationMilliseconds)
        {
            var telemetry = new EventTelemetry(name);
            telemetry.Metrics.Add("Duration", durationMilliseconds);
            this.telemetryClient.TrackEvent(telemetry);
        }
    }
}
