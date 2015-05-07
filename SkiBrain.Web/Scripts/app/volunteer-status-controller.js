angular.module('SpacApp', [])
    .controller('VolunteerStatusController', VolunteerStatusController);

function VolunteerStatusController($http)
{
    this.lastName = "";
    this.errorMessage = "";
    this.working = false;
    this.volunteerStatus = null;

    that = this;

    this.get = function (lastNameOverride) {
        that.errorMessage = "";
        that.working = true;

        lastNameToUse = lastNameOverride ? lastNameOverride : that.lastName;

        $http.get("/api/volunteerstatus?lastName=" + lastNameToUse).success(function (data, status, headers, config) {
            if (!data || data.length == 0) {
                that.errorMessage = "No data found for that last name";
            }

            that.volunteerStatus = data;
            that.working = false;
        }).error(function (data, status, headers, config) {
            that.errorMessage = "Oops... something went wrong";
            that.working = false;
        });
    }
};
