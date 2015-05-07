
CREATE VIEW [dbo].[U14]
AS
SELECT        dbo.Parent.FirstName, dbo.Parent.LastName, dbo.Parent.Email, dbo.Racer.DateOfBirth
FROM            dbo.RacerToParent INNER JOIN
                         dbo.Racer ON dbo.RacerToParent.RacerId = dbo.Racer.Id INNER JOIN
                         dbo.Parent ON dbo.Parent.Id = dbo.RacerToParent.ParentId
WHERE        (dbo.Racer.DateOfBirth >= '2000-12-31' AND dbo.Racer.DateOfBirth < '2002-12-31')

